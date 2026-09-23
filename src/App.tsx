import React, { useState, useEffect } from 'react';
import { BoardMember, BrandingConfig, GDC_INSTAGRAM_URL } from './types';
import { INITIAL_BOARD_MEMBERS } from './data/boardData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BoardHierarchy } from './components/BoardHierarchy';
import { AboutGdc } from './components/AboutGdc';
import { Activities } from './components/Activities';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'gdc_board_roster_v1';
const BRANDING_STORAGE_KEY = 'gdc_branding_v1';

export default function App() {
  const [members, setMembers] = useState<BoardMember[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: BoardMember[] = JSON.parse(saved);
        const existingMap = new Map(parsed.map((m) => [m.id, m]));
        const merged: BoardMember[] = [];

        for (const defaultMember of INITIAL_BOARD_MEMBERS) {
          if (existingMap.has(defaultMember.id)) {
            const current = existingMap.get(defaultMember.id)!;
            if (current.id === 'gdc-head' && !current.instagram) {
              merged.push({
                ...current,
                instagram: GDC_INSTAGRAM_URL,
              });
            } else {
              merged.push(current);
            }
          } else {
            merged.push(defaultMember);
          }
        }

        // Include any custom members that were added dynamically if any
        for (const m of parsed) {
          if (!merged.some((item) => item.id === m.id)) {
            merged.push(m);
          }
        }

        return merged;
      }
    } catch (e) {
      console.error('Failed to load board data from storage', e);
    }
    return INITIAL_BOARD_MEMBERS;
  });

  const [branding] = useState<BrandingConfig>(() => {
    try {
      const saved = localStorage.getItem(BRANDING_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load branding data from storage', e);
    }
    return {};
  });

  // Keep roster persisted to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [members]);

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Header Navigation */}
      <Navbar
        memberCount={members.length}
        branding={branding}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          memberCount={members.length}
          gdcLogoUrl={branding.gdcLogoUrl}
        />

        {/* Board Section: Level-based Organizational Hierarchy */}
        <BoardHierarchy members={members} />

        {/* About GDC Supporting Section */}
        <AboutGdc />

        {/* GDC Activities Section */}
        <Activities />
      </main>

      {/* Footer with branding & official social channels */}
      <Footer branding={branding} />
    </div>
  );
}

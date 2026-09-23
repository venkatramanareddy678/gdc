import React, { useState } from 'react';
import { GdcLogo } from './GdcLogo';
import { SnistLogo } from './SnistLogo';
import { BoardMember, BrandingConfig, GDC_INSTAGRAM_URL } from '../types';
import { Instagram, Linkedin, MessageSquare, ArrowUp, ExternalLink, Copy, Check } from 'lucide-react';

interface FooterProps {
  branding?: BrandingConfig;
  members?: BoardMember[];
}

export const Footer: React.FC<FooterProps> = ({ branding, members }) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyRoster = () => {
    if (!members) return;
    navigator.clipboard.writeText(JSON.stringify(members, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-black border-t-2 border-neutral-800 text-white relative">
      {/* Top Banner Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <GdcLogo size="lg" showText={true} customLogoUrl={branding?.gdcLogoUrl} />
            </div>
            <p className="text-sm font-mono text-neutral-400 leading-relaxed uppercase">
              The official Game Development Club of Sreenidhi Institute of Science and Technology. Dedicated to game engineering, collegiate esports, creative media, and student collaboration.
            </p>
            <div className="text-base sm:text-lg font-black tracking-widest text-white uppercase font-['Outfit'] italic">
              "Create. Compete. Collaborate."
            </div>
          </div>

          {/* Center Navigation & Campus Address */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 font-mono text-xs">
            <div>
              <div className="text-neutral-500 uppercase tracking-widest mb-3 font-bold">
                NAVIGATION
              </div>
              <ul className="space-y-2 text-neutral-300">
                <li>
                  <a href="#board" className="hover:text-white transition-colors">
                    BOARD MEMBERS
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    ABOUT GDC
                  </a>
                </li>
                <li>
                  <a href="#activities" className="hover:text-white transition-colors">
                    ACTIVITIES & JAMS
                  </a>
                </li>
                <li>
                  <a href="#executives" className="hover:text-white transition-colors">
                    EXECUTIVE TEAM
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-neutral-500 uppercase tracking-widest mb-3 font-bold">
                COMMUNITY BASE
              </div>
              <div className="space-y-1.5 text-neutral-300">
                <p className="font-bold text-white">SNIST CAMPUS</p>
                <p>Yamnampet, Ghatkesar</p>
                <p>Hyderabad, Telangana 501301</p>
                <div className="pt-2">
                  <SnistLogo size="sm" showLabel={true} customLogoUrl={branding?.snistLogoUrl} />
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons & Official Community Channel */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              OFFICIAL CHANNELS
            </div>

            {/* Prominent GDC Instagram link badge */}
            <a
              href={GDC_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              title="Visit official GDC SNIST Instagram"
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white hover:border-white font-mono text-xs tracking-wider uppercase transition-colors shadow-lg"
            >
              <Instagram size={16} />
              <span className="font-bold">@GDC.SNIST</span>
              <ExternalLink size={12} className="text-neutral-400" />
            </a>

            <div className="flex items-center gap-3">
              {/* Instagram Icon Button */}
              <a
                href={GDC_INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                title="Follow @gdc.snist on Instagram"
                className="w-10 h-10 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="#contact"
                title="LinkedIn (Club network)"
                className="w-10 h-10 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin size={18} />
              </a>

              {/* Discord */}
              <a
                href="#contact"
                title="Discord Community (Coming Soon)"
                className="w-10 h-10 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                <MessageSquare size={18} />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                title="Return to top"
                className="w-10 h-10 border border-neutral-800 bg-black flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors ml-2"
              >
                <ArrowUp size={16} />
              </button>
            </div>
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
              INSTAGRAM: @GDC.SNIST • GAMING & ESPORTS COLLECTIVE
            </span>
          </div>
        </div>

        {/* Bottom Legal / Editorial Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} GAME DEVELOPMENT CLUB (GDC) • SNIST. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] tracking-wider uppercase">
            {members && (
              <button
                type="button"
                onClick={handleCopyRoster}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 bg-neutral-950 transition-colors"
                title="Copy current roster JSON (with all your images and names) to clipboard"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? 'ROSTER DATA COPIED!' : 'BACKUP / COPY ROSTER DATA'}</span>
              </button>
            )}
            <span>STUDENT ORGANISATION</span>
            <span>•</span>
            <span>ESPORTS & DEV COLLECTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

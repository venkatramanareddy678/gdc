import React, { useState } from 'react';
import { GdcLogo } from './GdcLogo';
import { SnistLogo } from './SnistLogo';
import { BrandingConfig, GDC_INSTAGRAM_URL } from '../types';
import { Menu, X, Instagram } from 'lucide-react';

interface NavbarProps {
  memberCount: number;
  branding: BrandingConfig;
}

export const Navbar: React.FC<NavbarProps> = ({
  memberCount,
  branding,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: GDC Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3.5 text-left p-1 -m-1 group">
              <GdcLogo size="md" customLogoUrl={branding.gdcLogoUrl} />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold tracking-widest text-lg sm:text-xl text-white font-['Outfit']">
                    GDC
                  </span>
                  <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 text-neutral-300 uppercase">
                    BOARD
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  GAME DEVELOPMENT CLUB • SNIST
                </span>
              </div>
            </a>
          </div>

          {/* Center/Right Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-xs font-mono tracking-widest uppercase text-neutral-400">
              <a
                href="#board"
                className="hover:text-white transition-colors py-2"
              >
                BOARD ({memberCount})
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors py-2"
              >
                ABOUT
              </a>
              <a
                href="#activities"
                className="hover:text-white transition-colors py-2"
              >
                ACTIVITIES
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors py-2"
              >
                CONTACT
              </a>
              <a
                href={GDC_INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                title="Follow @gdc.snist on Instagram"
                className="hover:text-white transition-colors py-2 flex items-center gap-1.5 text-neutral-300"
              >
                <Instagram size={14} />
                <span className="font-bold">@GDC.SNIST</span>
              </a>
            </nav>

            <div className="h-5 w-px bg-neutral-800" />

            {/* Subtle SNIST Crest */}
            <div className="hidden lg:flex items-center">
              <SnistLogo size="sm" showLabel={true} customLogoUrl={branding.snistLogoUrl} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800 bg-black font-mono text-sm uppercase">
            <nav className="flex flex-col space-y-3 px-2">
              <a
                href="#board"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                BOARD ROSTER ({memberCount})
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                ABOUT GDC
              </a>
              <a
                href="#activities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                ACTIVITIES & JAMS
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                CONTACT
              </a>
              <a
                href={GDC_INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-white bg-neutral-900/90 border border-neutral-700 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Instagram size={15} />
                  <span>INSTAGRAM (@GDC.SNIST)</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-400">VISIT ↗</span>
              </a>
            </nav>
            <div className="pt-4 px-5 border-t border-neutral-800 mt-3 flex items-center justify-between">
              <SnistLogo size="sm" showLabel={true} customLogoUrl={branding.snistLogoUrl} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

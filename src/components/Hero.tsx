import React from 'react';
import { GdcLogo } from './GdcLogo';
import { SnistLogo } from './SnistLogo';
import { ChevronDown, ArrowDown, Users, Shield, Terminal } from 'lucide-react';

interface HeroProps {
  memberCount: number;
  gdcLogoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ memberCount, gdcLogoUrl }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-black border-b border-neutral-800">
      {/* Subtle Gaming / Esports Grid & Crosshair Accents */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Decorative Technical Borders & Corner Crosshairs */}
      <div className="absolute top-10 left-6 sm:left-12 text-[10px] font-mono text-neutral-600 select-none tracking-widest hidden sm:block">
        SYS.LOC // 17.4589° N, 78.6811° E [SNIST CAMPUS]
      </div>
      <div className="absolute top-10 right-6 sm:right-12 text-[10px] font-mono text-neutral-600 select-none tracking-widest hidden sm:block">
        SESSION // ACTIVE ROSTER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-700 bg-neutral-900/90 text-neutral-300 font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            OFFICIAL LEADERSHIP DIRECTORY
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-800 bg-neutral-950 text-neutral-400 font-mono text-xs uppercase tracking-wider">
            <Users size={12} />
            <span>{memberCount} BOARD POSITIONS</span>
          </div>
        </div>

        {/* Prominent GDC Emblem in Hero */}
        <div className="flex justify-center mb-6">
          <div className="p-3 border border-neutral-800 bg-neutral-950/80 shadow-2xl relative">
            <GdcLogo size="lg" customLogoUrl={gdcLogoUrl} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white" />
          </div>
        </div>

        {/* Subheading: GAME DEVELOPMENT CLUB • SNIST */}
        <div className="mb-3">
          <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-neutral-400 font-bold block">
            GAME DEVELOPMENT CLUB • SNIST
          </span>
        </div>

        {/* Large Heading: GDC BOARD */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-['Outfit'] select-none">
          GDC BOARD
        </h1>

        {/* Small supporting text */}
        <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-xl text-neutral-300 font-['Space_Grotesk'] font-medium">
          The team behind GDC — gaming, creativity, technology and community.
        </p>

        {/* Additional minimal esports tagline & jump buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#board"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <span>VIEW BOARD ROSTER</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 bg-neutral-950 text-white font-mono text-xs uppercase tracking-widest hover:border-white transition-colors"
          >
            <span>ABOUT GDC</span>
          </a>
        </div>

        {/* Meta Stats Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono text-left">
          <div className="p-3 border border-neutral-900 bg-neutral-950/60">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">LEVEL 1</span>
            <span className="text-sm font-bold text-white uppercase">GDC HEAD</span>
            <span className="text-[11px] text-neutral-400 block truncate">Venkat Ramana Reddy</span>
          </div>

          <div className="p-3 border border-neutral-900 bg-neutral-950/60">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">LEVEL 2</span>
            <span className="text-sm font-bold text-white uppercase">EXECUTIVE LEADS</span>
            <span className="text-[11px] text-neutral-400 block">3 Core Officers</span>
          </div>

          <div className="p-3 border border-neutral-900 bg-neutral-950/60">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">LEVEL 3</span>
            <span className="text-sm font-bold text-white uppercase">DEPARTMENT HEADS</span>
            <span className="text-[11px] text-neutral-400 block">15 Operations Leads</span>
          </div>

          <div className="p-3 border border-neutral-900 bg-neutral-950/60">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">LEVEL 4</span>
            <span className="text-sm font-bold text-white uppercase">EXECUTIVE TEAM</span>
            <span className="text-[11px] text-neutral-400 block">10 Tactical Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

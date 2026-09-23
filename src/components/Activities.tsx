import React from 'react';
import { ACTIVITIES_DATA } from '../data/boardData';
import { Layers, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 sm:py-28 bg-black border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-neutral-700 bg-neutral-900 text-[10px] font-mono tracking-widest text-neutral-300 uppercase mb-3">
              FLAGSHIP INITIATIVES
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-['Outfit']">
              GDC ACTIVITIES
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 font-mono tracking-wide uppercase">
              STUDENT INITIATIVES, GAME JAMS, WORKSHOPS & TOURNAMENTS
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              COMMUNITY CURATED • SNIST
            </span>
          </div>
        </div>

        {/* Featured Card: Fanzai × GDC — Game Development Workshop */}
        <div className="mt-10 mb-8 border border-neutral-400 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-white pointer-events-none opacity-40" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-white/60 bg-white text-black text-[10px] font-mono font-bold tracking-widest uppercase">
                DOCUMENTED WORKSHOP
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-['Outfit']">
                Fanzai × GDC — Game Development Workshop
              </h3>
              <p className="text-sm text-neutral-300 font-mono leading-relaxed">
                An industry-aligned masterclass and practical game engineering session organized for SNIST students. Covered game engine fundamentals, real-time scripting logic, level design pipelines, and interactive game architecture with industry practitioners.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 font-mono">
              <div className="text-left border-l border-neutral-700 pl-4 py-1">
                <span className="block text-[10px] text-neutral-400 uppercase tracking-widest">COLLABORATOR</span>
                <span className="text-sm font-bold text-white tracking-wider">FANZAI × GDC</span>
              </div>
              <div className="text-left border-l border-neutral-700 pl-4 py-1">
                <span className="block text-[10px] text-neutral-400 uppercase tracking-widest">DOMAIN</span>
                <span className="text-sm font-bold text-white tracking-wider">DEV PIPELINES</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Minimal Visual Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 border bg-neutral-950 flex flex-col justify-between transition-colors group ${
                item.featured
                  ? 'border-neutral-500 hover:border-white'
                  : 'border-neutral-800 hover:border-neutral-500'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-900 mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    ACT.0{index + 1}
                  </span>
                </div>

                <h4 className="text-lg font-black text-white uppercase tracking-wider font-['Outfit'] mb-1">
                  {item.title}
                </h4>
                <div className="text-xs font-mono text-neutral-300 mb-3 tracking-wide">
                  {item.subtitle}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-900/80 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                <span>GDC EVENT PIPELINE</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-neutral-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SnistLogo } from './SnistLogo';
import { Gamepad2, Code2, Sparkles, Trophy, Users, Rocket } from 'lucide-react';

export const AboutGdc: React.FC = () => {
  const pillars = [
    {
      icon: Gamepad2,
      title: 'GAMING & ESPORTS',
      desc: 'Fostering competitive gaming culture, collegiate esports tournaments, and tactical play across campus.',
    },
    {
      icon: Code2,
      title: 'GAME DEVELOPMENT',
      desc: 'Mastering industry game engines, procedural logic, 3D modeling, physics scripting, and game design theory.',
    },
    {
      icon: Sparkles,
      title: 'CREATIVE ARTS',
      desc: 'Uniting concept illustrators, UI/UX designers, narrative writers, 3D sculptors, and sound composers.',
    },
    {
      icon: Trophy,
      title: 'GAME JAMS & ARENAS',
      desc: 'Testing limits in rapid prototype game jams, hackathons, and evaluated game showcases.',
    },
    {
      icon: Users,
      title: 'STUDENT ECOSYSTEM',
      desc: 'A student-driven collective bridging passionate developers with the broader gaming industry.',
    },
    {
      icon: Rocket,
      title: 'INNOVATION & PROJECTS',
      desc: 'Building multi-disciplinary indie game projects from initial prototype to playable release.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-neutral-950 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16 border-b border-neutral-800">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-neutral-700 bg-neutral-900 text-[10px] font-mono tracking-widest text-neutral-300 uppercase mb-4">
              ABOUT THE CLUB
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-['Outfit'] leading-tight">
              GAME DEVELOPMENT CLUB
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-base sm:text-lg font-mono tracking-widest text-neutral-300 font-bold">
                SNIST
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                HYDERABAD, TELANGANA
              </span>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-800/80">
              <SnistLogo size="md" showLabel={true} />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-white font-medium leading-relaxed font-['Space_Grotesk']">
              GDC is a student-driven gaming and game development community at Sreenidhi Institute of Science and Technology (SNIST).
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-mono">
              We bring together gamers, programmers, 3D artists, designers, and storytellers to cultivate an ecosystem centered around game development, technology, creativity, innovation, and esports competition. Through hands-on workshops, game jams, competitions, tournaments, and collaborative studio projects, GDC provides students real-world opportunities to engineer original games and excel in the digital gaming universe.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 font-mono text-center">
              <div className="p-3 border border-neutral-800 bg-black">
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">28</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">BOARD LEADS</div>
              </div>
              <div className="p-3 border border-neutral-800 bg-black">
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">100%</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">STUDENT-DRIVEN</div>
              </div>
              <div className="p-3 border border-neutral-800 bg-black">
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">6+</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">CORE PILLARS</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
              FOUNDATIONAL FOCUS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider font-['Outfit'] mt-1">
              WHAT DRIVES GDC
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-black border border-neutral-800/90 hover:border-neutral-400 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 border border-neutral-700 bg-neutral-900/80 flex items-center justify-center text-white group-hover:border-white transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-xs text-neutral-500 font-bold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit'] mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    SNIST GDC CORE
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

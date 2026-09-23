import React, { useState, useMemo } from 'react';
import { BoardMember } from '../types';
import { BoardMemberCard } from './BoardMemberCard';
import { Search } from 'lucide-react';

interface BoardHierarchyProps {
  members: BoardMember[];
}

export const BoardHierarchy: React.FC<BoardHierarchyProps> = ({ members }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'LEADERSHIP' | 'HEADS' | 'EXECUTIVES'>('ALL');

  // Filter members based on search and level filter
  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.department.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedFilter === 'LEADERSHIP') return m.level <= 2;
      if (selectedFilter === 'HEADS') return m.level === 3;
      if (selectedFilter === 'EXECUTIVES') return m.level === 4;

      return true;
    });
  }, [members, searchQuery, selectedFilter]);

  // Group members by level for structural hierarchy display
  const level1 = useMemo(() => members.filter((m) => m.level === 1), [members]);
  const level2 = useMemo(() => members.filter((m) => m.level === 2), [members]);
  const level3 = useMemo(() => members.filter((m) => m.level === 3), [members]);
  const level4 = useMemo(() => members.filter((m) => m.level === 4), [members]);

  const isFiltered = searchQuery.trim() !== '' || selectedFilter !== 'ALL';

  return (
    <section id="board" className="relative py-16 sm:py-24 border-t border-neutral-800 bg-black">
      {/* Background Esports Tech Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-neutral-700 bg-neutral-900/80 text-[10px] font-mono tracking-widest text-neutral-300 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              ORGANIZATIONAL STRUCTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-['Outfit']">
              GDC BOARD
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 font-mono tracking-wide uppercase">
              LEVEL-BASED LEADERSHIP & DEPARTMENT EXECUTION HIERARCHY
            </p>
          </div>

          {/* Controls: Search and Quick Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={14} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH POSITION / NAME..."
                className="w-full bg-neutral-900/80 border border-neutral-700 text-white pl-9 pr-3 py-2 text-xs font-mono tracking-wider focus:outline-none focus:border-white transition-colors uppercase placeholder:text-neutral-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Level Quick Filter Tabs */}
            <div className="inline-flex border border-neutral-700 bg-neutral-950 p-1 font-mono text-[10px] tracking-wider uppercase">
              {(['ALL', 'LEADERSHIP', 'HEADS', 'EXECUTIVES'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 transition-colors ${
                    selectedFilter === filter
                      ? 'bg-white text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Render: Either Filtered View or Full Hierarchy */}
        {isFiltered ? (
          <div className="mt-10">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6 uppercase">
              <span>FOUND {filteredMembers.length} ROSTER POSITIONS</span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('ALL');
                }}
                className="underline hover:text-white"
              >
                RESET FILTERS
              </button>
            </div>

            {filteredMembers.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-neutral-800 p-8 font-mono">
                <p className="text-neutral-400 text-sm uppercase">NO BOARD POSITIONS MATCHED YOUR SEARCH</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFilter('ALL');
                  }}
                  className="mt-4 px-4 py-2 border border-neutral-700 hover:border-white text-xs text-white uppercase"
                >
                  CLEAR SEARCH
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member) => (
                  <BoardMemberCard key={member.id} member={member} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard Editorial Hierarchy View */
          <div className="mt-14 space-y-20">
            {/* ================= LEVEL 1: GDC HEAD ================= */}
            <div>
              <div className="text-center mb-8">
                <span className="inline-block text-[11px] font-mono tracking-[0.3em] text-neutral-400 uppercase px-3 py-1 border border-neutral-800 bg-neutral-950">
                  LEVEL 1 • APEX LEADERSHIP
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider font-['Outfit'] mt-2">
                  GDC HEAD
                </h3>
                <div className="w-12 h-0.5 bg-white mx-auto mt-3" />
              </div>

              <div className="flex justify-center">
                {level1.map((member) => (
                  <div key={member.id} className="w-full max-w-sm sm:max-w-md">
                    <BoardMemberCard
                      member={member}
                      featured={true}
                    />
                  </div>
                ))}
              </div>

              {/* Hierarchy Visual Connector Line */}
              <div className="w-px h-12 bg-gradient-to-b from-white/80 via-neutral-700 to-transparent mx-auto mt-8 hidden sm:block" />
            </div>

            {/* ================= LEVEL 2: EXECUTIVE LEADERSHIP ================= */}
            <div>
              <div className="text-center mb-8">
                <span className="inline-block text-[11px] font-mono tracking-[0.3em] text-neutral-400 uppercase px-3 py-1 border border-neutral-800 bg-neutral-950">
                  LEVEL 2 • EXECUTIVE LEADERSHIP
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider font-['Outfit'] mt-2">
                  DEPUTY HEAD & SECRETARIES
                </h3>
                <div className="w-12 h-0.5 bg-neutral-700 mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {level2.map((member) => (
                  <BoardMemberCard key={member.id} member={member} />
                ))}
              </div>

              {/* Connector line */}
              <div className="w-px h-12 bg-gradient-to-b from-neutral-600 via-neutral-800 to-transparent mx-auto mt-10 hidden sm:block" />
            </div>

            {/* ================= LEVEL 3: CORE DEPARTMENT HEADS ================= */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block text-[11px] font-mono tracking-[0.3em] text-neutral-400 uppercase px-3 py-1 border border-neutral-800 bg-neutral-950">
                  LEVEL 3 • CORE OPERATIONS
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-wider font-['Outfit'] mt-2">
                  DEPARTMENT HEADS
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
                  15 DEDICATED DOMAINS DRIVING GDC PROGRAMS
                </p>
                <div className="w-12 h-0.5 bg-neutral-700 mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {level3.map((member) => (
                  <BoardMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>

            {/* ================= LEVEL 4: EXECUTIVE TEAM ================= */}
            <div id="executives" className="pt-8 border-t border-neutral-900">
              <div className="text-center mb-10">
                <span className="inline-block text-[11px] font-mono tracking-[0.3em] text-neutral-400 uppercase px-3 py-1 border border-neutral-800 bg-neutral-950">
                  LEVEL 4 • EXECUTION SQUAD
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-['Outfit'] mt-2">
                  EXECUTIVE TEAM
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
                  TACTICAL SUPPORT & FIELD OPERATIONS
                </p>
                <div className="w-16 h-0.5 bg-white mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {level4.map((member) => (
                  <BoardMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { BoardMember, GDC_INSTAGRAM_URL } from '../types';
import { Linkedin, Instagram, Mail } from 'lucide-react';

interface BoardMemberCardProps {
  member: BoardMember;
  featured?: boolean;
}

export const BoardMemberCard: React.FC<BoardMemberCardProps> = ({
  member,
  featured = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasRealImage = Boolean(member.image && member.image.trim() !== '' && !imageError);

  // Determine badge styling and visual emphasis by level
  const isHead = member.level === 1;
  const isLeadership = member.level <= 2;

  return (
    <div
      id={`member-${member.id}`}
      className={`group relative flex flex-col bg-neutral-950 border transition-all duration-300 ${
        isHead
          ? 'border-neutral-200/90 shadow-[0_0_35px_rgba(255,255,255,0.08)] max-w-md mx-auto w-full'
          : isLeadership
          ? 'border-neutral-700/80 hover:border-white'
          : 'border-neutral-800 hover:border-neutral-400'
      }`}
    >
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/60 pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 pointer-events-none z-10" />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-800/80 bg-neutral-900/60 font-mono text-[10px] tracking-wider text-neutral-400">
        <div className="flex items-center gap-1.5 uppercase font-medium">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="truncate max-w-[130px] sm:max-w-none">{member.department}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-500 font-bold">
            {member.level === 1 ? 'LVL.01' : member.level === 2 ? 'LVL.02' : member.level === 3 ? 'HEAD' : 'EXEC'}
          </span>
        </div>
      </div>

      {/* Profile Image Container - Pure Clean Display */}
      <div
        className={`relative overflow-hidden bg-neutral-900/90 w-full select-none ${
          isHead ? 'aspect-[4/5]' : 'aspect-[4/4.8]'
        }`}
      >
        {hasRealImage ? (
          <img
            src={member.image}
            alt={member.name}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High-Contrast Esports Silhouette Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center relative p-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900">
            {/* Subtle background tech grid lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Target Crosshairs */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[1px] bg-neutral-800 pointer-events-none" />
            <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-[1px] bg-neutral-800 pointer-events-none" />

            {/* Silhouette frame */}
            <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center mb-3 shadow-inner group-hover:border-white transition-colors">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-neutral-500 group-hover:text-white transition-colors"
                >
                  <path
                    d="M32 12C26.4772 12 22 16.4772 22 22C22 27.5228 26.4772 32 32 32C37.5228 32 42 27.5228 42 22C42 16.4772 37.5228 12 32 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14 52C14 42.0589 22.0589 36 32 36C41.9411 36 50 42.0589 50 52H14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* "PHOTO" Tag */}
              <div className="px-2.5 py-0.5 border border-neutral-700 bg-black text-[10px] font-mono tracking-widest text-neutral-300 uppercase group-hover:border-white group-hover:text-white transition-colors">
                PHOTO
              </div>
            </div>

            {/* Corner coordinate marks */}
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-neutral-600">
              GDC//{member.id.substring(0, 4).toUpperCase()}
            </span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-neutral-600">
              SNIST
            </span>
          </div>
        )}

        {/* Gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Level Tag Overlay */}
        {isHead && (
          <div className="absolute top-3 left-3 bg-white text-black font-extrabold text-[10px] tracking-widest px-2 py-0.5 uppercase font-mono shadow-md z-10">
            LEADERSHIP
          </div>
        )}
      </div>

      {/* Card Content Information */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-neutral-950">
        <div>
          {/* Member Name */}
          <div className="mb-1">
            <h3
              className={`font-extrabold tracking-tight uppercase text-white font-['Outfit'] transition-colors ${
                isHead ? 'text-xl sm:text-2xl' : isLeadership ? 'text-lg' : 'text-base'
              }`}
            >
              {member.name}
            </h3>
          </div>

          {/* Member Position */}
          <div className="flex items-center gap-1.5 mb-2">
            <span
              className={`font-black tracking-wider uppercase font-['Space_Grotesk'] text-white/95 group-hover:text-white transition-colors ${
                isHead ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}
            >
              {member.position}
            </span>
          </div>

          {/* Subtext: Club & College */}
          <div className="text-[11px] font-mono tracking-wide text-neutral-400 uppercase">
            GAME DEVELOPMENT CLUB • SNIST
          </div>
        </div>

        {/* Social / Contact Links Footer */}
        <div className="pt-4 mt-4 border-t border-neutral-900 flex items-center justify-between text-neutral-500 text-xs">
          <div className="flex items-center gap-2.5">
            {member.email ? (
              <a
                href={`mailto:${member.email}`}
                className="hover:text-white transition-colors p-1 -m-1"
                title={`Email ${member.name}`}
              >
                <Mail size={14} />
              </a>
            ) : (
              <span className="text-neutral-700 cursor-not-allowed">
                <Mail size={14} />
              </span>
            )}

            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors p-1 -m-1"
                title="LinkedIn Profile"
              >
                <Linkedin size={14} />
              </a>
            ) : (
              <span className="text-neutral-700 cursor-not-allowed" title="LinkedIn (placeholder)">
                <Linkedin size={14} />
              </span>
            )}

            <a
              href={member.instagram || GDC_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1 -m-1"
              title={member.instagram ? `${member.name} on Instagram` : "Official GDC SNIST Instagram (@gdc.snist)"}
            >
              <Instagram size={14} />
            </a>
          </div>

          <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest group-hover:text-neutral-300 transition-colors">
            {isHead ? 'LEAD' : isLeadership ? 'OFFICER' : 'CORE'}
          </div>
        </div>
      </div>
    </div>
  );
};

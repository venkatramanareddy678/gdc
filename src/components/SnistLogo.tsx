import React, { useState } from 'react';

interface SnistLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  customLogoUrl?: string;
}

export const SnistLogo: React.FC<SnistLogoProps> = ({
  className = '',
  size = 'md',
  showLabel = true,
  customLogoUrl,
}) => {
  const [loadError, setLoadError] = useState(false);

  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const hasCustom = Boolean(customLogoUrl && customLogoUrl.trim() !== '' && !loadError);

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* SNIST Shield & Crosshair Esports Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size]}`}>
        {hasCustom ? (
          <img
            src={customLogoUrl}
            alt="SNIST Logo"
            onError={() => setLoadError(true)}
            className="w-full h-full object-contain"
          />
        ) : (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Shield Outline */}
            <path
              d="M 50 8 L 86 22 L 86 52 C 86 74 69 90 50 96 C 31 90 14 74 14 52 L 14 22 Z"
              stroke="#FFFFFF"
              strokeWidth="3"
              fill="#0A0A0A"
            />
            {/* Internal Crosshairs */}
            <line x1="50" y1="20" x2="50" y2="40" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="50" y1="60" x2="50" y2="82" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="24" y1="50" x2="42" y2="50" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="58" y1="50" x2="76" y2="50" stroke="#FFFFFF" strokeWidth="2" />
            {/* Center Target Dot */}
            <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
            {/* SNIST initials crest inside */}
            <path
              d="M 36 34 L 64 34 L 44 48 L 64 48"
              stroke="#A3A3A3"
              strokeWidth="1.5"
              strokeLinecap="square"
              opacity="0.6"
            />
          </svg>
        )}
      </div>

      {showLabel && (
        <div className="flex flex-col">
          <span className="text-[11px] font-black tracking-[0.25em] text-white uppercase font-['Outfit']">
            SNIST
          </span>
          <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
            E-SPORTS & GAMING
          </span>
        </div>
      )}
    </div>
  );
};


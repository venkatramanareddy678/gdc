import React, { useState } from 'react';

interface GdcLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
  customLogoUrl?: string;
}

export const GdcLogo: React.FC<GdcLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  inverted = false,
  customLogoUrl,
}) => {
  const [customLoadError, setCustomLoadError] = useState(false);

  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const primaryFill = inverted ? '#000000' : '#FFFFFF';
  const secondaryFill = inverted ? '#171717' : '#E5E5E5';
  const strokeColor = inverted ? '#000000' : '#FFFFFF';

  const hasCustomLogo = Boolean(customLogoUrl && customLogoUrl.trim() !== '' && !customLoadError);

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision Vector GDC Emblem or Uploaded Custom Logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size]}`}>
        {hasCustomLogo ? (
          <img
            src={customLogoUrl}
            alt="GDC Logo"
            onError={() => setCustomLoadError(true)}
            className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          >
            {/* Outer Octagonal Esports Shield Outline */}
            <polygon
              points="28,6 72,6 94,28 94,72 72,94 28,94 6,72 6,28"
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinejoin="bevel"
              className="transition-opacity duration-300"
            />

            {/* Inner Accent Ring */}
            <polygon
              points="31,14 69,14 86,31 86,69 69,86 31,86 14,69 14,31"
              stroke={strokeColor}
              strokeWidth="1"
              strokeDasharray="4 2"
              opacity="0.4"
            />

            {/* Central Angular Geometric Monogram: G D C */}
            {/* G Glyph */}
            <path
              d="M 40 32 L 23 32 L 23 68 L 42 68 L 42 50 L 33 50 L 33 56 L 36 56 L 36 62 L 29 62 L 29 38 L 40 38 Z"
              fill={primaryFill}
            />

            {/* Center Esports Gamepad / D Glyph Cross */}
            <path
              d="M 47 32 L 56 32 C 63 32 67 37 67 50 C 67 63 63 68 56 68 L 47 68 Z M 53 38 L 53 62 L 56 62 C 60 62 61 58 61 50 C 61 42 60 38 56 38 Z"
              fill={primaryFill}
            />

            {/* C Glyph Accent */}
            <path
              d="M 80 40 L 73 34 L 70 37 L 75 42 C 77 44 78 47 78 50 C 78 53 77 56 75 58 L 70 63 L 73 66 L 80 60 C 83 57 84 54 84 50 C 84 46 83 43 80 40 Z"
              fill={secondaryFill}
            />

            {/* Game Controller Directional D-Pad Accent */}
            <rect x="47" y="18" width="6" height="6" fill={primaryFill} />
            <rect x="47" y="76" width="6" height="6" fill={primaryFill} />
            <rect x="18" y="47" width="6" height="6" fill={primaryFill} />
            <rect x="76" y="47" width="6" height="6" fill={primaryFill} />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-widest text-base sm:text-lg text-white font-['Outfit']">
              GDC
            </span>
            <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 text-neutral-300 uppercase">
              BOARD
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400">
            GAME DEVELOPMENT CLUB • SNIST
          </span>
        </div>
      )}
    </div>
  );
};


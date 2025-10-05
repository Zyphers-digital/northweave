// src/components/LogoNW.jsx
import React from "react";

export default function LogoNW({ className = "", tagline = true }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 128"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NorthWeave"
    >
      <defs>
        <linearGradient id="nwGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6EE7F2" />
          <stop offset="1" stopColor="#39D2E3" />
        </linearGradient>
      </defs>

      {/* Merke (N + vev) */}
      <g transform="translate(8,12)">
        <rect x="0" y="0" width="72" height="72" rx="18" fill="url(#nwGrad)" />
        <g transform="translate(16,16)">
          <path d="M0 40V0h8l24 26V0h8v40h-8L8 14v26H0z" fill="#0B0D10" />
          <path d="M0 48h56" stroke="#c6f6d5" strokeOpacity=".25" />
          <path d="M0 56h56" stroke="#c6f6d5" strokeOpacity=".18" />
        </g>
      </g>

      {/* Wordmark + tagline */}
      <g transform="translate(96,22)">
        <text
          x="0"
          y="30"
          fontFamily="Poppins, Inter, Arial, sans-serif"
          fontWeight="800"
          fontSize="36"
          fill="url(#nwGrad)"
        >
          NorthWeave
        </text>
        {tagline && (
          <text
            x="2"
            y="58"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="500"
            fontSize="14"
            fill="#b6c1cc"
          >
            Advanced composites • Carbon design • Nordic craft
          </text>
        )}
      </g>
    </svg>
  );
}

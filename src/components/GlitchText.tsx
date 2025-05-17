"use client";

import { ReactNode } from "react";

export const GlitchText = ({ children }: { children: ReactNode }) => {
  return (
    <span className="relative inline-block glitch-container">
      <span className="relative z-10">{children}</span>

      <span
        aria-hidden
        className="absolute top-0 left-0 w-full h-full opacity-75 pointer-events-none"
      >
        <span className="absolute glitch-layer-1">{children}</span>
        <span className="absolute glitch-layer-2">{children}</span>
        <span className="absolute glitch-layer-3">{children}</span>
      </span>
    </span>
  );
};
"use client";

import { ReactNode } from "react";

const GlitchLink = ({ 
  children, 
  href,
  className = ""
}: { 
  children: ReactNode; 
  href: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={`relative inline-block group/glitch ${className}`}
    >
      {/* Conteúdo principal */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Efeito Glitch */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-0 left-0 w-full animate-glitch-1 opacity-0 group-hover/glitch:opacity-100 flex items-center gap-2">
          {children}
        </span>
        <span className="absolute top-0 left-0 w-full animate-glitch-2 opacity-0 group-hover/glitch:opacity-100 flex items-center gap-2">
          {children}
        </span>
      </div>

      <style jsx global>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); clip-path: polygon(0 20%, 100% 20%, 100% 25%, 0 25%); }
          20% { transform: translate(-3px, 2px); clip-path: polygon(0 40%, 100% 40%, 100% 45%, 0 45%); }
          40% { transform: translate(3px, -1px); clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%); }
          60% { transform: translate(-4px, 1px); clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%); }
          80% { transform: translate(2px, -3px); clip-path: polygon(0 30%, 100% 30%, 100% 35%, 0 35%); }
          100% { transform: translate(0); clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
        }

        @keyframes glitch-2 {
          0% { transform: translate(0); clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
          25% { transform: translate(5px, -2px); clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
          50% { transform: translate(-4px, 3px); clip-path: polygon(0 65%, 100% 65%, 100% 70%, 0 70%); }
          75% { transform: translate(3px, -1px); clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%); }
          100% { transform: translate(0); clip-path: polygon(0 35%, 100% 35%, 100% 40%, 0 40%); }
        }

        .animate-glitch-1 {
          animation: glitch-1 0.8s linear infinite;
          text-shadow: 2px 0 #ff0040;
        }

        .animate-glitch-2 {
          animation: glitch-2 0.6s linear infinite;
          text-shadow: -2px 0 #00a2ff;
        }
      `}</style>
    </a>
  );
};

export default GlitchLink;
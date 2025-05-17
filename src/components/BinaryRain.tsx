// components/BinaryRain.tsx
"use client";

import { useEffect, useState } from "react";

const BinaryRain = () => {
  const [columns, setColumns] = useState<number[]>([]);
  const [drops, setDrops] = useState<number[]>([]);

  // Configuração inicial
  useEffect(() => {
    const updateWindowSize = () => {
      const columnCount = Math.floor(window.innerWidth / 30);
      setColumns(Array.from({ length: columnCount }, (_, i) => i));
      setDrops(Array.from({ length: columnCount }, () => 0));
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  // Animação
  useEffect(() => {
    const interval = setInterval(() => {
      setDrops(prevDrops => 
        prevDrops.map((_, i) => 
          Math.random() > 0.97 ? 0 : prevDrops[i] + 1
        )
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {columns.map((_, index) => (
        <div 
          key={index}
          className="absolute top-0 text-green-500 text-xs font-mono whitespace-nowrap"
          style={{ 
            left: `${index * 30}px`,
            transform: `translateY(${drops[index] * 20}px)`,
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <span 
              key={i}
              className="opacity-50"
              style={{ 
                opacity: Math.random() * 0.5 + 0.1,
                animation: `fade ${Math.random() * 2 + 1}s infinite`
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </span>
          ))}
        </div>
      ))}

      <style jsx global>{`
        @keyframes fade {
          0% { opacity: 0.1; }
          50% { opacity: 0.6; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default BinaryRain;
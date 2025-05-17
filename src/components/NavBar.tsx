"use client";

import GlitchLink from "./GlitchLink";
import { 
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFlask,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-black/90 backdrop-blur-md border-b border-green-800/50">
      {/* Logo */}
      <div className="flex items-center">
        <GlitchLink href="#">
          <span className="text-lg md:text-xl font-bold text-green-400 flex items-center gap-2">
            <span className="text-green-600">&lt;</span>
            JúlioOestreich
            <span className="text-green-600">/&gt;</span>
          </span>
        </GlitchLink>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-4 lg:gap-6 list-none m-0 p-0">
          <li>
            <GlitchLink href="#about" className="flex items-center gap-2">
              <FaUser className="text-green-500 text-lg" />
              <span className="hidden lg:inline">Sobre</span>
            </GlitchLink>
          </li>
          <li>
            <GlitchLink href="#contact" className="flex items-center gap-2">
              <FaEnvelope className="text-green-500 text-lg" />
              <span className="hidden lg:inline">Contato</span>
            </GlitchLink>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/julionarciso/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
            >
              <FaLinkedin className="text-lg" />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/juliooest" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
            >
              <FaGithub className="text-lg" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </li>
          <li>
            <a 
              href="https://app.hackthebox.com/users/2347196" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
            >
              <FaFlask className="text-lg" />
              <span className="hidden lg:inline">HTB</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-green-400 p-2 hover:bg-green-900/10 rounded-lg"
        >
          {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-4 left-4 bg-black/95 backdrop-blur-lg border border-green-800/50 rounded-lg p-4 z-50">
            <ul className="flex flex-col gap-4">
              <li>
                <GlitchLink href="#about" className="flex items-center gap-2 text-lg">
                  <FaUser className="text-green-500" />
                  Sobre
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="#contact" className="flex items-center gap-2 text-lg">
                  <FaEnvelope className="text-green-500" />
                  Contato
                </GlitchLink>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/julionarciso/" 
                  className="flex items-center gap-2 text-green-500 hover:text-green-400 text-lg"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/juliooest" 
                  className="flex items-center gap-2 text-green-500 hover:text-green-400 text-lg"
                >
                  <FaGithub />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://app.hackthebox.com/users/2347196" 
                  className="flex items-center gap-2 text-green-500 hover:text-green-400 text-lg"
                >
                  <FaFlask />
                  HackTheBox
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
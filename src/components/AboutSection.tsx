"use client";

import { 
  FaShieldAlt, 
  FaTerminal, 
  FaTools, 
  FaCode, 
  FaDatabase,
  FaRobot,
  FaChartLine,
  FaLinux,
  FaUserSecret
} from "react-icons/fa";
import { 
  HiOutlineChip,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed
} from "react-icons/hi";
import { GiSpy } from "react-icons/gi";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4 bg-black/90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-green-400">
        <div className="space-y-6 border-l-2 border-green-800 pl-6">
          <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center gap-2">
            <FaShieldAlt className="text-green-600 animate-pulse" />
            SOBRE
          </h2>
          <p className="text-green-300 leading-relaxed flex items-start gap-2">
            <FaUserSecret className="flex-shrink-0 mt-1 text-green-600" />
            Estudante de Defesa Cibernética na FIAP e CTF player. Entusiasta da 
            área de cibersegurança, seguindo trilhas de Penetration Tester e 
            SOC Analyst nas plataformas TryHackMe e Hack The Box.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm flex items-center gap-2">
              <FaTerminal className="text-xs" /> FIAP
            </span>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm flex items-center gap-2">
              <HiOutlineLockClosed /> CTF Player
            </span>
          </div>
        </div>

        <div className="space-y-6 border-l-2 border-green-800 pl-6">
          <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center gap-2">
            <FaTools className="text-green-600" />
            HABILIDADES
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-green-500 mb-2 flex items-center gap-2">
                <FaTools className="text-sm" /> Ferramentas
              </h3>
              <ul className="space-y-1 text-sm text-green-300">
                {[
                  { name: 'Nmap', icon: <HiOutlineGlobeAlt /> },
                  { name: 'Gobuster', icon: <FaChartLine /> },
                  { name: 'Metasploit', icon: <GiSpy /> },
                  { name: 'Linux', icon: <FaLinux /> }
                ].map((tool) => (
                  <li key={tool.name} className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="text-green-600">{tool.icon}</span> {tool.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-green-500 mb-2 flex items-center gap-2">
                <FaCode className="text-sm" /> Linguagens
              </h3>
              <ul className="space-y-1 text-sm text-green-300">
                {[
                  { name: 'Python', icon: '🐍' },
                  { name: 'Java', icon: '☕' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'C', icon: '🔧' }
                ].map((lang) => (
                  <li key={lang.name} className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="text-green-600">{lang.icon}</span> {lang.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-800/50">
            <h3 className="text-green-500 mb-2 flex items-center gap-2">
              <FaShieldAlt className="text-sm" /> Especializações
            </h3>
            <div className="text-sm text-green-300 space-y-2">
              <div className="flex items-center gap-2">
                <FaCode className="text-green-600" /> Desenvolvimento seguro
              </div>
              <div className="flex items-center gap-2">
                <FaDatabase className="text-green-600" /> SIEM e análise de logs
              </div>
              <div className="flex items-center gap-2">
                <GiSpy className="text-green-600" /> Metodologias ofensivas/defensivas
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-l-2 border-green-800 pl-6">
          <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center gap-2">
            <FaChartLine className="text-green-600" />
            EXPERIÊNCIA
          </h2>
          
          <div className="relative">
            <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-green-800" />
            
            <div className="relative pl-6 mb-6">
              <div className="absolute left-0 top-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-green-400 font-medium flex items-center gap-2">
                <FaRobot className="text-green-600" />
                AmBev Grandourados
              </h3>
              <div className="text-sm text-green-300 mt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <FaCode className="text-xs" /> Desenvolvedor Fullstack
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineChip className="text-xs" /> Agentes de IA e automação
                </div>
                <div className="flex items-center gap-2">
                  <FaDatabase className="text-xs" /> Banco de dados em escala
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs flex items-center gap-2">
                  <FaDatabase /> PostgreSQL
                </span>
                <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs flex items-center gap-2">
                  <FaChartLine /> Scrum
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
            <h3 className="text-green-500 mb-2 flex items-center gap-2">
              <FaChartLine className="text-sm" /> Atual
            </h3>
            <div className="text-sm text-green-300 space-y-2">
              <div className="flex items-center gap-2">
                <HiOutlineLockClosed /> Sistemas seguros
              </div>
              <div className="flex items-center gap-2">
                <GiSpy /> Pentesting interno
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt /> Monitoramento SIEM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
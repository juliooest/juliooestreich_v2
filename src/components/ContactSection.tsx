"use client";

import { 
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaPaperPlane,
  FaMapMarkerAlt
} from "react-icons/fa";
import { HiOutlineTerminal } from "react-icons/hi";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-black/90 backdrop-blur-lg border-t border-green-800/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-green-400">
        <div className="space-y-6 border-l-2 border-green-800 pl-6">
          <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center gap-2">
            <HiOutlineTerminal className="text-green-600 animate-pulse" />
            CONTATO
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-600 flex-shrink-0" />
              <div>
                <p className="font-medium">Localização</p>
                <p className="text-sm text-green-300">Mato Grosso do Sul, Brasil</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-600 flex-shrink-0" />
              <div>
                <p className="font-medium">E-mail</p>
                <p className="text-sm text-green-300">juliocnarciso@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-900/20 rounded-lg">
            <h3 className="text-green-500 mb-3 flex items-center gap-2">
              <FaDiscord className="text-green-600" />
              Discord
            </h3>
            <p className="text-sm text-green-300">poison_rooty</p>
          </div>
        </div>

        <div className="space-y-6 border-l-2 border-green-800 pl-6">
          <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center gap-2">
            <FaPaperPlane className="text-green-600" />
            CONECTE-SE
          </h2>

          <div className="grid gap-4">
            <a href="https://www.linkedin.com/in/julionarciso/" target="_blank" className="group flex items-center gap-3 p-3 hover:bg-green-900/10 rounded-lg transition-colors">
              <FaLinkedin className="text-2xl text-green-500 group-hover:text-green-400" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-green-300">/julionarciso</p>
              </div>
            </a>

            <a  href="https://github.com/juliooest" target="_blank" className="group flex items-center gap-3 p-3 hover:bg-green-900/10 rounded-lg transition-colors">
              <FaGithub className="text-2xl text-green-500 group-hover:text-green-400" />
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-green-300">@juliooest</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
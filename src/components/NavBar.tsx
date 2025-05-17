import GlitchLink from "./GlitchLink";
import { 
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFlask 
} from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-black/90 backdrop-blur-md border-b border-green-800/50">

            <div className="flex items-center">
                <GlitchLink href="#">
                    <span className="text-xl font-bold text-green-400 flex items-center gap-2">
                        <span className="text-green-600">&lt;</span>
                        JúlioOestreich
                        <span className="text-green-600">/&gt;</span>
                    </span>
                </GlitchLink>
            </div>

            <div className="flex items-center">
                <ul className="flex gap-6 list-none m-0 p-0">
                    <li>
                        <GlitchLink href="#about" className="flex items-center gap-2">
                            <FaUser className="text-green-500 text-lg" />
                            <span className="hidden md:inline">Sobre</span>
                        </GlitchLink>
                    </li>
                    <li>
                        <GlitchLink href="#contact" className="flex items-center gap-2">
                            <FaEnvelope className="text-green-500 text-lg" />
                            <span className="hidden md:inline">Contato</span>
                        </GlitchLink>
                    </li>
                    <li>
                        <GlitchLink href="https://www.linkedin.com/in/julionarciso/" className="flex items-center gap-2">
                            <FaLinkedin className="text-green-500 text-lg" />
                            <span className="hidden md:inline">LinkedIn</span>
                        </GlitchLink>
                    </li>
                    <li>
                        <GlitchLink href="https://github.com/juliooest" className="flex items-center gap-2">
                            <FaGithub className="text-green-500 text-lg" />
                            <span className="hidden md:inline">GitHub</span>
                        </GlitchLink>
                    </li>
                    <li>
                        <GlitchLink href="https://app.hackthebox.com/users/2347196" className="flex items-center gap-2">
                            <FaFlask className="text-green-500 text-lg" />
                            <span className="hidden md:inline">HackTheBox</span>
                        </GlitchLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
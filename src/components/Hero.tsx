"use client";

import { GlitchText } from "./GlitchText";

export default function Hero() {
    return (
        <main className="flex flex-col md:flex-row justify-center items-center px-4 md:mr-15 md:ml-15 min-h-[50vh] py-8 gap-8">
            <div className="md:flex-1 flex justify-center">
                <img 
                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-4 border-green-800/50"
                    src="/avatar.png" 
                    alt="profile-avatar" 
                />
            </div>
            <div className="md:flex-1 text-center md:text-left">
                <p className="whitespace-pre-line text-green-600 text-xl md:text-3xl leading-relaxed">
                    <span>
                        <GlitchText>
                            <span className="font-bold text-green-700">
                                Olá
                            </span>,{" "}
                        </GlitchText>
                        meu nome é{" "}
                        <GlitchText>
                            <span className="font-bold text-green-700">
                                Júlio Oestreich
                            </span>
                        </GlitchText>
                    </span>,
                    <br />
                    e seja bem vindo,<br />
                    ao meu {" "}
                    <GlitchText>
                        <span className="font-bold text-green-700">
                            Portfólio.
                        </span>
                    </GlitchText>
                </p>
            </div>
        </main>
    )
}
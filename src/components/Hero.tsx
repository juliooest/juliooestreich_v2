import { GlitchText } from "./GlitchText";

export default function Hero() {
    return (
        <main className="flex justify-around items-center mr-[15rem] ml-[15rem] h-[50vh]">
            <div>
                <img className="w-[300px] h-[300px]" src="/avatar.png" alt="profile-avatar" />
            </div>
            <div>
                <p className="whitespace-pre-line text-green-600 text-3xl">
                        <span>

                            <GlitchText>
                                <span className="font-bold text-green-700">
                            Olá
                            </span>, {""}
                            </GlitchText>
                           meu nome é {" "}
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
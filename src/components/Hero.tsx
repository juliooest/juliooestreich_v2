
export default function Hero() {
    return (
        <main className="flex justify-around items-center mr-[15rem] ml-[15rem] h-[50vh]">
            <div>
                <img className="w-[300px] h-[300px]" src="/avatar.png" alt="profile-avatar" />
            </div>
            <div>
                <p className="whitespace-pre-line">
                        Olá, meu nome é Júlio Oestreich,<br />
                        e seja bem vindo,<br />
                        ao meu Portfólio.
                </p>
            </div>
        </main>
    )
}
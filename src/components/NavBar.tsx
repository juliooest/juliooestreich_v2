
export default function NavBar() {
    return (
        <nav className="flex justify-around items-center p-4">
            <div>
                <p>
                    <a href="#">Sobre</a>
                </p>
            </div>
            <div>
                <ul>
                    <li className="flex gap-6">
                        <a href="#">Contato</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                        <a href="#">HackTheBox</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
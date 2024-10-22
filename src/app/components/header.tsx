import Link from "next/link";

export function Header() {
  return (
    <header className="mb-9 flex flex-row justify-between p-5 shadow-md bg-white">
      <span className="font-bold text-lg text-black">Atividade React</span>
      <nav>
        <ul className="list-none flex flex-row gap-10 text-black">
          <li>
            <a href="#" className="hover:bg-blue-300 p-2">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1wOEO2piTGXwDprO5aO12Fm_KPhVfomSa/view"
              className="hover:bg-blue-300 p-2"
            >
              Sobre a atividade
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cabarros3/react-aula-2"
              className="hover:bg-blue-300 p-2"
            >
              Github
            </a>
          </li>
          <li>
            <Link href={"/useStates"}>Aprendendo Estados</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { Botao } from "./components/botao";
import { ListaItens } from "./components/lista";
import { Quadrado } from "./components/quadrado";
import { Title } from "./components/title";
import { Imagem } from "./components/image";
import { Paragrafo } from "./components/paragrafo";
import { Header } from "./components/header";
import { Rodape } from "./components/rodape";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Header />
      <Title />
      <div className="grid grid-cols-3 gap-3">
        <Quadrado />
        <Botao />
        <ListaItens itemName1="Item 1 com props" itemName2="Item 2 com props" />
        <Imagem
          imageAlt="React"
          imageUrl="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
        />
        <Paragrafo />
      </div>
      <Rodape />
    </main>
  );
}

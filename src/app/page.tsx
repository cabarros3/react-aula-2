import { Botao } from "./components/botao";
import { ListaItens } from "./components/lista";
import { Quadrado } from "./components/quadrado";
import { Title } from "./components/title";
import { Imagem } from "./components/image"
import { Paragrafo } from "./components/paragrafo";
import { Header } from "./components/header";
import { Rodape } from "./components/rodape";

export default function Home() {
  return (
    <>
    <Header />
    <Title />
    <div className="grid grid-cols-3 gap-3">
      <Quadrado />
      <Botao />
      <ListaItens itemName1="Este item usa props 1" itemName2="Camilla com props" />
      <Imagem imageAlt="React" imageUrl="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" />
      <Paragrafo />
   </div>
   <Rodape />
   </>
  );
}

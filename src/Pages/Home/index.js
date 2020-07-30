import React from "react";
import Menu from "../../Components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../Components/BannerMain";
import Corousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End?"}
      />

      <Corousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Corousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Corousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Footer />
    </div>
  );
}

export default App;

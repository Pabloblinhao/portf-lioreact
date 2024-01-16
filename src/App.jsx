import React, { useState } from "react";
import "./styles.css";
import programador from "./assets/images/programador.png";
import Habilidades from "./Habilidades";
import Sobre from "./Sobre.jsx";
import Projetos from "./Projetos";
import Contato from "./Contato.jsx";

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState("perfil");
  function handleClick(pagina) {
    setPaginaAtiva(pagina);
  }

  return (
    <div className="App">
      <header>
        <nav className="header">
          <h1 className="ps">PS.</h1>
          <ul>
            <li>
              <a href="/" onClick={() => handleClick("perfil")}role="button">
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("sobre")}role="button">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("habilidades")}role="button">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("projetos")}role="button">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("contato")}role="button">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {paginaAtiva === "perfil" && (
            <>
            <div className="container-apresentação-foto">
    <div className="container-apresentação">
      <p className="texto-apresentação3">Bem-vindos, eu sou</p>
      <h1 className="texto-apresentação">Pablo Souza.</h1>
      <p className="texto-apresentação2">Desenvolvedor Web Full Stack</p>
    </div>
    <img src={programador} alt="Foto de perfil" className="progamador-img" />
  </div>
            </>
          )}
          {paginaAtiva === "sobre" && (
            <Sobre />
          )}
          {paginaAtiva === "habilidades" && (
            <Habilidades />
          )}
          {paginaAtiva === "projetos" && (
            <Projetos />
          )}
          {paginaAtiva === "contato" && (
            <Contato />
          )}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Meu Portfólio</p>
      </footer>
    </div>
  );
}

export default App;
import React from "react";
import projeto1 from "./assets/ProjetosImg/guerreiro.png"
import projeto2 from "./assets/ProjetosImg/jokenpo.png"
import projeto3 from "./assets/ProjetosImg/controle.png"
import projeto4 from "./assets/ProjetosImg/pokedex.png"
import  "./Projetos.css";


function Projetos(){
    return(
        <div className="container-projetos">
        <h1 className="titulo-projetos">Meus Projetos</h1>
        <a href="https://github.com/Pabloblinhao/Projeto01/blob/master/Projeto01.js" target="_blank" rel="noopener noreferrer" className="projeto-item">
          Jornada do Heroi
          <img src={projeto1} alt="Projeto 1" className="projeto-img" />
        </a>
        <a href="https://github.com/Pabloblinhao/Jokenpo/blob/master/jokenpo.js" target="_blank" rel="noopener noreferrer" className="projeto-item">
          Jokenpô 
          <img src={projeto2} alt="Projeto 2" className="projeto-img" />
        </a>
        <a href="https://github.com/Pabloblinhao/Projeto4/blob/main/projeto4.js" target="_blank" rel="noopener noreferrer" className="projeto-item">
          Jogo da Ficção Interativa 
          <img src={projeto3} alt="Projeto 3" className="projeto-img" />
        </a>
        <a href="https://pokedex-react-bice.vercel.app/" target="_blank" rel="noopener noreferrer" className="projeto-item">
          Pokedex 
          <img src={projeto4} alt="Projeto 4" className="projeto-img" />
        </a>
      </div>
    )
}

export default Projetos;
import React from "react";
import "./Contato.css"


import contato1 from "./assets/contato/email.png";
import contato2 from "./assets/contato/whatsapp.png";
import contato3 from "./assets/contato/github.png";
import contato4 from "./assets/contato/linkedin.png";

function Contato() {
  return (
    <div className="container-contato">
      <a href="mailto:pablo_vitor1707@hotmail.com" target="_blank" rel="noopener noreferrer" className="contato-item">
        <img src={contato1} alt="Contato 2" className="contato-img" />
      </a>
      <a href="https://wa.me/5514981483528" target="_blank" rel="noopener noreferrer" className="contato-item">
        <img src={contato2} alt="Contato 3" className="contato-img" />
      </a>
      <a href="https://github.com/Pabloblinhao" target="_blank" rel="noopener noreferrer" className="contato-item">
        <img src={contato3} alt="Contato 4" className="contato-img" />
      </a>
      <a href="https://www.linkedin.com/in/pablo-souza-985132241/" target="_blank" rel="noopener noreferrer" className="contato-item">
        <img src={contato4} alt="Contato 5" className="contato-img" />
      </a>
    </div>
  );
}

export default Contato;
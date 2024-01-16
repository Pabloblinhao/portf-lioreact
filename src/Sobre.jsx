import React from "react";
import curriculumPDF from "./assets/Curriculo-fullstack.pdf"
import "./Sobre.css";

function Sobre() {
  return (
    <div className="container-sobre">
      <h1 className="sobre-mim">Sobre mim</h1>
      <p className="texto-sobre">
        Olá! Meu nome é Pablo e sou um desenvolvedor Full Stack apaixonado
        por criar soluções digitais. Iniciei minha jornada na programação no instituto Blue EdTech em
        2022 e conlui em 2023, e desde então venho explorando diversas tecnologias e linguagens.
        Com experiência em desenvolvimento Full Stack, tenho habilidades em
        criar aplicações web completas, desde o front-end até o back-end. Minhas
        principais áreas de atuação incluem HTML, CSS, JavaScript, React,
        Node.js e outras tecnologias relacionadas. Através do meu portfólio,
        tenho o prazer de compartilhar alguns dos projetos em que trabalhei,
        demonstrando meu comprometimento em fornecer soluções de alta qualidade
        e meu amor pela arte da programação. Estou sempre em busca de novos
        desafios e oportunidades para expandir meu conhecimento e aprimorar
        minhas habilidades. Se você está em busca de um desenvolvedor Full Stack
        dedicado e entusiasmado, ficarei feliz em colaborar em seu próximo
        projeto.
      </p>
      <a className="button-download" href={curriculumPDF} target="_blank" rel="noopener noreferrer">
  <svg>...</svg>
  <span >Download Curriculum</span>
</a>    </div>
  );
}

export default Sobre;

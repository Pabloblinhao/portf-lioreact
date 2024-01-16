import React from "react";
import "./Habilidades.css"
import habilidade1 from "./assets/skills/type.png";
import habilidade2 from "./assets/skills/js.png";
import habilidade3 from "./assets/skills/css.png";
import habilidade4 from "./assets/skills/html.png";
import habilidade5 from "./assets/skills/react.png";
import habilidade6 from "./assets/skills/node.png";
import habilidade7 from "./assets/skills/git.png";
import habilidade8 from "./assets/skills/postgre.png";
import habilidade9 from "./assets/skills/mongodb.png";

function Habilidades() {
  return (
    <div className="container-habilidades">
      <img src={habilidade1} alt="Habilidade 1" className="habilidade-img" />
      <img src={habilidade2} alt="Habilidade 2" className="habilidade-img" />
      <img src={habilidade3} alt="Habilidade 3" className="habilidade-img" />
      <img src={habilidade4} alt="Habilidade 4" className="habilidade-img" />
      <img src={habilidade5} alt="Habilidade 5" className="habilidade-img" />
      <img src={habilidade6} alt="Habilidade 6" className="habilidade-img" />
      <img src={habilidade7} alt="Habilidade 7" className="habilidade-img" />
      <img src={habilidade8} alt="Habilidade 8" className="habilidade-img" />
      <img src={habilidade9} alt="Habilidade 9" className="habilidade-img" />
    </div>
  );
}

export default Habilidades;
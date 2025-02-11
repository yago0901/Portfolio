import React from "react";
import "./button.css";

function Buttons() {

  return (
    <div className="container button-container">
      <a href="/curriculo.pdf" download className="btn pri" data-testid="curriculo">
        Curriculo
      </a>
      <a href="#contact" className="btn sec">
        Contato
      </a>
    </div>
  );
}

export default Buttons;

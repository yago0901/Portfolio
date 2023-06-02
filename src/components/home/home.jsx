import "./home.css";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>Sobre</span> <br />
        <p>
          Olá meu nome é Yago sou Desenvolvedor Front End. <br />
          Atuo com React js, React Native, Node js, Ui Design,
          <br />
          Graphql, Firebase entre outras tecnologias.
          <br /> Desenvolvo interfaces modernas com alta qualidade e<br /> alta
          performance. Diferenciais em edições de imagens,
          <br /> vídeos, responsividade e funcionalidade.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;

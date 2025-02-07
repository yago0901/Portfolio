import { useState } from "react";
import "./home.css";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div
          className={`hover-show ${isHovered ? "active" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-testid="picture"
        >
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt='Yago Santos Gigeck' />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>para baixo</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>Sobre</span> <br />
        <p>
          Sou um desenvolvedor frontend apaixonado por criar interfaces
          modernas, responsivas e intuitivas. Minha jornada começou em 2020 na
          Stefanini, onde tive acesso à Alura e aprofundei meus conhecimentos.
          Desde então, venho desenvolvendo soluções para web e mobile, atuando
          tanto em empresas quanto de forma autônoma pela Dev Assina.
          Atualmente, foco na criação de aplicações performáticas e escaláveis,
          utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.
          <br />
          Estudando atualmente CI/CD com docker.
        </p>
      </h2>

      <h2>Tecnologias e Ferramentas</h2>

      <div className="category">
        <ul>
          <li>
            <strong>Linguagens e Frameworks:</strong>
            Next.js(SSR e SSG), React.js, TypeScript, JavaScript
          </li>
          <li>
            <strong>Estilização:</strong>
            CSS3, SASS/SCSS, Styled Components, TailwindCSS, Bootstrap
          </li>
          <li>
            <strong>Componentização e Design System:</strong>
            Material UI, Ant Design
          </li>
          <li>
            <strong>Hooks:</strong>
            useState, useEffect, useContext, useReducer, useRef, useForm e
            personalizados.
          </li>
          <li>
            <strong>Integração e APIs:</strong>
            API, API RESTful, WebSocket
          </li>
          <li>
            <strong>Autenticação:</strong>
            Web Token, NextAuth.js
          </li>
          <li>
            <strong>Versionamento e Deploy:</strong>
            Git, GitHub, GitLab, Vercel
          </li>
          <li>
            <strong>Prototipação e UI/UX:</strong>
            Figma
          </li>
          <li>
            <strong>Boas Práticas:</strong>
            Clean Code, CSS Modules e BEM (Block Element Modifier)
          </li>
        </ul>
      </div>

      <div className="category">
        <h3>Integração e Backend</h3>
        <ul>
          <li>
            <strong>APIs e Gerenciamento de Dados:</strong>
            Axios, Fetch API, Firebase
          </li>
          <li>
            <strong>Gerenciamento de Estado:</strong>
            Context API, Redux Toolkit, TanStack Query
          </li>
        </ul>
      </div>

      <div className="category">
        <h3>🛠️ Ferramentas e Metodologias</h3>
        <ul>
          <li>
            <strong>Versionamento e Deploy:</strong>
            Git, GitHub, Vercel
          </li>
          <li>
            <strong>Metodologias Ágeis:</strong>
            Agile, Scrum, Kanban
          </li>
          <li>
            <strong>Testes e Qualidade:</strong>
            Jest, Testing Library, testes unitários
          </li>
        </ul>
      </div>

      <Buttons/>
    </div>
  );
}

export default Home;

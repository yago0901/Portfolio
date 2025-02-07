import "./members.css";
import BuscaTradeImg from "../props/img3.jpg";
import FuvirImg from "../props/fuvir.jpg";
import AtenderDigitalImg from "../props/atenderDigital.png";
import ParafuzzoImg from "../props/parafuzo.png";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projetos</h1>

      <div className="member member-4" data-testid='member-4'>
        <div className="member-info">
          <div className="member-title">
            <img src={ParafuzzoImg} alt="Minha Figura" />
          </div>
          <h3 className="position">Desenvolvedor Front-End</h3>
          <h4 className="about">
            Atuei como Desenvolvedor Web, sendo responsável pela manutenção e
            pelo desenvolvimento de novas funcionalidades em diversas
            ferramentas utilizadas pela empresa. Além disso, participei da
            criação de novos produtos, desde a concepção até a implementação,
            garantindo um design funcional e moderno. Minha principal tecnologia
            nesse período foi React, permitindo entregar soluções interativas,
            escaláveis e alinhadas às necessidades do negócio.
          </h4>
          <div className="redirect-site">
            <a
              href="https://parafuzo.com/"
              target="_blank"
              className="contact-member"
              rel="noreferrer"
            >
              <span>Acessar site</span>
            </a>
          </div>
        </div>
      </div>

      <div className="member member-3" data-testid='member-3'>
        <div className="member-info">
          <div className="member-title">
            <img src={AtenderDigitalImg} alt="Minha Figura" />
          </div>
          <h3 className="position">Desenvolvedor Front-End</h3>
          <h4 className="about">
            Atuei como Desenvolvedor Web, focando na manutenção e no
            desenvolvimento de novas funcionalidades para a ferramenta
            OnMinichannel, uma solução voltada para integração e otimização de
            canais de atendimento. Minha atuação envolveu o uso de tecnologias
            como PHP, Laravel e JavaScript, permitindo a implementação de
            melhorias e a entrega de recursos que ampliaram a eficiência e a
            usabilidade da plataforma. Essa experiência consolidou minhas
            habilidades em desenvolvimento full stack e em trabalhar com
            sistemas complexos e dinâmicos.
          </h4>
          <div className="redirect-site">
            <a
              href="https://www.buscatrade.com.br"
              target="_blank"
              className="contact-member"
              rel="noreferrer"
            >
              <span>Acessar site</span>
            </a>
          </div>
        </div>
      </div>

      <div className="member member-2" data-testid='member-2'>
        <div className="member-info">
          <div className="member-title">
            <img src={FuvirImg} alt="Minha Figura" />
          </div>
          <h3 className="position">Desenvolvedor Front-End (Freelancer)</h3>
          <h4 className="about">
            Participei do desenvolvimento de Fuvir.com, focado na criação de
            páginas web funcionais e atraentes. As principais atividades
            incluíram: Desenvolvimento de páginas responsivas para diferentes
            dispositivos, priorizando a experiência do usuário. Implementação de
            funcionalidades interativas para melhorar o engajamento do
            público-alvo. Otimização do design e performance para garantir
            carregamento rápido e usabilidade. Esse projeto reforçou minha
            habilidade em desenvolver soluções web sob medida para atender
            demandas específicas de clientes.
          </h4>
          <div className="redirect-site">
            <a
              href="https://www.buscatrade.com.br"
              target="_blank"
              className="contact-member"
              rel="noreferrer"
            >
              <span>Acessar site</span>
            </a>
          </div>
        </div>
      </div>

      <div className="member member-1" data-testid='member-1'>
        <div className="member-info">
          <div className="member-title">
            <img src={BuscaTradeImg} alt="Minha Figura" />
          </div>
          <h3 className="position">Desenvolvedor Front-End (Freelancer)</h3>
          <h4 className="about">
            Atuei como desenvolvedor freelancer em diversos projetos,
            principalmente por meio de plataformas como GetNinjas e
            Freelancer.com.br. Minha principal responsabilidade foi criar e
            implementar soluções de design responsivo e landing pages otimizadas
            para captação de clientes, além de funcionalidades interativas para
            páginas da web.
          </h4>
          <div className="redirect-site">
            <a
              href="https://www.buscatrade.com.br"
              target="_blank"
              className="contact-member"
              rel="noreferrer"
            >
              <span>Acessar site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

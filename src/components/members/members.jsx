import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projetos</h1>

      <div className="member member-2">
        <div className="member-img6"></div>
        <div className="member-info">
          <h1 className="name">Parafuzo</h1>
          <h3 className="position">Front-end</h3>
          <h4 className="about">
            Desenvolvendo novas funcionalidades vindas de QA. Aplicando
            melhorias e mantendo código atualizado. Metodologia Scrum e
            linguagem React Js.
          </h4>
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

      <div className="member member-2">
        <div className="member-img8"></div>
        <div className="member-info">
          <h1 className="name">Atender Digital</h1>
          <h3 className="position">Desenvolvedor Laravel</h3>
          <h4 className="about">
            Desenvolvimento e manutenção do site e funcionalidades. PhP Laravel.
          </h4>
          <a
            href="https://atender.digital/"
            target="_blank"
            className="contact-member"
            rel="noreferrer"
          >
            <span>Acessar site</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img7"></div>
        <div className="member-info">
          <h1 className="name">Fuvir</h1>
          <h3 className="position">Desenvolvedor</h3>
          <h4 className="about">
            Criação do projeto de investimento e correções na na plataforma.
            Além de criação de imagens, vídeos entre outros.
          </h4>
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

      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Busca Trade</h1>
          <h3 className="position">Front-end</h3>
          <h4 className="about">
            Projeto de comunidade e indicadores referente a opções binárias e
            afins. Conheça clicando no botão a baixo.
          </h4>
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
  );
};

export default Members;

import "./contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contato</h1>
      <div className="contact-links">
        <a
          href="https://github.com/yago0901"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span>Desenvolvendo com paixão</span>
          </h2>
        </a>

        <a
          href="https://contate.me/yagocontato"
          className="contact whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 11 99745-5530</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/yagogigeck/" 
          className="contact linkedin"
          target="_blank"
          rel="noreferrer">
          <AiOutlineLinkedin className="icon" />
          <h2>
          linkedin <span>@yagoassina</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;

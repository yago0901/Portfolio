import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contato</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCzoBz4EKrLOvm3L4DDNc_pg"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Creative Ambition</span>
          </h2>
        </a>

        <a
          href="https://wa.link/bywzv3"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 11 99745-5530</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>@yagoassina</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;

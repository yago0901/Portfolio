import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/yagoassina/#"
          target="_blank">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/yago.gigeck"
          target="_blank">
          {" "}
          <FaFacebookF className="social" />
        </a>

        <a href="https://www.youtube.com/channel/UC_V2QryT7zb2ASpYUVtnTHQ"
          target="_blank">
          <TiSocialYoutube className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;

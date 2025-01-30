import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        <a href="#home">
          <h2>
            <BsMouse /> - para cima -
          </h2>
        </a>
      </h1>
    </div>
  );
}
export default Footer;

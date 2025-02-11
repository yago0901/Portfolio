import React from "react";
import "./footer.css";
import { BsMouse } from "react-icons/bs";

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

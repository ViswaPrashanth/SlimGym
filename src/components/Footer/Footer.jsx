import React from "react";
import "./Footer.css";

import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <hr />
      <div className="footer">
        <div className="social-links">
        <a href='https://www.instagram.com/prashaaaanth___09/' target='_blank' rel='noreferrer noopener'><img src={Instagram} alt="" /></a>
          <a href='https://www.linkedin.com/in/viswa-prasanth-chakravadhanula-7b2114161/' target= '_blank' rel='noreferrer noopener'><img src={LinkedIn} alt="" /></a>
        </div>
        <p><Link 
            to="home"
              spy={true}
              smooth={true}>𝕊𝕃𝕀𝕄 𝔾𝕐𝕄 ↑</Link></p>
      </div>
      <div className="blur footer-blur1" />
      <div className="blur footer-blur2" />

    </div>
  );
};

export default Footer;

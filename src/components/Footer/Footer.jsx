import React from 'react';
import "./Footer.css";
import footer_logo from "../Assents/logo_big.png";
import Instragram_icon from "../Assents/instagram_icon.png";
import pintester_icon from "../Assents/pintester_icon.png";
import Whatsapp_icon from "../Assents/whatsapp_icon.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=''/>
                <p>SHOP</p>
            </div>
            <ul className="footer-links">
                <li>Compania</li>
                <li>Products</li>
                <li>Serviços</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={Instragram_icon} alt="Instagram"/>
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="Pinterest"/>
                </div>
                <div className="footer-icons-container">
                    <img src={Whatsapp_icon} alt="WhatsApp"/>
                </div>
            </div>
            {/* Moved this section inside the main div */}
            <div className="footer-copyright">
                <hr />
                <p>Copyright © 2024 - All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './layout.css'; // Import a separate CSS file for styling
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text" style={{color: 'white' }}>
          ELACETECH
        </div>
        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

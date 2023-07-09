import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
      <div className='container footer-container'>
        <img className='footer-logo' src={Logo} alt='logo-footer'></img>
        <div className='footer-site-map'>
          <p className='footer-title'> SITEMAP</p>
          <Link className='footer-item' to='/'>
            Home
          </Link>
          <Link className='footer-item' to='/menu'>
            Menu
          </Link>
          <Link className='footer-item' to='/reservations'>
            Reservations
          </Link>
          <Link className='footer-item' to='/orders'>
            Orders
          </Link>
          <Link className='footer-item' to='/reviews'>
            Reviews
          </Link>
          <Link className='footer-item' to='/login'>
            Login
          </Link>
        </div>
        <div className='footer-contact'>
          <p className='footer-title'>CONTACT</p>
          <p className='footer-item'>
            <strong>Address:</strong> 11th Street BGC, Taguig City.
          </p>
          <p className='footer-item'>
            <strong>Contacts:</strong> 0912-345-676
          </p>
          <p className='footer-item'>
            <strong>Email:</strong> little-lemon@email.com{" "}
          </p>
        </div>
        <div className='footer-social'>
          <p className='footer-title'> SOCIAL MEDIA</p>
          <a
            className='footer-item'
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </a>
          <a
            className='footer-item'
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </a>
          <a
            className='footer-item'
            href='https://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} />
            Twitter
          </a>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <p>All Rights Reserve | Copyright © Little Lemon 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

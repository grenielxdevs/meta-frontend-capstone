import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import LogoSp from "../../assets/logo-sp.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isDeviceMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isDeviceTablet = useMediaQuery({
    query: "(max-width: 960px)",
  });

  const navLinks = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Menu", link: "/menu" },
    { id: 3, label: "Reservations", link: "/reservations" },
    { id: 4, label: "Reviews", link: "/reviews" },
    { id: 5, label: "Orders", link: "/orders" },
    { id: 6, label: "Login", link: "/login" },
  ];

  return (
    <header id='header' className='nav'>
      <div className='container'>
        <div className='nav-logo'>
          <Link to='/'>
            <img
              src={!isDeviceMobile ? Logo : LogoSp}
              alt='little lemon logo'
            />
          </Link>
        </div>
        <nav className='nav-center'>
          {isDeviceTablet ? (
            <button>
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            <ul className={`menu-list`}>
              {navLinks.map(
                (item) =>
                  item.id !== 6 && (
                    <li key={item.id}>
                      <Link to={item.link} className='link'>
                        {item.label}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          )}
        </nav>
        <nav className='nav-right'>
          <span>Hi Guest!</span>
          <ul className={`menu-list`}>
            <li key={navLinks[5].id}>
              <Link to={navLinks[5].link} className='link'>
                {navLinks[5].label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

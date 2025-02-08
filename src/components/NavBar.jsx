import { useState } from "react";
import logo from "../assets/img/logo.png";
import './NavBar.css';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <a className="a-logo" href="">
          <img src={logo} alt="Logo" className="Logo" />
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`Navbar-menu ${isOpen ? "open" : ""}`}>
          <a href="#banner">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#service">Layanan</a>
          <a href="#project">Project</a>
          <div className="menu-order">
            <a target="_blank" href="https://wa.me/6287817649178?text=Halo kak saya mau joki di JOKI IT!!">
              Hubungi Kita
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

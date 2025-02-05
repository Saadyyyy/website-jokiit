import { Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const NavBar = () => {
  return (
    <Navbar className="Navbar">
      <div className="container">
        <a className="a-logo" href="">
          {" "}
          <img src={logo} alt="Logo" className="Logo" />
        </a>

        <div className="Navbar-menu">
          <a href="">Beranda</a>
          <a href="">Tentang Kami</a>
          <a href="">Layanan</a>
          <a href="">Project</a>
          <div className="">
            <div className="menu-order">
            <a  target="_blank"href="https://wa.me/6287817649178?text=Halo kak saya mau joki di JOKI IT!!">Hubungi Kita</a>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/navbarImagenes/logo.png";


export default function Navbar() {

  useEffect(() => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  };

  hamburger.addEventListener("click", toggleMenu);

  return () => {
    hamburger.removeEventListener("click", toggleMenu);
  };
}, []);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo E.E.S. N° 59" className="logo-img" />
            <span className="nav-logo-text">
              <span className="line1">E.E.S. N° 59</span>
              <span className="line2">Modalidad: </span>
              <span className="line3">Ciencias Naturales.</span>
            </span>
          </Link>
        </div>

        <button className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobreNosotros">Sobre Nosotros</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/canciones">Canciones</Link></li>
          <li><Link to="/proceres">Próceres</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

      </div>
    </nav>
  );
}

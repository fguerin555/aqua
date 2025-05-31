import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/images/LogoOndaBlue1.jpg"; // Renommé pour éviter confusion potentielle
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Ferme le menu lorsqu'un lien est cliqué, y compris le logo en mode mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 1224 && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo enveloppé dans un lien, cliquable pour fermer le menu mobile */}
      <Link to="/" className={styles.logoLinkAnchor} onClick={handleLinkClick}>
        <div className={styles.logoContainer}>
          {" "}
          {/* Classe renommée pour plus de clarté */}
          <img
            src={LogoImg}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
            className={styles.logoImage}
          />
        </div>
      </Link>

      {/* Bouton Hamburger pour les petits écrans */}
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="navbar-links-list"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {menuOpen ? "✕" : "☰"} {/* Icônes pour ouvrir/fermer */}
      </button>

      {/* Liste des liens de navigation */}
      <ul
        id="navbar-links-list"
        className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}
      >
        {/* Le logo dupliqué a été retiré d'ici */}
        <li>
          <Link to="/HomePage" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/NewProgramma" onClick={handleLinkClick}>
            Programma
          </Link>
        </li>
        <li>
          <Link to="/BlogPage" onClick={handleLinkClick}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/LinksPage" onClick={handleLinkClick}>
            Contatti
          </Link>
        </li>
        <li>
          <Link to="/Stampa" onClick={handleLinkClick}>
            Rassegna Stampa
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

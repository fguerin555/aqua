import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Optionnel : Ferme le menu lorsqu'un lien est cliqué en mode mobile
  const handleLinkClick = () => {
    // Le breakpoint 1224px correspond à votre media query CSS (à ajuster si besoin)
    if (window.innerWidth <= 1224 && menuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <nav className={styles.navbar}>
      {/* Bouton Hamburger pour les petits écrans */}
      <button
        className={styles.menuToggle} // Assurez-vous que .menuToggle est défini dans Navbar.module.css
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="navbar-links-list" // Doit correspondre à l'id de l'ul
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {menuOpen ? "✕" : "☰"} {/* Icônes pour ouvrir/fermer */}
      </button>

      <ul
        id="navbar-links-list" // ID pour aria-controls
        className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}
      >
        <li>
          <Link to="/" onClick={handleLinkClick}></Link>{" "}
          {/* Ce lien est vide, peut-être pour un logo ? */}
        </li>
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
            Contacts
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

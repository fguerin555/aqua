import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LogoImg from "../assets/images/LogoOndaBlue2.png";
import styles from "./Navbar.module.css";
import Costruzione from "../assets/images/Costruzione.png";

// Importer les drapeaux
import flagIT from "../assets/images/FlagItaly.png";
import flagEN from "../assets/images/FlagEngland.png";
import flagFR from "../assets/images/FlagFrance.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 1224 && menuOpen) {
      setMenuOpen(false);
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoLinkAnchor} onClick={handleLinkClick}>
        <div className={styles.logoContainer}>
          <img
            src={LogoImg}
            alt={t("navbar.logoAlt")}
            className={styles.logoImage}
          />
          <img
            src={Costruzione}
            alt="Site en construction"
            className={styles.Costruzione}
          />
        </div>
      </Link>

      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="navbar-links-list"
        aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul
        id="navbar-links-list"
        className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}
      >
        <li>
          <Link to="/HomePage" onClick={handleLinkClick}>
            {t("navbar.home")}
          </Link>
        </li>
        <li>
          <Link to="/NewProgramma" onClick={handleLinkClick}>
            {t("navbar.program")}
          </Link>
        </li>

        <li>
          <Link to="/LinksPage" onClick={handleLinkClick}>
            {t("navbar.contacts")}
          </Link>
        </li>
        <li>
          <Link to="/Stampa" onClick={handleLinkClick}>
            {t("navbar.pressReview")}
          </Link>
        </li>

        {/* Sélecteur de langue avec drapeaux */}
        <li className={styles.languageSwitcher}>
          <button onClick={() => changeLanguage("it")}>
            <img src={flagIT} alt="Italiano" className={styles.flagIcon} />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <img src={flagEN} alt="English" className={styles.flagIcon} />
          </button>
          <button onClick={() => changeLanguage("fr")}>
            <img src={flagFR} alt="Français" className={styles.flagIcon} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

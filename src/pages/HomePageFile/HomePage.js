// /Users/fredericguerin/Desktop/aqua/src/pages/HomePageFile/HomePage.js
import React from "react";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import LogoCiC from "../../assets/images/LogoCiC.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
import fotoRepresentative from "../../assets/images/fotoRepresentative.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.HomePage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
        </div>
        {/* <div className={styles.Credits}>
          <p>{t("home.credits")}</p>
        </div> */}

        <div className={styles.CiCpresenta}>
          <img src={LogoCiC} alt={t("links.logoCiC")} />
          <p>{t("home.CiCpresenta")}</p>
        </div>
        <div className={styles.HomePageContentA}>
          <p>{t("home.title")}</p>
        </div>
        <div className={styles.Logo}>
          <img
            src={Logo}
            alt={t("navbar.logoAlt")} // Réutilisation de la clé existante si le logo est le même
          />
        </div>
        <div className={styles.FotoGenerale}>
          <img
            src={fotoRepresentative}
            alt={t("home.fotoAlt")} // Réutilisation de la clé existante si le logo est le même
          />
        </div>
        <div className={styles.HomePageContentB}>
          <p>{t("home.paragraph1")}</p>
          <p>{t("home.paragraph2")}</p>
          <p>{t("home.paragraph3")}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// /Users/fredericguerin/Desktop/aqua/src/pages/HomePageFile/HomePage.js
import React from "react";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.HomePage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
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

// /Users/fredericguerin/Desktop/aqua/src/pages/HomePageFile/HomePage.js
import React from "react";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LogoCiC from "../../assets/images/LogoCiC.png";
import ExpandableTransText from "../../components/ExpandableTransText";

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
          {/* <p>{t("home.paragraph")}</p>
          <p>{t("home.paragraph2")}</p>
          <p>{t("home.paragraph3")}</p> */}
          <ExpandableTransText
            i18nKeyIntro="home.paragraph.TextIntro"
            i18nKeyFull="home.paragraph.TextFull"
            i18nKeyMore="home.paragraph.ReadMore"
            i18nKeyLess="home.paragraph.ReadLess"
          />
        </div>

        <div className={styles.socials}>
          <div className={styles.socialRow}>
            <p>{t("home.socials")}</p>
            <div className={styles.iconLinks}>
              <a
                href="https://www.instagram.com/ilraccontodellacqua/"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt={t("links.Instagram")}
                  className={styles.icon}
                />
              </a>
              <a
                href="https://www.facebook.com/ilraccontodellacqua"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt={t("links.Facebook")}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>{t("home.copyright")}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

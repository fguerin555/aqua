import React from "react";

import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import LogoCiC from "../../assets/images/LogoCiC.png";
import styles from "./LinksPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
const LinksPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.LinksPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
      </div>
      <div className={styles.LinksPageTitle}>
        <p>{t("links.pageTitle")}</p>
      </div>
      <div className={styles.Logo}>
        <img src={Logo} alt={t("navbar.logoAlt")} />
      </div>
      <div className={styles.MailProjet}>
        <p>ilraccontodellacqua@gmail.com</p>
      </div>
      <div className={styles.liensite}>
        <div className={styles.LogoCiC}>
          <img src={LogoCiC} alt={t("links.logoCiC")} />
          <a href="https://cielincitta.org" rel="noopener noreferrer">
            <p>{t("links.cielincitta")}</p>
          </a>
        </div>
      </div>

      <div className={styles.LinksCIC}>
        <p>c.f. 97994670582 - cielincitta@gmail.com</p>
        <p>irma.alonzo@pec.it - tel: 389 639 1150</p>
        <p>cielincitta.org</p>
      </div>
    </div>
  );
};

export default LinksPage;

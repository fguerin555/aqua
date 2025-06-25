import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import LogoCiC from "../../assets/images/LogoCiC.png";

import contact from "../../assets/images/contact.png";
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

      <div className={styles.liensite}>
        <div className={styles.LogoCiC}>
          <img src={LogoCiC} alt={t("links.logoCiC")} />
          <a href="https://cielincitta.org" rel="noopener noreferrer">
            <p>{t("links.cielincitta")}</p>
          </a>
        </div>
      </div>

      <div className={styles.Contact}>
        {/* <div className={styles.Foto}> */}
        <img src={contact} alt={t("contact Ciel in città.imageAlt")} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default LinksPage;

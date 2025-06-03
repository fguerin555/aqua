import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
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
        <a
          href="https://cielincitta.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{t("links.cielincitta")}</p>
        </a>
      </div>
    </div>
  );
};

export default LinksPage;

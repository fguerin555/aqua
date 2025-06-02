import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
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
    </div>
  );
};

export default LinksPage;

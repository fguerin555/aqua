import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
import styles from "./Stampa.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
const StampaPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.StampaPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
      </div>
      <div className={styles.StampaTitle}>
        <p>{t("stampa.pageTitle")}</p>
      </div>
      <div className={styles.Logo}>
        <img src={Logo} alt={t("navbar.logoAlt")} />
      </div>
    </div>
  );
};

export default StampaPage;

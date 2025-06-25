import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
// import LavoriInCorso from "../../assets/images/LavoriInCorso.png";
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
      {/* <div className={styles.LavoriInCorso}>
        <div className={styles.Foto}>
          <img
            src={LavoriInCorso}
            alt={t("Simbolo di Lavori In Corso.imageAlt")}
          />
        </div>
      </div> */}
    </div>
  );
};

export default StampaPage;

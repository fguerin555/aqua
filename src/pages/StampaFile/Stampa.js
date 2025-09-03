import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import FondoCS from "../../assets/images/FondoCS.png";

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
      <div className={styles.ComStampa}>
        <div className={styles.Foto}>
          <img src={FondoCS} alt={t("CommunicatoStampa.imageAlt")} />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{t("home.copyright")}</p>
      </div>
    </div>
  );
};

export default StampaPage;

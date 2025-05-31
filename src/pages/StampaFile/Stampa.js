import React from "react";
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
import styles from "./Stampa.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
const StampaPage = () => {
  return (
    <div className={styles.StampaPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt="Acqua di fiume con riflessi di luce" />
      </div>
      <div className={styles.StampaTitle}>
        <p>Rassegna Stampa </p>
      </div>
      <div className={styles.Logo}>
        <img
          src={Logo}
          alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
        />
      </div>
    </div>
  );
};

export default StampaPage;

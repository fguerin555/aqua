import React from "react";
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
import styles from "./LinksPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
const LinksPage = () => {
  return (
    <div className={styles.LinksPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt="Acqua di fiume con riflessi di luce" />
      </div>
      <div className={styles.LinksPageTitle}>
        <p>Contatti</p>
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

export default LinksPage;

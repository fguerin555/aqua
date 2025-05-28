import React from "react";
import Logo from "../../assets/images/LogoBlue.jpg";
import styles from "./BlogPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
const BlogPage = () => {
  return (
    <div className={styles.BlogPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt="Acqua di fiume con riflessi di luce" />
      </div>
      <div className={styles.BlogPageTitle}>
        <p>BLOG</p>
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

export default BlogPage;

import React from "react";

import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.HomePage}>
        <h1>Il Racconto dell'Acqua</h1>
        <div className={styles.Logo}>
          {/* <img
            src={Logo}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

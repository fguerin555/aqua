import React from "react";

import styles from "./Footer.module.css";
import Partners from "../assets/LogosPartners/BandaLoghiPNRR.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.Partners}>
        <img src={Partners} alt="Partners del progetto" />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LazioEventiLogo from "../../assets/images/LazioEventiLogo.png";
import ExibartLogo from "../../assets/images/ExibartLogo.png";
import JulietLogo from "../../assets/images/JulietLogo.png";
import RomaCultureLogo from "../../assets/images/RomaCultureLogo.png";
import LogoArtLife from "../../assets/images/LogoArtLife.png";

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
        <p>{t("Stampa.pageTitle")}</p>
      </div>

      <div className={styles.Logo}>
        <img src={Logo} alt={t("navbar.logoAlt")} />
      </div>

      <div className={styles.socials}>
        <div className={styles.socialRow}>
          <p>{t("home.socials")}</p>
          <div className={styles.iconLinks}>
            <a
              href="https://www.instagram.com/ilraccontodellacqua/"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/ilraccontodellacqua"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.Month}>
        <p>{t("Stampa.Month1")}</p>
      </div>

      {/* Lignes d'icônes */}
      <div className={styles.iconLines}>
        {/* Ligne 1 */}
        <div>
          <div className={styles.iconLine}>
            <div className={styles.iconBox}>
              <a
                href="https://culture.roma.it/manifestazione/il-racconto-dellacqua/"
                rel="noopener noreferrer"
              >
                <img src={RomaCultureLogo} alt={t("ExibartLogo.logoAlt")} />
              </a>
            </div>
          </div>
          {/* <p className={styles.iconLineLabel}>leggi l'articolo</p> */}
        </div>

        {/* Ligne 2 */}
        <div>
          <div className={styles.iconLine}>
            <div className={styles.iconBox}>
              <a
                href="https://www.exibart.com/evento-arte/il-racconto-dellacqua/"
                rel="noopener noreferrer"
              >
                <img src={ExibartLogo} alt={t("ExibartLogo.logoAlt")} />
              </a>
            </div>
          </div>
          {/* <p className={styles.iconLineLabel}>leggi l'articolo</p> */}
        </div>

        {/* Ligne 3 */}
        <div>
          <div className={styles.iconLine}>
            <div className={styles.iconBox}>
              <a
                href="https://www.juliet-artmagazine.com/events/aa-vv-il-racconto-dellacqua/"
                rel="noopener noreferrer"
              >
                <img src={JulietLogo} alt={t("JulietLogo.logoAlt")} />
              </a>
            </div>
          </div>
          {/* <p className={styles.iconLineLabel}>leggi l'articolo</p> */}
        </div>

        {/* Ligne 4 */}
        <div>
          <div className={styles.iconLine}>
            <div className={styles.iconBox}>
              <a
                href="https://artslife.com/2025/09/08/il-racconto-dellacqua-roma-tra-arte-storia-e-sostenibilita/"
                rel="noopener noreferrer"
              >
                <img src={LogoArtLife} alt={t("LazioEventiLogo.logoAlt")} />
              </a>
            </div>
          </div>
          {/* <p className={styles.iconLineLabel}>leggi l'articolo</p> */}
        </div>

        {/* Ligne 5 */}
        <div>
          <div className={styles.iconLine}>
            <div className={styles.iconBox}>
              <a
                href="https://www.lazioeventi.com/eventi/il-racconto-dellacqua"
                rel="noopener noreferrer"
              >
                <img src={LazioEventiLogo} alt={t("LazioEventiLogo.logoAlt")} />
              </a>
            </div>
          </div>
          {/* <p className={styles.iconLineLabel}>leggi l'articolo</p> */}
        </div>
      </div>

      <div className={styles.copyright}>
        <p>{t("home.copyright")}</p>
      </div>
    </div>
  );
};

export default StampaPage;

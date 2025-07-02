import React from "react";

import { useTranslation, Trans } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import LogoCiC from "../../assets/images/LogoCiC.png";
import styles from "./LinksPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
import Link from "../../assets/images/Link.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";

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
      <div className={styles.MailProjet}>
        <p>ilraccontodellacqua@gmail.com</p>
      </div>
      <div className={styles.liensite}>
        <div className={styles.LogoCiC}>
          <img src={LogoCiC} alt={t("links.logoCiC")} />
          <a href="https://cielincitta.org" rel="noopener noreferrer">
            <p>{t("links.cielincitta")}</p>
          </a>
        </div>
      </div>

      <div className={styles.LinksCIC}>
        <p>c.f. 97994670582 - cielincitta@gmail.com</p>
        <p>irma.alonzo@pec.it - tel: 389 639 1150</p>
        <p>cielincitta.org</p>
      </div>
      <div className={styles.TitleListArtists}>
        <p>
          <Trans i18nKey="links.TitleListArtists" components={{ br: <br /> }} />
        </p>
      </div>
      <div className={styles.NameArtists}>
        {/* --- Alfredo Pirri --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.alfredopirri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/alfredo_pirri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/studioalfredopirri/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.alfredo" />
        </div>

        {/* --- Paolo Assenza --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://paoloassenza.it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/paoloassenza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/paoloassenza/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.paolo" />
        </div>

        {/* --- Luca Grechi --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://lucagrechi85.wixsite.com/lucagrechi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/lucagrechi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/lucagrechi4/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.luca" />
        </div>
      </div>
    </div>
  );
};

export default LinksPage;

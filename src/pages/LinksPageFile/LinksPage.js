import React from "react";

import { useTranslation, Trans } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import LogoCiC from "../../assets/images/LogoCiC.png";
import styles from "./LinksPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
import Link from "../../assets/images/Link.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LinkVide from "../../assets/images/LinkVide.png";

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
      <div className={styles.TitleListCurators}>
        <p>
          <Trans
            i18nKey="links.TitleListCurators"
            components={{ br: <br /> }}
          />
        </p>
      </div>
      <div className={styles.NameCurators}>
        {/* --- Adriana Polveroni --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            <a
              href="https://www.instagram.com/adrianapolveroni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
          </div>
          <Trans i18nKey="links.NameCurators.adrianaP" />
        </div>
        {/* --- Isabella Vitale --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.pianobi.info" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/pianobi_artecontemporanea/"
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
              href="https://www.facebook.com/pianobi.info/"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameCurators.isabellaV" />
        </div>
        {/* --- Bruno di Marino --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.artribune.com/author/brunodimarino/"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/b.dima1966/?hl=it"
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
              href="https://www.facebook.com/bruno.dimarino1/"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameCurators.brunoD" />
        </div>
      </div>

      <div className={styles.TitleListArtists}>
        <p>
          <Trans i18nKey="links.TitleListArtists" components={{ br: <br /> }} />
        </p>
      </div>
      <div className={styles.NameArtists}>
        {/* --- Irma Alonzo --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://irmaalonzo53.wixsite.com/irmaalonzo"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>

            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>

            {/* <a
              href="https://www.instagram.com/alfredo_pirri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a> */}
            <a
              href="https://www.facebook.com/irma.alonzo.54"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.irmaA" />
        </div>

        {/* --- Giulia Apice--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            {/* <a
              href="https://paoloassenza.it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a> */}
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            <a
              href="https://www.instagram.com/giuliaapice_/"
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
              href="https://www.facebook.com/giulia.apice?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.giuliaA" />
        </div>

        {/* --- Paolo Assenza --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://paoloassenza.it/" rel="noopener noreferrer">
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
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.paoloA" />
        </div>
        {/* --- Matteo Basilé --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.matteobasile.com/" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/matteobasil3/?hl=it"
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
              href="https://www.facebook.com/matteo.basil/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.matteoB" />
        </div>
        {/* --- Alberto Besi--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://albertobesi.artstation.com"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/alberto_besi/"
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
              href="https://www.facebook.com/Besi.Alberto/"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.albertoB" />
        </div>
        {/* --- Rober Cahen--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://robertcahen.com/" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/robertcahen/"
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
              href="https://www.facebook.com/robert.cahen.29/?locale=pt_BR"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.robertC" />
        </div>
        {/* --- Giancarlo Caracuzzo--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.scuolaromanadeifumetti.it/docenti/giancarlo-caracuzzo/"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/giancarlocaracuzzo/"
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
              href="https://www.facebook.com/giancarlo.caracuzzo/"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.giancarloC" />
        </div>
        {/* --- Iginio de Luca--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.iginiodeluca.com" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/iginiodeluca/"
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
              href="https://www.facebook.com/iginio.deluca/
"
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
          <Trans i18nKey="links.NameArtists.iginioD" />
        </div>
        {/* --- Davide diTolla--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://davidemariaditolla.myportfolio.com/work"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/davidem.ditolla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>

            {/* <a
              href="https://www.facebook.com/iginio.deluca/
"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a> */}
          </div>
          <Trans i18nKey="links.NameArtists.davideT" />
        </div>
        {/* --- Luca Grechi--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://lucagrechi85.wixsite.com/lucagrechi"
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
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.lucaG" />
        </div>
        {/* --- Mercedes Klausner--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href=" http://mercedesklausner.com" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/mercedesklausner/"
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
              href="https://www.facebook.com/mercedes.klausner/?locale=fr_FR"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.mercedesK" />
        </div>
        {/* --- Laurent le Deunff--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            <a
              href="https://www.instagram.com/laurentledeunff_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            {/* <a
              href="https://www.facebook.com/mercedes.klausner/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a> */}
          </div>
          <Trans i18nKey="links.NameArtists.laurentL" />
        </div>
        {/* --- Cristiana Pacchiarotti--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            {/* <a
              href="https://www.instagram.com/cristiana.pacchiarotti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a> */}
            <a
              href="https://www.instagram.com/cristiana.pacchiarotti/"
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
              href="https://www.facebook.com/cristiana.pacchiarotti.9/
"
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
          <Trans i18nKey="links.NameArtists.cristianaP" />
        </div>
        {/* --- Pamela Pintus--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.pamelapintus.com" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/pamela.pintus/"
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
              href="https://www.facebook.com/pamela.pintus.7/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.pamelaP" />
        </div>
        {/* --- Alfredo Pirri--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.alfredopirri.com/" rel="noopener noreferrer">
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
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.alfredoP" />
        </div>
        {/* --- Fabrizio Plessi--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.fabrizioplessi.it/" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/fabrizio.plessi/"
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
              href="https://www.facebook.com/FabrizioPlessiOfficial/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.fabrizioP" />
        </div>
        {/* --- Lorenza Ricci--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.scuolaromanadeifumetti.it/docenti/lorenza-ricci/"
              rel="noopener noreferrer"
            >
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            {/* <a
              href="https://www.instagram.com/fabrizio.plessi/"
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
              href="https://www.facebook.com/FabrizioPlessiOfficial/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a> */}
          </div>
          <Trans i18nKey="links.NameArtists.lorenzaR" />
        </div>
        {/* --- Studio Azzuro--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.studioazzurro.com" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/studioazzurro/?hl=it"
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
              href="https://www.facebook.com/StudioAzzurro/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.studioA" />
        </div>
        {/* --- Pianobi--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.pianobi.info" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/pianobi_artecontemporanea/"
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
              href="https://www.facebook.com/pianobi.info/"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.pianoB" />
        </div>
        {/* --- Spazio Y--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://spazioy.com/" rel="noopener noreferrer">
              <img src={Link} alt={t("links.Link")} className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/spazio.y/?hl=it"
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
              href="https://www.facebook.com/SpazioY/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NameArtists.spazioY" />
        </div>
      </div>
    </div>
  );
};

export default LinksPage;

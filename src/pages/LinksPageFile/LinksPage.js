import React from "react";

import { useTranslation, Trans } from "react-i18next";
import Logo from "../../assets/images/LogoOndaBlue2.png";
import LogoCiC from "../../assets/images/LogoCiC.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import styles from "./LinksPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
import Link from "../../assets/images/Link.png";
import LinkVide from "../../assets/images/LinkVide.png";
import LogoOpenPolis from "../../assets/images/LogoOpenPolis.png";
import LogoComitato from "../../assets/images/LogoComitato.png";
import LogoEcoMuseo from "../../assets/images/LogoEcoMuseo.png";
import LogoAFraentzel from "../../assets/images/LogoAFraentzel.png";
import LogoABalabanoff from "../../assets/images/LogoABalabanoff.png";
import LogoConfalonieri from "../../assets/images/LogoConfalonieri.png";
// import LogoPianobi from "../../assets/images/LogoPianobi.png";
import LogoSpazioY from "../../assets/images/LogoSpazioY.png";

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
      {/* <div className={styles.MailProjet}>
        <p>
          <a href="mailto:ilraccontodellacqua@gmail.com">
            ilraccontodellacqua@gmail.com
          </a>
        </p>
      </div> */}
      <div className={styles.liensite}>
        <div className={styles.LogoCiC}>
          <img src={LogoCiC} alt={t("links.logoCiC")} />
          <a href="https://cielincitta.org" rel="noopener noreferrer">
            <p>{t("links.cielincitta")}</p>
          </a>
        </div>
      </div>

      <div className={styles.CodiceFiscale}>
        <p>c.f. 97994670582 </p>
      </div>

      <div className={styles.LinksCIC}>
        <p>
          <a href="mailto:cielincitta@gmail.com">cielincitta@gmail.com</a>
        </p>
        <p>
          <a href="mailto:irma.alonzo@pec.it">irma.alonzo@pec.it</a>
        </p>
        <p>
          <a href="tel:3896391150">tel: 389 639 1150</a>
        </p>
        <p>
          <a href="https://cielincitta.org" rel="noopener noreferrer">
            cielincitta.org
          </a>
        </p>
      </div>
      <div className={styles.TitleListCom}>
        <p>
          <Trans i18nKey="links.TitleListCom" components={{ br: <br /> }} />
        </p>
      </div>
      <div className={styles.NameCom}>
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
          <Trans i18nKey="links.NameCom.NicolettaG" />
        </div>
        <div className={styles.MailProjet}>
          <p>
            <a href="mailto:ilraccontodellacqua@gmail.com">
              ilraccontodellacqua@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className={styles.TitleListPartners}>
        <p>
          <Trans
            i18nKey="links.TitleListPartners"
            components={{ br: <br /> }}
          />
        </p>
      </div>
      <div className={styles.NamePartners}>
        {/* comitato di quartiere Casilina vecchia */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://comitatocvm.altervista.org/index.html"
              rel="noopener noreferrer"
            >
              <img
                src={LogoComitato}
                alt={t("links.logoComitato")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.instagram.com/comitato_mandrione/"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/comitatocvm/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NamePartners.Comitato" />
        </div>
        {/* ecomuseo della via Latina */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.ecomuseodellavialatina.it/"
              rel="noopener noreferrer"
            >
              <img
                src={LogoEcoMuseo}
                alt={t("links.logoComitato")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.instagram.com/ecomuseodellavialatina/"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/ecomuseodellavialatina/"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NamePartners.EcoMuseo" />
        </div>
        {/* IIS Confalonieri De Chirico */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.confalonieridechirico.edu.it/"
              rel="noopener noreferrer"
            >
              <img
                src={LogoConfalonieri}
                alt={t("links.LogoConfalonieri")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.instagram.com/confalonieridechirico_official/"
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
          <Trans i18nKey="links.NamePartners.IISConfalonieri" />
        </div>
        {/* IC angelica Balabanoff */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.icbalabanoff.edu.it/la-scuola/"
              rel="noopener noreferrer"
            >
              <img
                src={LogoABalabanoff}
                alt={t("links.LogoABalabanoff")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.instagram.com/explore/locations/108140782552046/scuola-media-angelica-balabanoff/"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/pages/Scuola%20Media%20Angelica%20Balabanoff/108140782552046/#about"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NamePartners.ICABalabanoff" />
        </div>
        {/* Istituto Anna Fraentzel */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.icannacelli.edu.it/la-scuola/"
              rel="noopener noreferrer"
            >
              <img
                src={LogoAFraentzel}
                alt={t("links.logoComitato")}
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
            <a
              href="https://www.facebook.com/pages/Istituto-Comprensivo-Statale-Anna-Fraentzel-Celli/681756385208329/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NamePartners.ICAFraentzel" />
        </div>
        {/* --- OpenPolice --- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://www.openpolis.it/" rel="noopener noreferrer">
              <img
                src={LogoOpenPolis}
                alt={t("links.logoOpenPolis")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.instagram.com/openpolis/"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt={t("links.Instagram")}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/openpolis/?locale=it_IT"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt={t("links.Facebook")}
                className={styles.icon}
              />
            </a>
          </div>
          <Trans i18nKey="links.NamePartners.Openpolis" />
        </div>

        {/* --- Spazio Y--- */}
        <div className={styles.ArtistNameAndIcons}>
          <div className={styles.iconsContainer}>
            <a href="https://spazioy.com/" rel="noopener noreferrer">
              <img
                src={LogoSpazioY}
                alt={t("links.logoSpazioY")}
                className={styles.icon}
              />
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
          <Trans i18nKey="links.NamePartners.spazioY" />
        </div>
        {/* --- Istituto Anna Fraentzel--- */}
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
        {/* Irma Alonzo */}
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
          <Trans i18nKey="links.NameCurators.IrmaA" />
        </div>
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
            <span>
              <img
                src={LinkVide}
                alt={t("links.LinkVide")}
                className={styles.icon}
              />
            </span>
            <a
              href="https://www.instagram.com/giuliaapice_/"
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
          </div>
          <Trans i18nKey="links.NameArtists.lorenzaR" />
        </div>
      </div>
    </div>
  );
};

export default LinksPage;

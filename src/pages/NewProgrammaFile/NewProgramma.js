// /Users/fredericguerin/Desktop/aqua/src/pages/ProgrammaFile/Programma.js
import React from "react";
import styles from "./NewProgramma.module.css";
import MapButton from "../../components/MapButton";
import fontana from "../../assets/images/fontana.png";
import parchetto from "../../assets/images/parchetto.png";
import Logo from "../../assets/images/LogoBlue.jpg";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const Programma = () => {
  return (
    <div>
      <div className={styles.ProgrammaPage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt="Acqua di fiume con riflessi di luce" />
        </div>

        <div className={styles.ProgrammaPageTitle}>
          <p>Programma</p>
        </div>

        <div className={styles.Logo}>
          <img
            src={Logo}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
          />
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>Appuntamento 1</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>Nome dell'appuntamento</p>
        </div>
        <div className={styles.Orari}>
          <p> Il 25 mese orari 00. alle 00.00</p>
          <p> Il 26 mese orari 00. alle 00.00</p>
          <p> Il 27 mese orari 00. alle 00.00</p>
          <p> sous titre si necessaire</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={fontana}
            alt="Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma"
          />
        </div>

        <div className={styles.LegendaFoto}>
          <p>
            Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma{" "}
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <MapButton mapQuery="Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma" />
        </div>
        <div className={styles.Foto}>
          <img
            src={parchetto}
            alt="Parchetto Condiviso, via Casilina Vecchia 124, Roma"
          />
        </div>

        <div className={styles.LegendaFoto}>
          <p>Parchetto Condiviso, via Casilina Vecchia 124, Roma </p>
        </div>
        <div className={styles.buttonWrapper}>
          <MapButton mapQuery="Parchetto Condiviso, via Casilina Vecchia 124, Roma" />
        </div>
        <div className={styles.Luoghi}>
          <p>adresse 1, adresse 2</p>
          <p>adresse 3, adresse 4</p>
          <p>adresse 5, adresse6</p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            Giornata di studi sulla figura di DON ROBERTO SARDELLI con
            l’inaugurazione di un monumento a lui dedicato. DON ROBERTO SARDELLI
            è stato un sacerdote chiave per il riscatto delle condizioni di vita
            degli abitanti del mandrione e dell’acquedotto Felice. DON SARDELLI
            arrivò alla fine degli anni sessanta in questa area degradata di
            roma, occupandosi concretamente dei disagi dei baraccati, dando vita
            a una scuola profondamente innovativa e attivando
            l’approvvigionamento dell’acqua.
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artista: ALFREDO PIRRI, autore dell’opera. <br></br>
            Curatrice: ADRIANA POLVERONI, docente presso NABA.<br></br>
            Relatori giornata di studi: ASCANIO CELESTINI, autore e attore.
            <br></br> MASSIMILIANO FIORUCCI, magnifico rettore dell’università
            Roma tre. <br></br>VANESSA ROGHI, storica della scuola e
            dell’educazione.<br></br>Pubblico di riferimento: bambini, adulti,
            tutti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programma;

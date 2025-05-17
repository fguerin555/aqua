// /Users/fredericguerin/Desktop/aqua/src/pages/ProgrammaFile/Programma.js
import React from "react";
import styles from "./Programma.module.css";
import Logo from "../../assets/images/Logo.jpg";
import fontana from "../../assets/images/fontana.png";
import parchetto from "../../assets/images/parchetto.png";
import backgroundVideo from "../../assets/images/AcquaBackground.mp4"; // Importation de la vidéo

const Programma = () => {
  return (
    <div>
      <div className={styles.ProgrammaPage}>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src={backgroundVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
        <div className={styles.videoOverlay}></div>

        <div className={styles.ProgrammaPageContentA}>
          <p>Programma</p>
        </div>

        <div className={styles.Logo}>
          <img
            src={Logo}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
          />
        </div>
        <div className={styles.Appuntamento}>
          <p>APPUNTAMENTO 1</p>
        </div>
        <div className={styles.ProgrammaPageContentB}>
          <p>“Omaggio a Don Roberto Sardelli”</p>
          <p>Il 12/06/2025 dalle 11 alle 21</p>
          <p>INAUGURAZIONE MONUMENTO A DON SARDELLI</p>
          <p>
            (Fontana di Clemente XII e mura limitrofe, via del Mandrione 363)
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                "Fontana di Clemente XII, via del Mandrione 363, Roma"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              mappa
            </a>
            <div className={styles.Fontana}>
              <img
                src={fontana}
                alt="Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma"
              />
            </div>
          </p>
          <p>
            INCONTRO/GIORNATA DI STUDI (Parchetto Condiviso di via Casilina
            Vecchia 124, Municipio VII)
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                "Parchetto Condiviso, via Casilina Vecchia 124, Roma"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              mappa
            </a>
            <div className={styles.Parchetto}>
              <img
                src={parchetto}
                alt="Parchetto condiviso del Mandrione, via Casalina Vecchia 124, Roma"
              />
            </div>
          </p>{" "}
          <p> AMBITO TEMATICO: ARTE, RELIGIONE, INCLUSIONE SOCIALE</p>
          <p>
            {" "}
            Giornata di studi sulla figura di DON ROBERTO SARDELLI con
            l’inaugurazione di un monumento a lui dedicato. DON ROBERTO SARDELLI
            è stato un sacerdote chiave per il riscatto delle condizioni di vita
            degli abitanti del mandrione e dell’acquedotto Felice. DON SARDELLI
            arrivò alla fine degli anni sessanta in questa area degradata di
            roma, occupandosi concretamente dei disagi dei baraccati, dando vita
            a una scuola profondamente innovativa e attivando
            l’approvvigionamento dell’acqua.
          </p>
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

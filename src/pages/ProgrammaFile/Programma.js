// /Users/fredericguerin/Desktop/aqua/src/pages/ProgrammaFile/Programma.js
import React from "react";
import styles from "./Programma.module.css";
import Logo from "../../assets/images/LogoEssai3.jpg";
import fontana from "../../assets/images/fontana.png";
import parchetto from "../../assets/images/parchetto.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";
import MapButton from "../../components/MapButton";

const Programma = () => {
  return (
    <div>
      <div className={styles.ProgrammaPage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt="Acqua di fiume con riflessi di luce" />
        </div>

        <div className={styles.ProgrammaPageTitle}>
          <p>PROGRAMMA</p>
        </div>

        <div className={styles.Logo}>
          <img
            src={Logo}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
          />
        </div>

        <div className={styles.Appuntamento}>
          <p>Appuntamento 1</p>
        </div>

        <div className={styles.ProgrammaPageContentB}>
          <p>
            “OMAGGIO A DON ROBERTO SARDELLI” <br></br>Il 12/06/2025 dalle 11
            alle 21 - Inaugurazione del monumento a Don Sardelli
          </p>

          <div className={styles.Fontana}>
            <img
              src={fontana}
              alt="Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma"
            />
          </div>
          <div className={styles.FontanaFotoText}>
            <p>
              (Fontana di Clemente XII e mura limitrofe, via del Mandrione 363)
              {"   "}
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <MapButton mapQuery="Fontana di Clemente XII, via del Mandrione 363, Roma" />
          </div>

          <p>INCONTRO/GIORNATA DI STUDI</p>
          <div className={styles.Parchetto}>
            <img
              src={parchetto}
              alt="Parchetto condiviso del Mandrione, via Casalina Vecchia 124, Roma"
            />
            <div className={styles.ParchettoFotoText}>
              <p>
                (Parchetto Condiviso di via Casilina Vecchia 124, Municipio VII)
                {"   "}
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <MapButton mapQuery="Parchetto Condiviso, via Casilina Vecchia 124, Roma" />
            </div>
            <div className={styles.ParchettoText}>
              <p>
                Giornata di studi sulla figura di DON ROBERTO SARDELLI con
                l’inaugurazione di un monumento a lui dedicato. DON ROBERTO
                SARDELLI è stato un sacerdote chiave per il riscatto delle
                condizioni di vita degli abitanti del mandrione e
                dell’acquedotto Felice. DON SARDELLI arrivò alla fine degli anni
                sessanta in questa area degradata di roma, occupandosi
                concretamente dei disagi dei baraccati, dando vita a una scuola
                profondamente innovativa e attivando l’approvvigionamento
                dell’acqua.
              </p>
              <div className={styles.ParchettoText2}>
                <p>
                  Artista: ALFREDO PIRRI, autore dell’opera. <br></br>
                  Curatrice: ADRIANA POLVERONI, docente presso NABA.<br></br>
                  Relatori giornata di studi: ASCANIO CELESTINI, autore e
                  attore.
                  <br></br> MASSIMILIANO FIORUCCI, magnifico rettore
                  dell’università Roma tre. <br></br>VANESSA ROGHI, storica
                  della scuola e dell’educazione.<br></br>Pubblico di
                  riferimento: bambini, adulti, tutti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programma;

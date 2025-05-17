// src/pages/ProgrammaFile/Programma.js
import React from "react";
import styles from "./Programma.module.css";
import Logo from "../../assets/images/Logo.jpg";

const Programma = () => {
  return (
    <div>
      <div className={styles.ProgrammaPage}>
        <div className={styles.ProgrammaPageContentA}>
          <p>Programma</p>
        </div>

        <div className={styles.Logo}>
          <img
            src={Logo}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
          />
        </div>
        <div className={styles.ProgrammaPageContentB}>
          <p>APPUNTAMENTO 1</p>
          <p>“Omaggio a Don Roberto Sardelli”</p>
          <p>Il 12/06/2025 dalle 11 alle 21</p>
          <p>INAUGURAZIONE MONUMENTO A DON SARDELLI</p>
          <p>
            {" "}
            (Fontana di Clemente XII e mura limitrofe, via del Mandrione 363)
          </p>
          <p>
            INCONTRO/GIORNATA DI STUDI (Parchetto Condiviso di via Casilina
            Vecchia 124, Municipio VII)
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

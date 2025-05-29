// /Users/fredericguerin/Desktop/aqua/src/pages/NewProgrammaFile/NewProgramma.js
import React from "react";
import styles from "./NewProgramma.module.css";
import MapButton from "../../components/MapButton";
import fontana from "../../assets/images/fontana.png";
import parchetto from "../../assets/images/parchetto.png";
import parcoTorredelFiscale from "../../assets/images/ParcodiTorredelFiscale.png";
import piazzadeiTribuni from "../../assets/images/PiazzadeiTribuni.png";
import VilladeSanctis from "../../assets/images/VilladeSanctis.png";
import GiardinodeiCiliegi from "../../assets/images/GiardinodeiCiliegi.png";
import Logo from "../../assets/images/LogoBlue.jpg";
import simbolmapp from "../../assets/images/simbolmapp.png";
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
          <p>Omaggio a Don Roberto Sardelli</p>
        </div>

        <div className={styles.Orari}>
          <p> Il 12 Luglio 2025 dalle 11.00 alle 21.00</p>
        </div>

        <div className={styles.Luoghi}>
          <p>Parchetto Condiviso, via Casilina Vecchia 124, Roma.</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={parchetto}
            alt="Parchetto Condiviso, via Casilina Vecchia 124, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Parchetto Condiviso, via Casilina Vecchia 124, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.NameAppuntamento}>
          <p>Inaugurazione del monumento a Don Roberto Sardelli</p>
        </div>
        <div className={styles.Orari}>
          <p> Il 16 Settembre 2025 dalle 18.00 alle 21.00</p>
        </div>
        <div className={styles.Luoghi}>
          <p>Fontana di Clemente XII via del Mandrione 363, Roma</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={fontana}
            alt="Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Fontana di Clemente XII e mura limitrofe via del Mandrione 363, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
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
            tutti.<br></br> Accesso libero.
          </p>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>Appuntamento 2</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>L'acqua in movimento</p>
        </div>

        <div className={styles.Orari}>
          <p> Il 9/10 Luglio 2025 e 18/19 Luglio 2025 dalle 21.00 in poi</p>
        </div>

        <div className={styles.Luoghi}>
          <p>Parco di Torre del Fiscale, Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={parcoTorredelFiscale}
            alt="Parco di Torre del Fiscale, Via dell' Acquedotto Felice 120, Roma "
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via dell' Acquedotto Felice, 120, 00174 Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>Parchetto Condiviso, via Casilina Vecchia 124, Roma.</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={parchetto}
            alt="Parchetto Condiviso, via Casilina Vecchia 124, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Parchetto Condiviso, via Casilina Vecchia 124, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>Piazza dei Tribuni. Municipio VII, Roma</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={piazzadeiTribuni}
            alt="Piazza dei Tribuni, Municipio VII, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Piazza dei Tribuni. Municipio VII, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>Villa de Sanctis via dei Gordiani 5, Roma</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VilladeSanctis}
            alt="Villa de Sanctis via dei Gordiani 5, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Villa de Sanctis via dei Gordiani 5, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p> Giardino Dei Ciliegi, via Filippo Re, Roma</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={GiardinodeiCiliegi}
            alt=" Giardino Dei Ciliegi, via Filippo Re, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery=" Giardino Dei Ciliegi, via Filippo Re, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.EventDescription}>
          <p>
            Spettacolo, Incontro, Installazione, Video. Proiezioni di video di
            artisti italiani e stranieri sull tema dell'acqua attraverso una
            lente estetica ed ambiantale .
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artisti: FABRIZIO PLESSI <br></br>ROBER CAHEN <br></br> STUDIO
            AZZURO <br></br>
            Curatore: BRUNO DI MARINO.<br></br>Pubblico di riferimento: bambini,
            adulti, tutti.<br></br> Accesso libero.
          </p>
        </div>
      </div>{" "}
      {/* Fin de styles.ProgrammaPage */}
    </div>
  );
};

export default Programma;

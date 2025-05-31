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
import ParcoSangalli from "../../assets/images/ParcoSangalli.png";
import SpazioY from "../../assets/images/SpazioY.png";
import StudioGrecchi from "../../assets/images/StudioGrecchi.png";
import ComitatoMunicipioVII from "../../assets/images/ComitatoMunicipioVII.png";
import IstitutoAnnaFraentzel from "../../assets/images/IstitutoAnnaFraentzel.png";
import ViaCasalinaVecchia19 from "../../assets/images/ViaCasalinaVecchia19.png";
import ViaCasalinaVecchia115 from "../../assets/images/ViaCasalinaVecchia115.png";
import ViadellAcquaFelice from "../../assets/images/ViadellAcquaFelice.png";
import ViadelAcquedottoFelice from "../../assets/images/ViadelAcquedottoFelice.png";
import VicolodellAcquedottoFelice from "../../assets/images/ViadiTorreBranca.png";
import ViadiTorreBranca from "../../assets/images/VicolodellAcquedottoFelice.png";
import ViaFilippoRe from "../../assets/images/ViaFilippoRe.png";
import PianoBi from "../../assets/images/PianoBi.png";
import VialedellAcquedottoAlessandrino from "../../assets/images/VialedellAcquedottoAlessandrino.png";
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
          <p>APPUNTAMENTO 1</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>Omaggio a Don Roberto Sardelli</p>
        </div>
        <div className={styles.Orari}>
          <p> Il 12 Luglio 2025 dalle 11.00 alle 21.00</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>Inaugurazione del monumento a Don Roberto Sardelli</p>
        </div>
        <div className={styles.Orari}>
          <p> Il 16 Settembre 2025 dalle 18.00 alle 21.00</p>
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
        <div className={styles.TitleAppuntamento}>
          <p>APPUNTAMENTO 2</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>L'acqua in movimento</p>
        </div>
        <div className={styles.Orari}>
          <p> Il 9/10 Luglio 2025 e 18/19 Luglio 2025 dalle 21.00 in poi</p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            Spettacolo,Incontro,Installazione, Video. Proiezioni di video di
            artisti italiani e stranieri sull tema dell'acqua attraverso una
            lente estetica ed ambiantale .
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artisti: FABRIZIO PLESSI <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ROBERT CAHEN <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STUDIO AZZURO
            <br></br>
            Curatore: BRUNO DI MARINO.<br></br>Pubblico di riferimento: bambini,
            adulti, tutti.<br></br> Accesso libero.
          </p>
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
            <MapButton mapQuery="Parco di Torre del Fiscale, Via dell' Acquedotto Felice 120, Roma">
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
        <div className={styles.Luoghi}>
          <p>
            {" "}
            Parco Sangalli, viale dell’Acquedotto Alessandrino Municipio V, Roma
          </p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ParcoSangalli}
            alt="Parco Sangalli, viale dell’Acquedotto Alessandrino Municipio V, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Parco Sangalli, viale dell’Acquedotto Alessandrino Municipio V, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p> Spazio Y, via dei Juvenci 11, Roma</p>
        </div>
        <div className={styles.Foto}>
          <img src={SpazioY} alt="Spazio Y, via dei Juvenci 11, Roma" />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Spazio Y, via dei Juvenci 11, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>
            {" "}
            Studio Grechi/Pacchiarotti Via dei Corneli 24, Municipio V, Roma
          </p>
        </div>
        <div className={styles.Foto}>
          <img
            src={StudioGrecchi}
            alt="Studio Grechi/Pacchiarotti Via dei Corneli 24, Municipio V, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via dei Corneli 24, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>APPUNTAMENTO 3</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>I Portatori d'Acqua</p>
        </div>
        <div className={styles.Orari}>
          <p> Il 17/09/2025 dalle 18 in poi e 25/09/2025 dalle 18 in poi</p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            Performance, Mostra/Installazione. Circolazione per le vie indicate
            del Municipio VII di un’autobotte che trasmette pensieri, desideri,
            vissuti e altro raccolti dagli abitanti del quartiere dall’artista
            Iginio De Luca. Mostra/restituzione di performance, di disegno
            acquatico di Pamela Pintus
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artisti: IGINIO DE LUCA <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAMELA PINTUS <br></br>
            Curatrice: ADRIANA POLVERONI.
            <br></br>Pubblico di riferimento: bambini, adulti, tutti.
            <br></br> Accesso libero.
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>via Casilina Vecchia 19,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViaCasalinaVecchia19}
            alt="via Casilina Vecchia 19, Roma "
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="via Casilina Vecchia 19, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Via Casalina Vecchia 115,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViaCasalinaVecchia115}
            alt=" Via Casalina Vecchia 115,Roma."
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via Casalina Vecchia 115,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Villa de Sanctis, via dei Giordiani 5,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VilladeSanctis}
            alt="Villa de Sanctis, via dei Giordiani 5,Roma."
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="via dei Giordiani 5,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Via dell’Acqua Felice,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img src={ViadellAcquaFelice} alt="Via dell’Acqua Felice,Roma." />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via dell’Acqua Felice,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Via dell'Acquedotto Felice,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViadelAcquedottoFelice}
            alt="Via dell'Acquedotto Felice,Roma."
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via dell'Acquedotto Felice,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Vicolo dell'Acquedotto Felice,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VicolodellAcquedottoFelice}
            alt="Vicolo dell'Acquedotto Felice,Roma."
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Vicolo dell'Acquedotto Felice,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Via di Torre Branca, Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img src={ViadiTorreBranca} alt="Via di Torre Branca, Roma.." />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via di Torre Branca, Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Parco di Torre del Fiscale, Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={parcoTorredelFiscale}
            alt="Parco di Torre del Fiscale, Roma."
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Parco di Torre del Fiscale, Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>APPUNTAMENTO 4</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>Dalla Pittura en Plein Air all' Arte Artificiale</p>
        </div>
        <div className={styles.Orari}>
          <p>
            {" "}
            Il 08/07/2025,11/09/2025 dalle 15 in poi e 18/09/2025,25/09/2025
            dalle 15 in poi
          </p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            Artisti che hanno i loro studi nei municipi V e VII e che sono
            riuniti in associazioni culturali danno vita ad atelier di pittura
            en plein air aperti alla cittadinanza locale. Queste iniziative si
            interfacceranno con sessioni di inteligenza artificiale creando
            ambienti immersivi che consentono l’interazione del pubblico.
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artisti: GIULIA APICE <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAOLO ASSENZA <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MATTEO BASILÉ
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MARTINA CIRESE
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LUCA GRECHI <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ALFREDO PIRRI
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MADDALENA SCUDERONI
            <br></br> Curatrice: ADRIANA POLVERONI.
            <br></br>Pubblico di riferimento: bambini, adulti, tutti.
            <br></br> Accesso libero.
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>Piazza dei Tribuni, Municipio VII,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={piazzadeiTribuni}
            alt="Piazza dei Tribuni, Municipio VII,Roma."
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Piazza dei Tribuni,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Parchetto condiviso del Mandrione ,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img src={parchetto} alt="archetto condiviso del Mandrione ,Roma." />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="archetto condiviso del Mandrione ,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Giardino dei Ciliegi ,Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img src={GiardinodeiCiliegi} alt="Giardino dei Ciliegi ,Roma." />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Giardino dei Ciliegi ,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Via Filippo Re, Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img src={ViaFilippoRe} alt="Via Filippo Re,Roma." />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via Filippo Re,Roma.">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Parco Sangalli, Roma.</p>
        </div>
        <div className={styles.Foto}>
          <img src={ParcoSangalli} alt="Parco Sangalli, Roma" />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Parco Sangalli, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>Viale dell'Acquedotto Alessandrino, Roma</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VialedellAcquedottoAlessandrino}
            alt="Viale dell'Acquedotto Alessandrino, Roma"
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Viale dell'Acquedotto Alessandrino, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>Appuntamento 5</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>L'Arte in una Stanza</p>
        </div>
        <div className={styles.Orari}>
          <p>
            {" "}
            Il 19/26 Settembre 2025 e 3/10 Ottobre 2025 dalle 14.30 alle 18.30
          </p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            Laboratorio, Incontro, Arte, Incluzione Sociale. Laboratori d'Arte
            per ciechi, ipovedenti e vedenti; alcune scuole dei municipi IV e
            VII ospiteranno dei laboratori di terracotta, video, fumetto e
            fotografia condotti da artisti che hanno i propri studi tra il
            municipio IV e VII. A conclusione dell’esperienza formativa si
            prevede una o più giornate di visite presso i sudetti studi aperti
            anche alla cittadinanza.
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artisti: IRMA ALONZO <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GIULIA APICE
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAOLO ASSENZA
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LUCA GRECCHI
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRISTIANA PACCHIAROTTI
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MADDALENA SCUDERONI
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GERMANO SERAFINI
            <br></br>Curatrici: IRMA ALONZO ed ADRIANA POLVERONI.<br></br>
            Pubblico di riferimento: bambini, adulti, tutti.
            <br></br> Accesso libero.
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>
            Sede Comitato di Quartiere Municipio VII,Via Angelica Balabanoff 60,
            Roma.
          </p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ComitatoMunicipioVII}
            alt="Sede Comitato di Quartiere Municipio VII,Via Angelica Balabanoff 60, Roma "
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via Angelica Balabanoff 60, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>
            Istituto Compresivo "Anna Fraentzel Celli",Via dei Fiorentini 48,
            Roma.
          </p>
        </div>

        <div className={styles.Foto}>
          <img
            src={IstitutoAnnaFraentzel}
            alt="Istituto Compresivo - Anna Fraentzel Celli - Via dei Fiorentini 48, Roma"
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via dei Fiorentini 48, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.TitleAppuntamento}>
          <p>Appuntamento 6</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>La Bellezza dell'Acqua</p>
        </div>

        <div className={styles.Orari}>
          <p>
            {" "}
            Il 02/07/2025, 07/07/2025 e 31/07/2025, INAUGURAZIONE ore 19.00
          </p>
          <p>
            {" "}
            Il 03/10/2025, 30/10/2025 e 31/10/2025, INAUGURAZIONE ore 19.00
          </p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            Realizzazione di opere che hanno per tema l’acqua e la sua
            sostenibilità.
            <br></br>L'opera di Paolo Assenza consiste una fontana che si attiva
            durante le ore notturne attraverso la captazione delle particelle
            d’acqua presenti nell’umidità dell’aria e che gocciano attraverso il
            foro sull’elemento in pietra posto alla sua base, cadendo
            costantemente sul basamento ne modica nel tempo e l’aspetto della
            superficie.
            <br></br>
            L’artista Mercedes Klausner, ospitata in residenza da progetto
            Pianobi, realizzerà un’opera utilizzando della polvere ricavata dai
            detriti dei vecchi mattoni delle case distrutte, recuperati ai piedi
            dell’acquedotto felice. Tale intervento darà luogo a delle opere
            capaci di produrre delle immagini che saranno proiettate sui muri di
            progetto Pianobi in via dei ciceri 99.
            <br></br>
            Laurent le Deunff, durante la sua residenza presso la sede operativa
            di Pianobi, realizzerà una fontana dalla forma zoomorfa. L'opera
            sarà fruibile ad un pubblico disparato di addetti ai lavori e non
            solo, tra cui i pellegrini giunti a Roma in occasione del giubileo.
            I visitatori saranno invitati ad esprimere un loro auguro personale
            attraverso il rituale gesto di lancio nella fontana una delle monete
            realizzate
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            Artisti: PAOLO ASSENZA <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MERCEDES KLAUSNER
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LAURENT LE DEUNFF
            <br></br>Curatrici: ADRIANA POLVERONI, ISABELLA VALENTE.
            <br></br>Pubblico di riferimento: bambini, adulti, tutti.
            <br></br> Accesso libero.
          </p>
        </div>

        <div className={styles.Luoghi}>
          <p>
            Parco di Torre del Fiscale, Via dell' Acquedotto Felice 120, Roma.
          </p>
        </div>

        <div className={styles.Foto}>
          <img
            src={parcoTorredelFiscale}
            alt="Parco di Torre del Fiscale, Via dell' Acquedotto Felice 120, Roma"
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Parco di Torre del Fiscale, Via dell' Acquedotto Felice 120, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>PROGETTO PIANOBI, Via dei Ciceri, 97-99, Roma.</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={PianoBi}
            alt="PROGETTO PIANOBI, Via dei Ciceri, 97-99, Roma"
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery="Via dei Ciceri 97/99, Roma">
              <img src={simbolmapp} alt="Simbolo indicazione mappa" />
            </MapButton>
          </div>
        </div>
      </div>{" "}
      {/* Fin de styles.ProgrammaPage */}
    </div>
  );
};

export default Programma;

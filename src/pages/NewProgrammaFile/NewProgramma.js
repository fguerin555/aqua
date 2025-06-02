// /Users/fredericguerin/Desktop/aqua/src/pages/NewProgrammaFile/NewProgramma.js
import React from "react";
import { useTranslation, Trans } from "react-i18next";
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
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
import simbolmapp from "../../assets/images/simbolmapp.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const Programma = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.ProgrammaPage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />{" "}
          {/* Réutilisation */}
        </div>
        <div className={styles.ProgrammaPageTitle}>
          <p>{t("program.pageTitle")}</p>
        </div>
        <div className={styles.Logo}>
          <img
            src={Logo}
            alt={t("navbar.logoAlt")} // Réutilisation
          />
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment1.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment1.name1")}</p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment1.time1")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment1.name2")}</p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment1.time2")}</p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment1.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans i18nKey="program.appointment1.artistList">
              Artista: ALFREDO PIRRI, autore dell’opera. <br />
              Curatrice: ADRIANA POLVERONI, docente presso NABA.
              <br />
              Relatori giornata di studi: ASCANIO CELESTINI, autore e attore.
              <br /> MASSIMILIANO FIORUCCI, magnifico rettore dell’università
              Roma tre. <br />
              VANESSA ROGHI, storica della scuola e dell’educazione.
              <br />
              Pubblico di riferimento: bambini, adulti, tutti.
              <br /> Accesso libero.
            </Trans>
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment1.location1.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={parchetto}
            alt={t("program.appointment1.location1.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment1.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment1.location2.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={fontana}
            alt={t("program.appointment1.location2.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment1.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment2.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment2.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment2.time")}</p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment2.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans i18nKey="program.appointment2.artistList">
              Artisti: FABRIZIO PLESSI <br />
              ROBERT CAHEN <br />
              STUDIO AZZURO
              <br />
              Curatore: BRUNO DI MARINO.
              <br />
              Pubblico di riferimento: bambini, adulti, tutti.
              <br /> Accesso libero.
            </Trans>
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location1.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={parcoTorredelFiscale}
            alt={t("program.appointment2.location1.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location2.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={piazzadeiTribuni}
            alt={t("program.appointment2.location2.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location3.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VilladeSanctis}
            alt={t("program.appointment2.location3.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location3.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location4.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={GiardinodeiCiliegi}
            alt={t("program.appointment2.location4.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location4.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location5.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ParcoSangalli}
            alt={t("program.appointment2.location5.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location5.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location6.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={SpazioY}
            alt={t("program.appointment2.location6.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location6.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment2.location7.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={StudioGrecchi}
            alt={t("program.appointment2.location7.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment2.location7.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment3.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment3.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment3.time")}</p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment3.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans i18nKey="program.appointment3.artistList">
              Artisti: IGINIO DE LUCA <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAMELA PINTUS <br />
              Curatrice: ADRIANA POLVERONI.
              <br />
              Pubblico di riferimento: bambini, adulti, tutti.
              <br /> Accesso libero.
            </Trans>
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location1.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViaCasalinaVecchia19}
            alt={t("program.appointment3.location1.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location2.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViaCasalinaVecchia115}
            alt={t("program.appointment3.location2.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location3.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VilladeSanctis}
            alt={t("program.appointment3.location3.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location3.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location4.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViadellAcquaFelice}
            alt={t("program.appointment3.location4.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location4.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location5.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViadelAcquedottoFelice}
            alt={t("program.appointment3.location5.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location5.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location6.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VicolodellAcquedottoFelice}
            alt={t("program.appointment3.location6.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location6.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location7.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViadiTorreBranca}
            alt={t("program.appointment3.location7.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location7.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location8.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={parcoTorredelFiscale}
            alt={t("program.appointment3.location8.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location8.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment4.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment4.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment4.time")}</p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment4.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans i18nKey="program.appointment4.artistList">
              Artisti: GIULIA APICE <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAOLO ASSENZA <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MATTEO BASILÉ
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MARTINA CIRESE
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LUCA GRECHI <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ALFREDO PIRRI
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MADDALENA SCUDERONI
              <br /> Curatrice: ADRIANA POLVERONI.
              <br />
              Pubblico di riferimento: bambini, adulti, tutti.
              <br /> Accesso libero.
            </Trans>
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment4.location1.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={piazzadeiTribuni}
            alt={t("program.appointment4.location1.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment4.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment4.location2.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={parchetto}
            alt={t("program.appointment4.location2.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment4.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment4.location3.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={GiardinodeiCiliegi}
            alt={t("program.appointment4.location3.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment4.location3.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment4.location4.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ViaFilippoRe}
            alt={t("program.appointment4.location4.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment4.location4.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment4.location5.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ParcoSangalli}
            alt={t("program.appointment4.location5.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment4.location5.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment4.location6.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={VialedellAcquedottoAlessandrino}
            alt={t("program.appointment4.location6.imageAlt")}
          />
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment4.location6.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment5.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment5.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment5.time")}</p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment5.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans i18nKey="program.appointment5.artistList">
              Artisti: IRMA ALONZO <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GIULIA APICE
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAOLO ASSENZA
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LUCA GRECCHI
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRISTIANA PACCHIAROTTI
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MADDALENA SCUDERONI
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GERMANO SERAFINI
              <br />
              Curatrici: IRMA ALONZO ed ADRIANA POLVERONI.
              <br />
              Pubblico di riferimento: bambini, adulti, tutti.
              <br /> Accesso libero.
            </Trans>
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment5.location1.name")}</p>
        </div>
        <div className={styles.Foto}>
          <img
            src={ComitatoMunicipioVII}
            alt={t("program.appointment5.location1.imageAlt")}
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment5.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>{t("program.appointment5.location2.name")}</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={IstitutoAnnaFraentzel}
            alt={t("program.appointment5.location2.imageAlt")}
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment5.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>

        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment6.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment6.name")}</p>
        </div>

        <div className={styles.Orari}>
          <p>{t("program.appointment6.time1")}</p>
          <p>{t("program.appointment6.time2")}</p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            <Trans i18nKey="program.appointment6.description">
              Realizzazione di opere che hanno per tema l’acqua e la sua
              sostenibilità.
              <br />
              L'opera di Paolo Assenza consiste una fontana che si attiva
              durante le ore notturne attraverso la captazione delle particelle
              d’acqua presenti nell’umidità dell’aria e che gocciano attraverso
              il foro sull’elemento in pietra posto alla sua base, cadendo
              costantemente sul basamento ne modica nel tempo e l’aspetto della
              superficie.
              <br />
              L’artista Mercedes Klausner, ospitata in residenza da progetto
              Pianobi, realizzerà un’opera utilizzando della polvere ricavata
              dai detriti dei vecchi mattoni delle case distrutte, recuperati ai
              piedi dell’acquedotto felice. Tale intervento darà luogo a delle
              opere capaci di produrre delle immagini che saranno proiettate sui
              muri di progetto Pianobi in via dei ciceri 99.
              <br />
              Laurent le Deunff, durante la sua residenza presso la sede
              operativa di Pianobi, realizzerà una fontana dalla forma zoomorfa.
              L'opera sarà fruibile ad un pubblico disparato di addetti ai
              lavori e non solo, tra cui i pellegrini giunti a Roma in occasione
              del giubileo. I visitatori saranno invitati ad esprimere un loro
              auguro personale attraverso il rituale gesto di lancio nella
              fontana una delle monete realizzate
            </Trans>
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans i18nKey="program.appointment6.artistList">
              Artisti: PAOLO ASSENZA <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MERCEDES KLAUSNER
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LAURENT LE DEUNFF
              <br />
              Curatrici: ADRIANA POLVERONI, ISABELLA VALENTE.
              <br />
              Pubblico di riferimento: bambini, adulti, tutti.
              <br /> Accesso libero.
            </Trans>
          </p>
        </div>

        <div className={styles.Luoghi}>
          <p>{t("program.appointment6.location1.name")}</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={parcoTorredelFiscale}
            alt={t("program.appointment6.location1.imageAlt")}
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment6.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>

        <div className={styles.Luoghi}>
          <p>{t("program.appointment6.location2.name")}</p>
        </div>

        <div className={styles.Foto}>
          <img
            src={PianoBi}
            alt={t("program.appointment6.location2.imageAlt")}
          />

          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment6.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
      </div>{" "}
      {/* Fin de styles.ProgrammaPage */}
    </div>
  );
};

export default Programma;

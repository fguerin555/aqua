import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./NewProgramma.module.css";
import MapButton from "../../components/MapButton";
import ButtonCarousel from "../../components/ButtonCarrousel";

import Apice1 from "../../assets/images/Apice1.png";
import Apice2 from "../../assets/images/Apice2.png";
import Apice3 from "../../assets/images/Apice3.png";

import Lorenza1 from "../../assets/images/Lorenza1.png";
import Lorenza2 from "../../assets/images/Lorenza2.png";
import LorenzaCVI from "../../assets/images/LorenzaCVI.png";
import LorenzaCVE from "../../assets/images/LorenzaCVE.png";
import LorenzaCVF from "../../assets/images/LorenzaCVF.png";

import CristianaP1 from "../../assets/images/CristianaP1.png";
import CristianaP2 from "../../assets/images/CristianaP2.png";
import CristianaP3 from "../../assets/images/CristianaP3.png";
import CristianaP4 from "../../assets/images/CristianaP4.png";
import CristianaP5 from "../../assets/images/CristianaP5.png";
import CristianaP6 from "../../assets/images/CristianaP6.png";

import Madscud1 from "../../assets/images/Madscud1.png";
import Madscud2 from "../../assets/images/Madscud2.png";
import Madscud3 from "../../assets/images/Madscud3.png";

import Pirri1 from "../../assets/images/Pirri1.png";
import Pirri2 from "../../assets/images/Pirri2.png";
import Pirri0 from "../../assets/images/Pirri0.png";

import Logo from "../../assets/images/LogoOndaBlue2.png";
import simbolmapp from "../../assets/images/simbolmapp.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const Programma = () => {
  const { t } = useTranslation();
  const giuliaApiceImages = [
    { src: Apice1, alt: "" },
    { src: Apice2, alt: "" },
    { src: Apice3, alt: "" },
  ];
  const maddalenaScuderoniImages = [
    { src: Madscud1, alt: "" },
    { src: Madscud2, alt: "" },
    { src: Madscud3, alt: "" },
  ];
  const lorenzaRicciImages = [
    { src: Lorenza1, alt: "" },
    { src: Lorenza2, alt: "" },
    { src: LorenzaCVI, alt: "" },
    { src: LorenzaCVE, alt: "" },
    { src: LorenzaCVF, alt: "" },
  ];
  const cristianaPacchiarottiImages = [
    { src: CristianaP1, alt: "" },
    { src: CristianaP2, alt: "" },
    { src: CristianaP3, alt: "" },
    { src: CristianaP4, alt: "" },
    { src: CristianaP5, alt: "" },
    { src: CristianaP6, alt: "" },
  ];
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
          <p>
            <Trans
              i18nKey="program.appointment1.description"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans
              i18nKey="program.appointment1.artistList"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment1.location1.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment1.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Foto}>
          <img
            src={Pirri1}
            alt={t("program.appointment1.location1.imageAlt")}
          />
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment1.location1.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment1.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.FotoV}>
          <img
            src={Pirri0}
            alt={t("program.appointment1.location1.imageAlt")}
          />
        </div>
        {/* ----------------------------------------------------2-------------- */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment2.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment2.name")}</p>
        </div>
        <div className={styles.EventDescriptionShort}>
          <p>{t("program.appointment2.description")}</p>
        </div>
        <div className={styles.Orari}>
          <p>
            {/* On utilise Trans pour interpréter le HTML dans la clé 'time' */}
            <Trans
              i18nKey="program.appointment2.time"
              components={{
                br: <br />,
                map1: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment2.location1.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
                map2: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment2.location2.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
                map3: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment2.location3.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            {/* On utilise Trans pour interpréter les <br/> de la liste d'artistes */}
            <Trans
              i18nKey="program.appointment2.artistList"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        {/* ------------------------------------------------3------------------ */}
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
          <p>
            <Trans
              i18nKey="program.appointment3.description"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans
              i18nKey="program.appointment3.artistList"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location1.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location2.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location3.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location3.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location4.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location4.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location5.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location5.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location6.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location6.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location7.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location7.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment3.location8.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location8.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        {/* -----------------------------------------------4------------------- */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment4.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment4.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>
            {" "}
            <Trans
              i18nKey="program.appointment4.time"
              components={{
                br: <br />,
                map1: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment4.location1.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
                map2: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment4.location2.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment4.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans
              i18nKey="program.appointment4.artistList"
              components={{
                br: <br />,
                carousel_giulia: <ButtonCarousel images={giuliaApiceImages} />,
                carousel_maddalena: (
                  <ButtonCarousel images={maddalenaScuderoniImages} />
                ),
              }}
            />
          </p>
        </div>

        {/* ------------------------------------------------5------------------ */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment5.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment5.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>
            <Trans
              i18nKey="program.appointment5.time1"
              components={{
                br: <br />,
                map1: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment5.location1.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <div className={styles.Orari}>
          <p>
            <Trans
              i18nKey="program.appointment5.time2"
              components={{
                br: <br />,
                map2: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment5.location2.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <div className={styles.Orari}>
          <p>
            <Trans
              i18nKey="program.appointment5.time3"
              components={{
                br: <br />,
                map3: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment5.location3.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <div className={styles.Orari}>
          <p>
            <Trans
              i18nKey="program.appointment5.time4"
              components={{
                br: <br />,
                map4: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment5.location4.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <div className={styles.EventDescription}>
          <p>{t("program.appointment5.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans
              i18nKey="program.appointment5.artistList"
              components={{
                br: <br />,
                carousel_lorenza: (
                  <ButtonCarousel images={lorenzaRicciImages} />
                ),
                carousel_cristiana: (
                  <ButtonCarousel images={cristianaPacchiarottiImages} />
                ),
              }}
            />
          </p>
        </div>
        {/* ---------------------------------------------------6--------------- */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment6.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment6.name")}</p>
        </div>
        <div className={styles.Orari}>
          <p>
            <Trans
              i18nKey="program.appointment6.time1"
              components={{ br: <br /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="program.appointment6.time2"
              components={{ br: <br /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="program.appointment6.time3"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.EventDescription}>
          <p>
            <Trans
              i18nKey="program.appointment6.description"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans
              i18nKey="program.appointment6.artistList"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment6.location1.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment6.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <p>{t("program.appointment6.location2.name")}</p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment6.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        {/* ---------------------------------------------------7--------------- */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment7.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>
            <Trans> {t("program.appointment7.name")}</Trans>
          </p>
        </div>
        <div className={styles.Orari}>
          <p>{t("program.appointment7.time1")}</p>
        </div>
        <div className={styles.EventDescriptionShort}>
          <p>{t("program.appointment7.description")}</p>
        </div>
        <div className={styles.ArtistList}>
          <p>
            <Trans
              i18nKey="program.appointment7.artistList"
              components={{ br: <br /> }}
            />
          </p>
        </div>
        <div className={styles.Luoghi}>
          <p>
            <Trans> {t("program.appointment7.location1.name")}</Trans>
          </p>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment7.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Foto}>
          <img
            src={Pirri2}
            alt={t("program.appointment7.location1.imageAlt")}
          />
        </div>
      </div>
    </div>
  );
};

export default Programma;

import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./NewProgramma.module.css";
import MapButton from "../../components/MapButton";
import ButtonCarousel from "../../components/ButtonCarrousel";

import Apice1 from "../../assets/images/Apice1.png";
import Apice2 from "../../assets/images/Apice2.png";
import Apice3 from "../../assets/images/Apice3.png";
import GiuliaACVI from "../../assets/images/GiuliaACVI.png";
import GiuliaACVE from "../../assets/images/GiuliaACVE.png";
import GiuliaACVF from "../../assets/images/GiuliaACVF.png";

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

import Giancarlo1 from "../../assets/images/Giancarlo1.png";
import Giancarlo2 from "../../assets/images/Giancarlo2.png";
import Giancarlo3 from "../../assets/images/Giancarlo3.png";
import Giancarlo4 from "../../assets/images/Giancarlo4.png";
import GiancarloCVI from "../../assets/images/GiancarloCVI.png";
import GiancarloCVE from "../../assets/images/GiancarloCVE.png";
import GiancarloCVF from "../../assets/images/GiancarloCVF.png";

import AlbertoB1 from "../../assets/images/AlbertoB1.png";
import AlbertoB2 from "../../assets/images/AlbertoB2.png";
import AlbertoBCVI from "../../assets/images/AlbertoBCVI.png";
import AlbertoBCVE from "../../assets/images/AlbertoBCVE.png";
import AlbertoBCVF from "../../assets/images/AlbertoBCVF.png";

import Davide1 from "../../assets/images/Davide1.png";
import Davide2 from "../../assets/images/Davide2.png";
import Davide3 from "../../assets/images/Davide3.png";
import Davide4 from "../../assets/images/Davide4.png";
import DavideCVI from "../../assets/images/DavideCVI.png";
import DavideCVE from "../../assets/images/DavideCVE.png";
import DavideCVF from "../../assets/images/DavideCVF.png";

import Madscud1 from "../../assets/images/Madscud1.png";
import Madscud2 from "../../assets/images/Madscud2.png";
import Madscud3 from "../../assets/images/Madscud3.png";
import MaddalenaCVI from "../../assets/images/MaddalenaCVI.png";
import MaddalenaCVE from "../../assets/images/MaddalenaCVE.png";
import MaddalenaCVF from "../../assets/images/MaddalenaCVF.png";

import LucaG1 from "../../assets/images/LucaG1.png";
import LucaGCVI from "../../assets/images/LucaGCVI.png";
import LucaGCVE from "../../assets/images/LucaGCVE.png";
import LucaGCVF from "../../assets/images/LucaGCVF.png";

import IrmaAlonzo1 from "../../assets/images/IrmaAlonzo1.png";
import IrmaAlonzo2 from "../../assets/images/IrmaAlonzo2.png";
import IrmaAlonzo3 from "../../assets/images/IrmaAlonzo3.png";
import IrmaAlonzo4 from "../../assets/images/IrmaAlonzo4.png";

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
    { src: GiuliaACVI, alt: "" },
    { src: GiuliaACVE, alt: "" },
    { src: GiuliaACVF, alt: "" },
  ];
  const maddalenaScuderoniImages = [
    { src: Madscud1, alt: "" },
    { src: Madscud2, alt: "" },
    { src: Madscud3, alt: "" },
    { src: MaddalenaCVI, alt: "" },
    { src: MaddalenaCVE, alt: "" },
    { src: MaddalenaCVF, alt: "" },
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
  const giancarloCaracuzzoImages = [
    { src: Giancarlo1, alt: "" },
    { src: Giancarlo2, alt: "" },
    { src: Giancarlo3, alt: "" },
    { src: Giancarlo4, alt: "" },
    { src: GiancarloCVI, alt: "" },
    { src: GiancarloCVE, alt: "" },
    { src: GiancarloCVF, alt: "" },
  ];
  const albertoBesiImages = [
    { src: AlbertoB1, alt: "" },
    { src: AlbertoB2, alt: "" },
    { src: AlbertoBCVI, alt: "" },
    { src: AlbertoBCVE, alt: "" },
    { src: AlbertoBCVF, alt: "" },
  ];
  const davideDiTollaImages = [
    { src: Davide1, alt: "" },
    { src: Davide2, alt: "" },
    { src: Davide3, alt: "" },
    { src: Davide4, alt: "" },
    { src: DavideCVI, alt: "" },
    { src: DavideCVE, alt: "" },
    { src: DavideCVF, alt: "" },
  ];
  const lucaGrechiImages = [
    { src: LucaG1, alt: "" },
    { src: LucaGCVI, alt: "" },
    { src: LucaGCVE, alt: "" },
    { src: LucaGCVF, alt: "" },
  ];
  const irmaAlonzoImages = [
    { src: IrmaAlonzo1, alt: "" },
    { src: IrmaAlonzo2, alt: "" },
    { src: IrmaAlonzo3, alt: "" },
    { src: IrmaAlonzo4, alt: "" },
  ];

  return (
    <div>
      <div className={styles.ProgrammaPage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
        </div>
        <div className={styles.ProgrammaPageTitle}>
          <p>{t("program.pageTitle")}</p>
        </div>
        <div className={styles.Logo}>
          <img src={Logo} alt={t("navbar.logoAlt")} />
        </div>
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment1.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment1.name1")}</p>
        </div>
        <div className={styles.Orari}>
          <div>{t("program.appointment1.time1")}</div>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment1.name2")}</p>
        </div>
        <div className={styles.Orari}>
          <div>
            <Trans
              i18nKey="program.appointment1.time2"
              components={{
                br: <br />,
                map1: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment1.location1.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.EventDescription}>
          <div>
            <Trans
              i18nKey="program.appointment1.description"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.ArtistList}>
          <div>
            <Trans
              i18nKey="program.appointment1.artistList"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment1.location1.name")}</div>
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
          <div>{t("program.appointment1.location1.name")}</div>
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
          <div>{t("program.appointment2.description")}</div>
        </div>
        <div className={styles.Orari}>
          <div>
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
          </div>
        </div>
        <div className={styles.ArtistList}>
          <div>
            <Trans
              i18nKey="program.appointment2.artistList"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        {/* ------------------------------------------------3------------------ */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment3.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment3.name")}</p>
        </div>
        <div className={styles.Orari}>
          <div>{t("program.appointment3.time")}</div>
        </div>
        <div className={styles.EventDescription}>
          <div>
            <Trans
              i18nKey="program.appointment3.description"
              components={{
                br: <br />,
                map9: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment3.location9.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.ArtistList}>
          <div>
            <Trans
              i18nKey="program.appointment3.artistList"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location1.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location2.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location2.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location3.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location3.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location4.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location4.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location5.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location5.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location6.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location6.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location7.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment3.location7.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment3.location8.name")}</div>
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
          <div>
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
          </div>
        </div>
        <div className={styles.EventDescription}>
          <div>{t("program.appointment4.description")}</div>
        </div>
        <div className={styles.ArtistList}>
          <div>
            <Trans
              i18nKey="program.appointment4.artistList"
              components={{
                br: <br />,
                carousel_giulia: <ButtonCarousel images={giuliaApiceImages} />,
                carousel_maddalena: (
                  <ButtonCarousel images={maddalenaScuderoniImages} />
                ),
                carousel_luca: <ButtonCarousel images={lucaGrechiImages} />,
              }}
            />
          </div>
        </div>

        {/* ------------------------------------------------5------------------ */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment5.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment5.name")}</p>
        </div>
        <div className={styles.Orari}>
          <div>
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
          </div>
        </div>
        <div className={styles.Orari}>
          <div>
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
          </div>
        </div>
        <div className={styles.Orari}>
          <div>
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
          </div>
        </div>
        <div className={styles.Orari}>
          <div>
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
          </div>
        </div>
        <div className={styles.EventDescription}>
          <div>{t("program.appointment5.description")}</div>
        </div>
        <div className={styles.ArtistList}>
          <div>
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
                carousel_giancarlo: (
                  <ButtonCarousel images={giancarloCaracuzzoImages} />
                ),
                carousel_alberto: <ButtonCarousel images={albertoBesiImages} />,
                carousel_davide: (
                  <ButtonCarousel images={davideDiTollaImages} />
                ),
                carousel_irma: <ButtonCarousel images={irmaAlonzoImages} />,
              }}
            />
          </div>
        </div>
        {/* ---------------------------------------------------6--------------- */}
        <div className={styles.TitleAppuntamento}>
          <p>{t("program.appointment6.sectionTitle")}</p>
        </div>
        <div className={styles.NameAppuntamento}>
          <p>{t("program.appointment6.name")}</p>
        </div>
        <div className={styles.Orari}>
          <div>
            <Trans
              i18nKey="program.appointment6.time1"
              components={{ br: <br /> }}
            />
          </div>
          <div>
            <Trans
              i18nKey="program.appointment6.time2"
              components={{ br: <br /> }}
            />
          </div>
          <div>
            <Trans
              i18nKey="program.appointment6.time3"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.EventDescription}>
          <div>
            <Trans
              i18nKey="program.appointment6.description"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.ArtistList}>
          <div>
            <Trans
              i18nKey="program.appointment6.artistList"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment6.location1.name")}</div>
          <div className={styles.SimbolMapp}>
            <MapButton mapQuery={t("program.appointment6.location1.mapQuery")}>
              <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
            </MapButton>
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>{t("program.appointment6.location2.name")}</div>
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
          <div>{t("program.appointment7.time1")}</div>
        </div>
        <div className={styles.EventDescriptionShort}>
          <div>{t("program.appointment7.description")}</div>
        </div>
        <div className={styles.ArtistList}>
          <div>
            <Trans
              i18nKey="program.appointment7.artistList"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.Luoghi}>
          <div>
            <Trans> {t("program.appointment7.location1.name")}</Trans>
          </div>
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

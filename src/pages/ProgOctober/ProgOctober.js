import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./ProgOctober.module.css";
import FotoPerformance from "../../components/FotoPerformance";
import ExpandableTransText from "../../components/ExpandableTransText";
import ComicBlock from "../../components/ComicBlock";
import MapButton from "../../components/MapButton";
import ButtonCarousel from "../../components/ButtonCarrousel";
import FromStation from "../../components/FromStation";
import Book from "../../components/Book";
import BookCarousel from "../../components/BookCarousel";
import Foto from "../../components/Foto";

import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import RitVuoto from "../../assets/images/RitVuoto.png";

import AdrianaRit from "../../assets/images/AdrianaRit.png";
import AdrianaIT from "../../assets/images/AdrianaIT.png";
import AdrianaEN from "../../assets/images/AdrianaEN.png";
import AdrianaFR from "../../assets/images/AdrianaFR.png";

import IsabellaVitaleIT01 from "../../assets/images/IsabellaVitaleIT01.png";
import IsabellaVitaleEN01 from "../../assets/images/IsabellaVitaleEN01.png";
import IsabellaVitaleFR01 from "../../assets/images/IsabellaVitaleFR01.png";
import IsabellaVitaleIT02 from "../../assets/images/IsabellaVitaleIT02.png";
import IsabellaVitaleEN02 from "../../assets/images/IsabellaVitaleEN02.png";
import IsabellaVitaleFR02 from "../../assets/images/IsabellaVitaleFR02.png";

import MercedesKW1 from "../../assets/images/MercedesKW1.png";
import MercedesKIT from "../../assets/images/MercedesKIT.png";
import MercdesKEN from "../../assets/images/MercedesKEN.png";
import MercedesKFR from "../../assets/images/MercedesKFR.png";

import PaoloAssenzaIT from "../../assets/images/PaoloAssenzaIT.png";
import PaoloAssenzaEN from "../../assets/images/PaoloAssenzaEN.png";
import PaoloAssenzaFR from "../../assets/images/PaoloAssenzaFR.png";
import PaoloAssenzaW1 from "../../assets/images/PaoloAssenzaW1.png";
import PaoloAssenzaW2 from "../../assets/images/PaoloAssenzaW2.png";
import PaoloAssenzaW3 from "../../assets/images/PaoloAssenzaW3.png";

import Lorenza1 from "../../assets/images/Lorenza1.png";
import Lorenza2 from "../../assets/images/Lorenza2.png";
import LorenzaCVI from "../../assets/images/LorenzaCVI.png";
import LorenzaCVE from "../../assets/images/LorenzaCVE.png";
import LorenzaCVF from "../../assets/images/LorenzaCVF.png";

import CristianaP1 from "../../assets/images/CristianaP1.png";
import CristianaP2 from "../../assets/images/CristianaP2.png";
import CristianaP3 from "../../assets/images/CristianaP3.png";
import CristianaPCVI from "../../assets/images/CristianaPCVI.png";
import CristianaPCVE from "../../assets/images/CristianaPCVE.png";
import CristianaPCVF from "../../assets/images/CristianaPCVF.png";

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

import IrmaAlonzo1 from "../../assets/images/IrmaAlonzo1.png";
import IrmaAlonzo2 from "../../assets/images/IrmaAlonzo2.png";
import IrmaAlonzo3 from "../../assets/images/IrmaAlonzo3.png";
import IrmaAlonzo4 from "../../assets/images/IrmaAlonzo4.png";
import IrmaAlonzoRit from "../../assets/images/IrmaAlonzoRit.png";
import IrmaAlonzoIT from "../../assets/images/IrmaAlonzoIT.png";
import IrmaAlonzoEN from "../../assets/images/IrmaAlonzoEN.png";
import IrmaAlonzoFR from "../../assets/images/IrmaAlonzoFR.png";

import PianoBi from "../../assets/images/PianoBi.png";
import PianoBiIT from "../../assets/images/PianoBiIT.png";
import PianoBiEN from "../../assets/images/PianoBiEN.png";
import PianoBiFR from "../../assets/images/PianoBiFR.png";
import ToPianoBiIT from "../../assets/images/ToPianoBiIT.png";
import ToPianoBiEN from "../../assets/images/ToPianoBiEN.png";
import ToPianoBiFR from "../../assets/images/ToPianoBiFR.png";

import ABalabanoff from "../../assets/images/ABalabanoff.png";
import ABalabanoffIT from "../../assets/images/ABalabanoffIT.png";
import ABalabanoffFR from "../../assets/images/ABalabanoffFR.png";
import ABalabanoffEN from "../../assets/images/ABalabanoffEN.png";
import ToABalabanoffIT from "../../assets/images/ToABalabanoffIT.png";
import ToABalabanoffEN from "../../assets/images/ToABalabanoffEN.png";
import ToABalabanoffFR from "../../assets/images/ToABalabanoffFR.png";

import AnnaFraentzelCelli from "../../assets/images/AnnaFraentzelCelli.png";
import AnnaFraentzelCelliIT from "../../assets/images/AnnaFraentzelCelliIT.png";
import AnnaFraentzelCelliEN from "../../assets/images/AnnaFraentzelCelliEN.png";
import AnnaFraentzelCelliFR from "../../assets/images/AnnaFraentzelCelliFR.png";

import CentroAnzianiIT from "../../assets/images/CentroAnzianiIT.png";
import CentroAnzianiEN from "../../assets/images/CentroAnzianiEN.png";
import CentroAnzianiFR from "../../assets/images/CentroAnzianiFR.png";
import ToCentroAnzianiIT from "../../assets/images/ToCentroAnzianiIT.png";
import ToCentroAnzianiEN from "../../assets/images/ToCentroAnzianiEN.png";
import ToCentroAnzianiFR from "../../assets/images/ToCentroAnzianiFR.png";
import CentroAnziani from "../../assets/images/CentroAnziani.png";

import Confalonieri from "../../assets/images/Confalonieri.png";
import ConfalonieriIT from "../../assets/images/ConfalonieriIT.png";
import ConfalonieriEN from "../../assets/images/ConfalonieriEN.png";
import ConfalonieriFR from "../../assets/images/ConfalonieriFR.png";
import ToConfalonieriIT from "../../assets/images/ToConfalonieriIT.png";
import ToConfalonieriEN from "../../assets/images/ToConfalonieriEN.png";
import ToConfalonieriFR from "../../assets/images/ToConfalonieriFR.png";

import Laghetto from "../../assets/images/Laghetto.png";
import LaghettoStoryIT from "../../assets/images/LaghettoStoryIT.png";
import LaghettoStoryEN from "../../assets/images/LaghettoStoryEN.png";
import LaghettoStoryFR from "../../assets/images/LaghettoStoryFR.png";
import ToLaghettoIT from "../../assets/images/ToLaghettoIT.png";
import ToLaghettoEN from "../../assets/images/ToLaghettoEN.png";
import ToLaghettoFR from "../../assets/images/ToLaghettoFR.png";

import Logo from "../../assets/images/LogoOndaBlue2.png";

import simbolmapp from "../../assets/images/simbolmapp.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const ProgOctober = () => {
  const { t } = useTranslation();

  const MercedesKWImages = [{ src: MercedesKW1, alt: "" }];

  const AdrianaRitImages = [{ src: AdrianaRit, alt: "" }];

  const PaoloAssenzaImages = [
    { src: PaoloAssenzaW1, alt: "" },
    { src: PaoloAssenzaW2, alt: "" },
    { src: PaoloAssenzaW3, alt: "" },
  ];

  const IsabellaVitale1BookImages = {
    it: IsabellaVitaleIT01,
    en: IsabellaVitaleEN01,
    fr: IsabellaVitaleFR01,
  };
  const IsabellaVitale2BookImages = {
    it: IsabellaVitaleIT02,
    en: IsabellaVitaleEN02,
    fr: IsabellaVitaleFR02,
  };
  const IsabellaVitaleImages = [{ src: RitVuoto, alt: "" }];

  const PaoloAssenzaBookImages = {
    it: PaoloAssenzaIT,
    en: PaoloAssenzaEN,
    fr: PaoloAssenzaFR,
  };

  const lorenzaRicciImages = [
    { src: Lorenza1, alt: "" },
    { src: Lorenza2, alt: "" },
  ];
  const lorenzaRicciBookImages = {
    it: LorenzaCVI,
    en: LorenzaCVE,
    fr: LorenzaCVF,
  };

  const cristianaPacchiarottiImages = [
    { src: CristianaP1, alt: "" },
    { src: CristianaP2, alt: "" },
    { src: CristianaP3, alt: "" },
  ];
  const cristianaPacchiarottiBookImages = {
    it: CristianaPCVI,
    en: CristianaPCVE,
    fr: CristianaPCVF,
  };
  const giancarloCaracuzzoImages = [
    { src: Giancarlo1, alt: "" },
    { src: Giancarlo2, alt: "" },
    { src: Giancarlo3, alt: "" },
    { src: Giancarlo4, alt: "" },
  ];
  const giancarloCaracuzzoBookImages = {
    it: GiancarloCVI,
    en: GiancarloCVE,
    fr: GiancarloCVF,
  };

  const albertoBesiImages = [
    { src: AlbertoB1, alt: "" },
    { src: AlbertoB2, alt: "" },
  ];
  const albertoBesiBookImages = {
    it: AlbertoBCVI,
    en: AlbertoBCVE,
    fr: AlbertoBCVF,
  };

  const davideDiTollaImages = [
    { src: Davide1, alt: "" },
    { src: Davide2, alt: "" },
    { src: Davide3, alt: "" },
    { src: Davide4, alt: "" },
  ];

  const davideDiTollaBookImages = {
    it: DavideCVI,
    en: DavideCVE,
    fr: DavideCVF,
  };

  const AdrianaBookImages = {
    it: AdrianaIT,
    en: AdrianaEN,
    fr: AdrianaFR,
  };

  const irmaAlonzoImages = [
    { src: IrmaAlonzoRit, alt: "" },
    { src: IrmaAlonzo1, alt: "" },
    { src: IrmaAlonzo2, alt: "" },
    { src: IrmaAlonzo3, alt: "" },
    { src: IrmaAlonzo4, alt: "" },
  ];

  const IrmaAlonzoBookImages = {
    it: IrmaAlonzoIT,
    en: IrmaAlonzoEN,
    fr: IrmaAlonzoFR,
  };
  const MercedesKBookImages = {
    it: MercedesKIT,
    en: MercdesKEN,
    fr: MercedesKFR,
  };

  const ToCentroAnzianiImageMap = {
    it: ToCentroAnzianiIT,
    en: ToCentroAnzianiEN,
    fr: ToCentroAnzianiFR,
  };

  const CentroAnzianiBookImageMap = {
    it: CentroAnzianiIT,
    en: CentroAnzianiEN,
    fr: CentroAnzianiFR,
  };
  const CentroAnzianiFotoImageMap = {
    it: CentroAnziani,
    en: CentroAnziani,
    fr: CentroAnziani,
  };
  const AnnaFraentzelCelliFotoImageMap = {
    it: AnnaFraentzelCelli,
    en: AnnaFraentzelCelli,
    fr: AnnaFraentzelCelli,
  };
  const AnnaFraentzelCelliBookImageMap = {
    it: AnnaFraentzelCelliIT,
    en: AnnaFraentzelCelliEN,
    fr: AnnaFraentzelCelliFR,
  };

  const AnnaFraentzelCelliImageMap = {
    it: ABalabanoffIT,
    en: ABalabanoffEN,
    fr: ABalabanoffFR,
  };

  const ToABalabanoffImageMap = {
    it: ToABalabanoffIT,
    en: ToABalabanoffEN,
    fr: ToABalabanoffFR,
  };
  const ABalabanoffBookImageMap = {
    it: ABalabanoffIT,
    en: ABalabanoffEN,
    fr: ABalabanoffFR,
  };
  const ABalabanoffFotoImageMap = {
    it: ABalabanoff,
    en: ABalabanoff,
    fr: ABalabanoff,
  };

  const ToConfalonieriImageMap = {
    it: ToConfalonieriIT,
    en: ToConfalonieriEN,
    fr: ToConfalonieriFR,
  };
  const ConfalonieriBookImageMap = {
    it: ConfalonieriIT,
    en: ConfalonieriEN,
    fr: ConfalonieriFR,
  };
  const ConfalonieriFotoImageMap = {
    it: Confalonieri,
    en: Confalonieri,
    fr: Confalonieri,
  };

  const ToLaghettoImageMap = {
    it: ToLaghettoIT,
    en: ToLaghettoEN,
    fr: ToLaghettoFR,
  };
  const LaghettoBookImageMap = {
    it: LaghettoStoryIT,
    en: LaghettoStoryEN,
    fr: LaghettoStoryFR,
  };
  const LaghettoFotoImageMap = {
    it: Laghetto,
    en: Laghetto,
    fr: Laghetto,
  };

  const PianoBiBookImageMap = {
    it: PianoBiIT,
    en: PianoBiEN,
    fr: PianoBiFR,
  };
  const PianoBiFotoImageMap = {
    it: PianoBi,
    en: PianoBi,
    fr: PianoBi,
  };
  const ToPianoBiImageMap = {
    it: ToPianoBiIT,
    en: ToPianoBiEN,
    fr: ToPianoBiFR,
  };

  const GiancarloComic = <FotoPerformance imageKey="Giancarlo1" />;

  return (
    <div className={styles.ProgrammaPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
      </div>
      <div className={styles.ProgrammaPageTitle}>
        <p>{t("programOctober.pageTitle")}</p>
      </div>
      <div className={styles.Logo}>
        <img src={Logo} alt={t("navbar.logoAlt")} />
      </div>
      {/* ----------------------------------------------------1-------------- */}

      {/* --------------------------------------------------3------------- */}

      {/* ------------------------------------------------4------------------ */}
      {/* <div className={styles.TitleAppuntamento}>
        <p>{t("programOctober.appointment4.sectionTitle")}</p>
      </div> */}
      <div className={styles.NameAppuntamento}>
        <p>{t("programOctober.appointment4.name")}</p>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.time1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment4.location1.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToCentroAnzianiImageMap}
                  altKey="programOctober.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={CentroAnzianiBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={CentroAnzianiFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.time2"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment4.location2.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={AnnaFraentzelCelliImageMap}
                  altKey="programOctober.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={AnnaFraentzelCelliBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={AnnaFraentzelCelliFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
            }}
          />
          <div className={styles.Orari}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            ></div>

            <div>
              <Trans
                i18nKey="programOctober.appointment4.Comic1"
                components={{
                  br: <br />,
                  map: (
                    <span className={styles.SimbolMapp}>
                      <MapButton
                        mapQuery={t(
                          "programOctober.appointment4.location2.mapQuery"
                        )}
                      >
                        <img
                          src={simbolmapp}
                          alt={t("programOctober.mapSymbolAlt")}
                        />
                      </MapButton>
                    </span>
                  ),
                  book: (
                    <Book
                      className={styles.IconStandard}
                      imageMap={AnnaFraentzelCelliBookImageMap}
                      altKey="programOctober.bookAlt"
                    />
                  ),
                  foto: (
                    <Foto
                      className={styles.IconStandard}
                      imageMap={AnnaFraentzelCelliFotoImageMap}
                      altKey="programOctober.fotoAlt"
                    />
                  ),

                  // comicLorenza: LorenzaComic,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ComicBlock imageKey="Lorenza2" />

      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.time3"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment4.location3.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToABalabanoffImageMap}
                  altKey="programOctober.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ABalabanoffBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={ABalabanoffFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.Comic2"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment4.location3.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ABalabanoffBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={ABalabanoffFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
              comicGiancarlo: GiancarloComic,
            }}
          />
        </div>
      </div>

      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.time4"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment4.location4.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToConfalonieriImageMap}
                  altKey="programOctober.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ConfalonieriBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={ConfalonieriFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
            }}
          />
        </div>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.description"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="programOctober.appointment4.artistList"
            components={{
              br: <br />,

              carousel_lorenza: <ButtonCarousel images={lorenzaRicciImages} />,
              book_lorenza: (
                <Book
                  className={styles.IconStandard}
                  imageMap={lorenzaRicciBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_cristiana: (
                <ButtonCarousel images={cristianaPacchiarottiImages} />
              ),
              book_cristiana: (
                <Book
                  className={styles.IconStandard}
                  imageMap={cristianaPacchiarottiBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_giancarlo: (
                <ButtonCarousel images={giancarloCaracuzzoImages} />
              ),
              book_giancarlo: (
                <Book
                  className={styles.IconStandard}
                  imageMap={giancarloCaracuzzoBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_alberto: <ButtonCarousel images={albertoBesiImages} />,
              book_alberto: (
                <Book
                  className={styles.IconStandard}
                  imageMap={albertoBesiBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_davide: <ButtonCarousel images={davideDiTollaImages} />,
              book_davide: (
                <Book
                  className={styles.IconStandard}
                  imageMap={davideDiTollaBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_irma: <ButtonCarousel images={irmaAlonzoImages} />,
              book_irma: (
                <Book
                  className={styles.IconStandard}
                  imageMap={IrmaAlonzoBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_adriana: (
                <ButtonCarousel
                  images={AdrianaRitImages}
                  className={styles.IconStandard}
                />
              ),
              book_adriana: (
                <Book
                  className={styles.IconStandard}
                  imageMap={AdrianaBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      {/* ------------------------------------------------5------------------ */}
      {/* <div className={styles.TitleAppuntamento}>
        <p>{t("programOctober.appointment5.sectionTitle")}</p>
      </div> */}
      <div className={styles.NameAppuntamento}>
        <p>{t("programOctober.appointment5.name")}</p>
      </div>

      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programOctober.appointment5.description2"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription}>
        <ExpandableTransText
          i18nKeyIntro="programOctober.appointment5.descriptionMK.TextIntro"
          i18nKeyFull="programOctober.appointment5.descriptionMK.TextFull"
          i18nKeyMore="programOctober.appointment5.descriptionMK.ReadMore"
          i18nKeyLess="programOctober.appointment5.descriptionMK.ReadLess"
        />
      </div>

      <div className={styles.EventDescription}>
        <ExpandableTransText
          i18nKeyIntro="programOctober.appointment5.descriptionPA.TextIntro"
          i18nKeyFull="programOctober.appointment5.descriptionPA.TextFull"
          i18nKeyMore="programOctober.appointment5.descriptionPA.ReadMore"
          i18nKeyLess="programOctober.appointment5.descriptionPA.ReadLess"
        />
      </div>
      <div className={styles.Orari}>
        <div>
          <div className={styles.EventDescription}></div>

          <Trans
            i18nKey="programOctober.appointment5.time1"
            components={{
              br: <br />,
              // MercedesKW1: <FotoPerformance imageKey="MercedesKW1" />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment5.location1.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToPianoBiImageMap}
                  altKey="programOctober.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={PianoBiBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={PianoBiFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programOctober.appointment5.time2"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programOctober.appointment5.location2.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programOctober.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToLaghettoImageMap}
                  altKey="programOctober.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={LaghettoBookImageMap}
                  altKey="programOctober.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={LaghettoFotoImageMap}
                  altKey="programOctober.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>

      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="programOctober.appointment5.artistList"
            components={{
              br: <br />,
              carousel_mercedes: <ButtonCarousel images={MercedesKWImages} />,
              book_mercedes: (
                <Book
                  className={styles.IconStandard}
                  imageMap={MercedesKBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_paolo: <ButtonCarousel images={PaoloAssenzaImages} />,
              book_paolo: (
                <Book
                  className={styles.IconStandard}
                  imageMap={PaoloAssenzaBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),

              carousel_adriana: (
                <ButtonCarousel
                  images={AdrianaRitImages}
                  className={styles.IconStandard}
                />
              ),
              book_adriana: (
                <Book
                  className={styles.IconStandard}
                  imageMap={AdrianaBookImages}
                  altKey="programOctober.bookAlt"
                />
              ),
              carousel_isabella: (
                <ButtonCarousel
                  images={IsabellaVitaleImages}
                  className={styles.IconStandard}
                />
              ),
              bookcarousel_isabella: (
                <BookCarousel
                  imageMaps={[
                    IsabellaVitale1BookImages,
                    IsabellaVitale2BookImages,
                  ]}
                  altKey="programOctober.bookAlt"
                  className={styles.IconStandard}
                />
              ),
            }}
          />
        </div>
      </div>

      {/* ------------------------------------------------6------------------ */}

      {/* ------------------------------------------------7------------------ */}
      <div className={styles.socials}>
        <div className={styles.socialRow}>
          <p>{t("home.socials")}</p>
          <div className={styles.iconLinks}>
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
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{t("home.copyright")}</p>
      </div>
    </div>
  );
};

export default ProgOctober;

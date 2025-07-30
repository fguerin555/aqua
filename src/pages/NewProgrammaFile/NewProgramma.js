import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./NewProgramma.module.css";
import MapButton from "../../components/MapButton";
import ButtonCarousel from "../../components/ButtonCarrousel";
import FromStation from "../../components/FromStation";
import Book from "../../components/Book";
import Foto from "../../components/Foto";
import OeilVide from "../../components/OeilVide";
import OV from "../../assets/images/OeilVide.png";
import RitVuoto from "../../assets/images/RitVuoto.png";
import ContainerIMG from "../../assets/images/ContainerIMG.png";

import DonSardelli01IT from "../../assets/images/DonSardelli01IT.png";
import DonSardelli02IT from "../../assets/images/DonSardelli02IT.png";
import DonSardelli03IT from "../../assets/images/DonSardelli03IT.png";
import DonSardelli01EN from "../../assets/images/DonSardelli01EN.png";
import DonSardelli02EN from "../../assets/images/DonSardelli02EN.png";
import DonSardelli03EN from "../../assets/images/DonSardelli03EN.png";
import DonSardelli01FR from "../../assets/images/DonSardelli01FR.png";
import DonSardelli02FR from "../../assets/images/DonSardelli02FR.png";
import DonSardelli03FR from "../../assets/images/DonSardelli03FR.png";
import DonSardelliRitr from "../../assets/images/DonSardelliRit.png";

import AdrianaRit from "../../assets/images/AdrianaRit.png";
import AdrianaIT from "../../assets/images/AdrianaIT.png";
import AdrianaEN from "../../assets/images/AdrianaEN.png";
import AdrianaFR from "../../assets/images/AdrianaFR.png";

import IsabellaVitaleIT from "../../assets/images/IsabellaVitaleIT.png";
import IsabellaVitaleEN from "../../assets/images/IsabellaVitaleEN.png";
import IsabellaVitaleFR from "../../assets/images/IsabellaVitaleFR.png";

import MercedesKW1 from "../../assets/images/MercedesKW1.png";
import MercedesKIT from "../../assets/images/MercedesKIT.png";
import MercdesKEN from "../../assets/images/MercedesKEN.png";
import MercedesKFR from "../../assets/images/MercedesKFR.png";

import LaurentLDW1 from "../../assets/images/LaurentLDW1.png";
import LaurentLDIT from "../../assets/images/LaurentLDIT.png";
import LaurentLDEN from "../../assets/images/LaurentLDEN.png";
import LaurentLDFR from "../../assets/images/LaurentLDFR.png";

import PaoloAssenzaIT from "../../assets/images/PaoloAssenzaIT.png";
import PaoloAssenzaEN from "../../assets/images/PaoloAssenzaEN.png";
import PaoloAssenzaFR from "../../assets/images/PaoloAssenzaFR.png";
import PaoloAssenzaW1 from "../../assets/images/PaoloAssenzaW1.png";
import PaoloAssenzaW2 from "../../assets/images/PaoloAssenzaW2.png";
import PaoloAssenzaW3 from "../../assets/images/PaoloAssenzaW3.png";

import App1_IlNuotatore from "../../assets/images/App1_IlNuotatore.png";
import App1_VoyagedHiver from "../../assets/images/App1_VoyagedHiver.png";
import App1_Pryntil from "../../assets/images/App1_Pryntil.png";
import App1_MurodiSabbia from "../../assets/images/App1_MurodiSabbia.png";
import App1_IlSatiroDanzante from "../../assets/images/App1_IlSatiroDanzante.png";
import App1_SpectralCanticle from "../../assets/images/App1_SpectralCanticle.png";
import App1_Karma from "../../assets/images/App1_Karma.png";

import Apice1 from "../../assets/images/Apice1.png";
import Apice2 from "../../assets/images/Apice2.png";
import Apice3 from "../../assets/images/Apice3.png";
import GiuliaACVI from "../../assets/images/GiuliaACVI.png";
import GiuliaACVE from "../../assets/images/GiuliaACVE.png";
import GiuliaACVF from "../../assets/images/GiuliaACVF.png";

import PamelaP1 from "../../assets/images/PamelaP1.png";
import PamelaP2 from "../../assets/images/PamelaP2.png";
import PamelaP3 from "../../assets/images/PamelaP3.png";
import PamelaP4 from "../../assets/images/PamelaP4.png";
import PamelaP5 from "../../assets/images/PamelaP5.png";
import PamelaP6 from "../../assets/images/PamelaP6.png";
import PamelaPCVI from "../../assets/images/PamelaPCVI.png";
import PamelaPCVE from "../../assets/images/PamelaPCVE.png";
import PamelaPCVF from "../../assets/images/PamelaPCVF.png";

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
import IrmaAlonzoRit from "../../assets/images/IrmaAlonzoRit.png";
import IrmaAlonzoIT from "../../assets/images/IrmaAlonzoIT.png";
import IrmaAlonzoEN from "../../assets/images/IrmaAlonzoEN.png";
import IrmaAlonzoFR from "../../assets/images/IrmaAlonzoFR.png";

import Pirri1 from "../../assets/images/Pirri1.png";
import Pirri2 from "../../assets/images/Pirri2.png";
import Pirri0 from "../../assets/images/Pirri0.png";

import IginiodeLucaW1 from "../../assets/images/IginiodeLucaW1.png";
import IginiodeLucaW3 from "../../assets/images/IginiodeLucaW3.png";
import IginiodeLucaW4 from "../../assets/images/IginiodeLucaW4.png";
import IginiodeLucaW6 from "../../assets/images/IginiodeLucaW6.png";
import IginiodeLucaW7 from "../../assets/images/IginiodeLucaW7.png";
import IginiodeLucaIT from "../../assets/images/IginiodeLucaIT.png";
import IginiodeLucaEN from "../../assets/images/IginiodeLucaEN.png";
import IginiodeLucaFR from "../../assets/images/IginiodeLucaFR.png";

import CasaPirri from "../../assets/images/CasaPirri.png";

import Acquedotto from "../../assets/images/Acquedotto.png";
import Acquedotto2 from "../../assets/images/Acquedotto2.png";

import ToCasaPirriIT from "../../assets/images/ToCasaPirriIT.png";
import ToCasaPirriEN from "../../assets/images/ToCasaPirriEN.png";
import ToCasaPirriFR from "../../assets/images/ToCasaPirriFR.png";

import ToSpazioYIT from "../../assets/images/ToSpazioYIT.png";
import ToSpazioYEN from "../../assets/images/ToSpazioYEN.png";
import ToSpazioYFR from "../../assets/images/ToSpazioYFR.png";

import CasaPirriIT from "../../assets/images/CasaPirriIT.png";
import CasaPirriEN from "../../assets/images/CasaPirriEN.png";
import CasaPirriFR from "../../assets/images/CasaPirriFR.png";

import SpazioYIT from "../../assets/images/SpazioYIT.png";
import SpazioYEN from "../../assets/images/SpazioYEN.png";
import SpazioYFR from "../../assets/images/SpazioYFR.png";
import SpazioY from "../../assets/images/SpazioY.png";

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

import AcquedottoEN from "../../assets/images/AcquedottoEN.png";
import AcquedottoFR from "../../assets/images/AcquedottoFR.png";
import ToAcquedottoEN from "../../assets/images/ToAcquedottoEN.png";
import ToAcquedottoIT from "../../assets/images/ToAcquedottoIT.png";
import ToAcquedottoFR from "../../assets/images/ToAcquedottoFR.png";

import Casale from "../../assets/images/Casale.png";
import CasaleIT from "../../assets/images/CasaleIT.png";
import CasaleEN from "../../assets/images/CasaleEN.png";
import CasaleFR from "../../assets/images/CasaleFR.png";

import ViaCasilinaVecchia from "../../assets/images/ViaCasilinaVecchia.png";
import ViaCasilinaVecchiaIT from "../../assets/images/ViaCasilinaVecchiaIT.png";
import ViaCasilinaVecchiaEN from "../../assets/images/ViaCasilinaVecchiaEN.png";
import ViaCasilinaVecchiaFR from "../../assets/images/ViaCasilinaVecchiaFR.png";
import ToViaCasilinaVecchiaIT from "../../assets/images/ToViaCasilinaVecchiaIT.png";
import ToViaCasilinaVecchiaEN from "../../assets/images/ToViaCasilinaVecchiaEN.png";
import ToViaCasilinaVecchiaFR from "../../assets/images/ToViaCasilinaVecchiaFR.png";

import ViadellAcquedottoFelice from "../../assets/images/ViadellAcquedottoFelice.png";
import ViaDellAcquedottoFeliceIT from "../../assets/images/ViaDellAcquedottoFeliceIT.png";
import ViaDellAcquedottoFeliceEN from "../../assets/images/ViaDellAcquedottoFeliceEN.png";
import ViaDellAcquedottoFeliceFR from "../../assets/images/ViaDellAcquedottoFeliceFR.png";
import ToViaDellAcquedottoFeliceIT from "../../assets/images/ToViaDellAcquedottoFeliceIT.png";
import ToViaDellAcquedottoFeliceEN from "../../assets/images/ToViaDellAcquedottoFeliceEN.png";
import ToViaDellAcquedottoFeliceFR from "../../assets/images/ToViaDellAcquedottoFeliceFR.png";

import ParcoTorFiscaleIT from "../../assets/images/ParcoDiTorFiscaleIT.png";
import ParcoTorFiscaleEN from "../../assets/images/ParcoDiTorFiscaleEN.png";
import ParcoTorFiscaleFR from "../../assets/images/ParcoDiTorFiscaleFR.png";
import ToParcoTorFiscaleFR from "../../assets/images/ToParcoDiTorFiscaleFR.png";
import ToParcoTorFiscaleIT from "../../assets/images/ToParcoDiTorFiscaleIT.png";
import ToParcoTorFiscaleEN from "../../assets/images/ToParcoDiTorFiscaleEN.png";
import ParcodiTorFiscale2 from "../../assets/images/ParcodiTorFiscale2.png";
import ParcoDiTorFiscale from "../../assets/images/ParcoDiTorFiscale.png";

import CentroAnzianiIT from "../../assets/images/CentroAnzianiIT.png";
import CentroAnzianiEN from "../../assets/images/CentroAnzianiEN.png";
import CentroAnzianiFR from "../../assets/images/CentroAnzianiFR.png";
import ToCentroAnzianiIT from "../../assets/images/ToCentroAnzianiIT.png";
import ToCentroAnzianiEN from "../../assets/images/ToCentroAnzianiEN.png";
import ToCentroAnzianiFR from "../../assets/images/ToCentroAnzianiFR.png";
import CentroAnziani from "../../assets/images/CentroAnziani.png";

import ViadellAcquaFelice from "../../assets/images/ViadellAcquaFelice.png";
import ViaDellAcquaFeliceIT from "../../assets/images/ViaDellAcquaFeliceIT.png";
import ViaDellAcquaFeliceEN from "../../assets/images/ViaDellAcquaFeliceEN.png";
import ViaDellAcquaFeliceFR from "../../assets/images/ViaDellAcquaFeliceFR.png";
import ToViaDellAcquaFeliceIT from "../../assets/images/ToViaDellAcquaFeliceIT.png";
import ToViaDellAcquaFeliceEN from "../../assets/images/ToViaDellAcquaFeliceEN.png";
import ToViaDellAcquaFeliceFR from "../../assets/images/ToViaDellAcquaFeliceFR.png";

import ViadelMandrione from "../../assets/images/ViadelMandrione.png";
import ViadelMandrioneIT from "../../assets/images/ViadelMandrioneIT.png";
import ViadelMandrioneEN from "../../assets/images/ViadelMandrioneEN.png";
import ViadelMandrioneFR from "../../assets/images/ViadelMandrioneFR.png";
import ToViadelMandrioneIT from "../../assets/images/ToViadelMandrioneIT.png";
import ToViadelMandrioneEN from "../../assets/images/ToViadelMandrioneEN.png";
import ToViadelMandrioneFR from "../../assets/images/ToViadelMandrioneFR.png";

import ViadiTorreBranca from "../../assets/images/ViadiTorreBranca.png";
import ViaDiTorreBrancaIT from "../../assets/images/ViaDiTorreBrancaIT.png";
import ViaDiTorreBrancaEN from "../../assets/images/ViaDiTorreBrancaEN.png";
import ViaDiTorreBrancaFR from "../../assets/images/ViaDiTorreBrancaFR.png";
import ToViaDiTorreBrancaIT from "../../assets/images/ToViaDiTorreBrancaIT.png";
import ToViaDiTorreBrancaEN from "../../assets/images/ToViaDiTorreBrancaEN.png";
import ToViaDiTorreBrancaFR from "../../assets/images/ToViaDiTorreBrancaFR.png";

import ViaTuscolana from "../../assets/images/ViaTuscolana.png";

import LagoExSNIAE from "../../assets/images/LagoExSNIAE.png";
import LagoExSNIAEIT from "../../assets/images/LagoExSNIAEIT.png";
import LagoExSNIAEEN from "../../assets/images/LagoExSNIAEEN.png";
import LagoExSNIAEFR from "../../assets/images/LagoExSNIAEFR.png";
import ToLagoExSNIAEIT from "../../assets/images/ToLagoExSNIAEIT.png";
import ToLagoExSNIAEEN from "../../assets/images/ToLagoExSNIAEEN.png";
import ToLagoExSNIAEFR from "../../assets/images/ToLagoExSNIAEFR.png";

import Confalonieri from "../../assets/images/Confalonieri.png";
import ConfalonieriIT from "../../assets/images/ConfalonieriIT.png";
import ConfalonieriEN from "../../assets/images/ConfalonieriEN.png";
import ConfalonieriFR from "../../assets/images/ConfalonieriFR.png";
import ToConfalonieriIT from "../../assets/images/ToConfalonieriIT.png";
import ToConfalonieriEN from "../../assets/images/ToConfalonieriEN.png";
import ToConfalonieriFR from "../../assets/images/ToConfalonieriFR.png";

import FontanaFR from "../../assets/images/FontanaFR.png";
import FontanaIT from "../../assets/images/FontanaIT.png";
import FontanaEN from "../../assets/images/FontanaEN.png";
import ToFontanaFR from "../../assets/images/ToFontanaFR.png";
import ToFontanaIT from "../../assets/images/ToFontanaIT.png";
import ToFontanaEN from "../../assets/images/ToFontanaEN.png";

import Logo from "../../assets/images/LogoOndaBlue2.png";

// import ParcoTorFiscale from "../../assets/images/ParcoDiTorFiscale.png";

import simbolmapp from "../../assets/images/simbolmapp.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const Programma = () => {
  const { t } = useTranslation();
  const giuliaApiceImages = [
    { src: Apice1, alt: "" },
    { src: Apice2, alt: "" },
    { src: Apice3, alt: "" },
  ];

  const MercedesKWImages = [{ src: MercedesKW1, alt: "" }];

  const LaurentLDImages = [{ src: LaurentLDW1, alt: "" }];

  const AdrianaRitImages = [{ src: AdrianaRit, alt: "" }];

  const DonSardelliITImages = [
    { src: DonSardelliRitr, alt: "" },
    { src: DonSardelli01IT, alt: "" },
    { src: DonSardelli02IT, alt: "" },
    { src: DonSardelli03IT, alt: "" },
  ];

  const DonSardelliENImages = [
    { src: DonSardelliRitr, alt: "" },
    { src: DonSardelli01EN, alt: "" },
    { src: DonSardelli02EN, alt: "" },
    { src: DonSardelli03EN, alt: "" },
  ];

  const DonSardelliFRImages = [
    { src: DonSardelliRitr, alt: "" },
    { src: DonSardelli01FR, alt: "" },
    { src: DonSardelli02FR, alt: "" },
    { src: DonSardelli03FR, alt: "" },
  ];

  const PaoloAssenzaImages = [
    { src: PaoloAssenzaW1, alt: "" },
    { src: PaoloAssenzaW2, alt: "" },
    { src: PaoloAssenzaW3, alt: "" },
  ];

  const GiuliaApiceBookImages = {
    it: GiuliaACVI,
    en: GiuliaACVE,
    fr: GiuliaACVF,
  };
  const PaoloAssenzaBookImages = {
    it: PaoloAssenzaIT,
    en: PaoloAssenzaEN,
    fr: PaoloAssenzaFR,
  };
  const PamelaPImages = [
    { src: PamelaP1, alt: "" },
    { src: PamelaP2, alt: "" },
    { src: PamelaP3, alt: "" },
    { src: PamelaP4, alt: "" },
    { src: PamelaP5, alt: "" },
    { src: PamelaP6, alt: "" },
  ];
  const PamelaPBookImages = {
    it: PamelaPCVI,
    en: PamelaPCVE,
    fr: PamelaPCVF,
  };

  const maddalenaScuderoniImages = [
    { src: Madscud1, alt: "" },
    { src: Madscud2, alt: "" },
    { src: Madscud3, alt: "" },
  ];
  const maddalenaScuderoniBookImages = {
    it: MaddalenaCVI,
    en: MaddalenaCVE,
    fr: MaddalenaCVF,
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
  const IsabellaVitaleBookImages = {
    it: IsabellaVitaleIT,
    en: IsabellaVitaleEN,
    fr: IsabellaVitaleFR,
  };
  const IsabellaVitaleImages = [{ src: RitVuoto, alt: "" }];

  const MatteoBasileImages = [{ src: RitVuoto, alt: "" }];

  const AcquedottoFotoImageMap = {
    en: Acquedotto,
    fr: Acquedotto,
    it: Acquedotto,
  };

  const MatteoBasileBookImages = {
    it: ContainerIMG,
    en: ContainerIMG,
    fr: ContainerIMG,
  };

  const AdrianaBookImages = {
    it: AdrianaIT,
    en: AdrianaEN,
    fr: AdrianaFR,
  };

  const lucaGrechiImages = [{ src: LucaG1, alt: "" }];

  const lucaGrechiBookImages = {
    it: LucaGCVI,
    en: LucaGCVE,
    fr: LucaGCVF,
  };

  const irmaAlonzoImages = [
    { src: IrmaAlonzoRit, alt: "" },
    { src: IrmaAlonzo1, alt: "" },
    { src: IrmaAlonzo2, alt: "" },
    { src: IrmaAlonzo3, alt: "" },
    { src: IrmaAlonzo4, alt: "" },
  ];

  const IginiodeLucaImages = [
    { src: IginiodeLucaW1, alt: "" },

    { src: IginiodeLucaW3, alt: "" },
    { src: IginiodeLucaW4, alt: "" },

    { src: IginiodeLucaW6, alt: "" },
    { src: IginiodeLucaW7, alt: "" },
  ];
  const VisionImages = [
    { src: App1_IlNuotatore, alt: "" },
    { src: App1_IlSatiroDanzante, alt: "" },
    { src: App1_Karma, alt: "" },
    { src: App1_MurodiSabbia, alt: "" },
    { src: App1_Pryntil, alt: "" },
    { src: App1_SpectralCanticle, alt: "" },
    { src: App1_VoyagedHiver, alt: "" },
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
  const LaurentLDBookImages = {
    it: LaurentLDIT,
    en: LaurentLDEN,
    fr: LaurentLDFR,
  };

  const IginiodeLucaBookImages = {
    it: IginiodeLucaIT,
    en: IginiodeLucaEN,
    fr: IginiodeLucaFR,
  };

  const ToCasaPirriImageMap = {
    it: ToCasaPirriIT,
    en: ToCasaPirriEN,
    fr: ToCasaPirriFR,
  };

  const ToAcquedottoImageMap = {
    it: ToAcquedottoIT,
    en: ToAcquedottoEN,
    fr: ToAcquedottoFR,
  };

  const CasaPirriBookImageMap = {
    it: CasaPirriIT,
    en: CasaPirriEN,
    fr: CasaPirriFR,
  };

  const CasaPirriFotoImageMap = {
    it: CasaPirri,
    en: CasaPirri,
    fr: CasaPirri,
  };

  const SpazioYBookImageMap = {
    it: SpazioYIT,
    en: SpazioYEN,
    fr: SpazioYFR,
  };
  const SpazioYFotoImageMap = {
    it: SpazioY,
    en: SpazioY,
    fr: SpazioY,
  };
  const ToSpazioYImageMap = {
    it: ToSpazioYIT,
    en: ToSpazioYEN,
    fr: ToSpazioYFR,
  };

  const AcquedottoBookImageMap = {
    it: ParcoTorFiscaleIT,
    en: AcquedottoEN,
    fr: AcquedottoFR,
  };

  const ViaDellAcquaFeliceFotoImageMap = {
    it: ViadellAcquaFelice,
    en: ViadellAcquaFelice,
    fr: ViadellAcquaFelice,
  };

  const ViaDellAcquedottoFeliceFotoImageMap = {
    it: ViadellAcquedottoFelice,
    en: ViadellAcquedottoFelice,
    fr: ViadellAcquedottoFelice,
  };
  const ViaDiTorreBrancaFotoImageMap = {
    it: ViadiTorreBranca,
    en: ViadiTorreBranca,
    fr: ViadiTorreBranca,
  };

  const ToViaCasilinaVecchiaImageMap = {
    it: ToViaCasilinaVecchiaIT,
    en: ToViaCasilinaVecchiaEN,
    fr: ToViaCasilinaVecchiaFR,
  };

  const ViaCasilinaVecchiaBookImageMap = {
    it: ViaCasilinaVecchiaIT,
    en: ViaCasilinaVecchiaEN,
    fr: ViaCasilinaVecchiaFR,
  };
  const ViaCasilinaVecchiaFotoImageMap = {
    it: ViaCasilinaVecchia,
    en: ViaCasilinaVecchia,
    fr: ViaCasilinaVecchia,
  };

  const ToViadelMandrioneImageMap = {
    it: ToViadelMandrioneIT,
    en: ToViadelMandrioneEN,
    fr: ToViadelMandrioneFR,
  };

  const ViadelMandrioneBookImageMap = {
    it: ViadelMandrioneIT,
    en: ViadelMandrioneEN,
    fr: ViadelMandrioneFR,
  };

  const ViadelMandrioneFotoImageMap = {
    it: ViadelMandrione,
    en: ViadelMandrione,
    fr: ViadelMandrione,
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

  const ToViaDellAcquedottoFeliceImageMap = {
    it: ToViaDellAcquedottoFeliceIT,
    en: ToViaDellAcquedottoFeliceEN,
    fr: ToViaDellAcquedottoFeliceFR,
  };
  const ViaDellAcquedottoFeliceBookImageMap = {
    it: ViaDellAcquedottoFeliceIT,
    en: ViaDellAcquedottoFeliceEN,
    fr: ViaDellAcquedottoFeliceFR,
  };

  const ViaTuscolanaFotoImageMap = {
    it: ViaTuscolana,
    en: ViaTuscolana,
    fr: ViaTuscolana,
  };

  const ToViaDiTorreBrancaImageMap = {
    it: ToViaDiTorreBrancaIT,
    en: ToViaDiTorreBrancaEN,
    fr: ToViaDiTorreBrancaFR,
  };

  const ToParcoTorFiscaleImageMap = {
    it: ToParcoTorFiscaleIT,
    en: ToParcoTorFiscaleEN,
    fr: ToParcoTorFiscaleFR,
  };

  const CasaleBookImageMap = {
    it: CasaleIT,
    en: CasaleEN,
    fr: CasaleFR,
  };

  const CasaleFotoImageMap = {
    it: Casale,
    en: Casale,
    fr: Casale,
  };

  const ParcoTorFiscaleBookImageMap = {
    it: ParcoTorFiscaleIT,
    en: ParcoTorFiscaleEN,
    fr: ParcoTorFiscaleFR,
  };

  const ParcodiTorFiscaleFotoImageMap = {
    it: ParcodiTorFiscale2,
    en: ParcodiTorFiscale2,
    fr: ParcodiTorFiscale2,
  };

  const ParcoDiTorFiscaleFotoImageMap = {
    it: ParcoDiTorFiscale,
    en: ParcoDiTorFiscale,
    fr: ParcoDiTorFiscale,
  };
  const Acquedotto2FotoImageMap = {
    it: Acquedotto2,
    en: Acquedotto2,
    fr: Acquedotto2,
  };

  const ViaDiTorreBrancaBookImageMap = {
    it: ViaDiTorreBrancaIT,
    en: ViaDiTorreBrancaEN,
    fr: ViaDiTorreBrancaFR,
  };

  const ToViaDellAcquaFeliceImageMap = {
    it: ToViaDellAcquaFeliceIT,
    en: ToViaDellAcquaFeliceEN,
    fr: ToViaDellAcquaFeliceFR,
  };
  const ViaDellAcquaFeliceBookImageMap = {
    it: ViaDellAcquaFeliceIT,
    en: ViaDellAcquaFeliceEN,
    fr: ViaDellAcquaFeliceFR,
  };

  const LagoExSNIAEBookImageMap = {
    it: LagoExSNIAEIT,
    en: LagoExSNIAEEN,
    fr: LagoExSNIAEFR,
  };

  const LagoExSNIAEFotoImageMap = {
    it: LagoExSNIAE,
    en: LagoExSNIAE,
    fr: LagoExSNIAE,
  };
  const ToLagoExSNIAEImageMap = {
    it: ToLagoExSNIAEIT,
    en: ToLagoExSNIAEEN,
    fr: ToLagoExSNIAEFR,
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

  const ToFontanaImageMap = {
    it: ToFontanaIT,
    en: ToFontanaEN,
    fr: ToFontanaFR,
  };

  const FontanaImageMap = {
    it: FontanaIT,
    en: FontanaEN,
    fr: FontanaFR,
  };
  const FontanaBookImageMap = {
    it: FontanaIT,
    en: FontanaEN,
    fr: FontanaFR,
  };

  const OVImageMap = {
    it: OV,
    fr: OV,
    en: OV,
  };

  const appointment2Locations = [
    {
      timeAndNameKey: "program.appointment2.location1.time_and_name",
      mapQueryKey: "program.appointment2.location1.mapQuery",
      fromStationImageMap: ToParcoTorFiscaleImageMap,
      bookImageMap: ParcoTorFiscaleBookImageMap,
      fotoImageMap: ParcodiTorFiscaleFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location2.time_and_name",
      mapQueryKey: "program.appointment2.location2.mapQuery",
      fromStationImageMap: ToParcoTorFiscaleImageMap,
      bookImageMap: CasaleBookImageMap,
      fotoImageMap: CasaleFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location3.time_and_name",
      mapQueryKey: "program.appointment2.location3.mapQuery",
      fromStationImageMap: ToViaCasilinaVecchiaImageMap,
      bookImageMap: ViaCasilinaVecchiaBookImageMap,
      fotoImageMap: ViaCasilinaVecchiaFotoImageMap,
    },

    {
      timeAndNameKey: "program.appointment2.location4.time_and_name",
      mapQueryKey: "program.appointment2.location4.mapQuery",
      fromStationImageMap: ToViadelMandrioneImageMap,
      bookImageMap: ViadelMandrioneBookImageMap,
      fotoImageMap: ViadelMandrioneFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location5.time_and_name",
      mapQueryKey: "program.appointment2.location5.mapQuery",
      fromStationImageMap: ToViaDellAcquaFeliceImageMap,
      bookImageMap: ViaDellAcquaFeliceBookImageMap,
      fotoImageMap: ViaDellAcquaFeliceFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location6.time_and_name",
      mapQueryKey: "program.appointment2.location6.mapQuery",
      fromStationImageMap: ToViaDellAcquedottoFeliceImageMap,
      bookImageMap: ViaDellAcquedottoFeliceBookImageMap,
      fotoImageMap: ViaDellAcquedottoFeliceFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location7.time_and_name",
      mapQueryKey: "program.appointment2.location7.mapQuery",
      fromStationImageMap: ToViaDiTorreBrancaImageMap,
      bookImageMap: ViaDiTorreBrancaBookImageMap,
      fotoImageMap: ViaDiTorreBrancaFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location8.time_and_name",
      mapQueryKey: "program.appointment2.location8.mapQuery",
      fromStationImageMap: ToFontanaImageMap,
      bookImageMap: FontanaBookImageMap,
      fotoImageMap: ViaTuscolanaFotoImageMap,
    },
  ];

  return (
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
      {/* ----------------------------------------------------1-------------- */}
      <div className={styles.TitleAppuntamento}>
        <p>{t("program.appointment1.sectionTitle")}</p>
      </div>
      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment1.name")}</p>
      </div>
      <div className={styles.Name2Appuntamento}>
        <p>{t("program.appointment1.name2")}</p>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.description"
            components={{ br: <br /> }}
          />
        </div>
      </div>

      <div className={styles.EventDescriptionShort}></div>
      <div className={styles.Orari}>
        <div>
          <Trans i18nKey="program.appointment1.location1.time_and_name" />
        </div>
      </div>
      <div className={styles.Foto}>
        <img
          src={Acquedotto}
          alt={t("program.appointment1.location1.imageAlt")}
        />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="program.appointment1.location1.address"
            components={{
              book_Acquedotto: (
                <Book
                  imageMap={AcquedottoBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              map1: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment1.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              toAcquedotto: (
                <FromStation
                  imageMap={ToAcquedottoImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans i18nKey="program.appointment1.location2.time_and_name" />
        </div>
      </div>
      <div className={styles.Foto}>
        <img
          src={CasaPirri}
          alt={t("program.appointment1.location2.imageAlt")}
        />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="program.appointment1.location2.address"
            components={{
              book_CasaPirri: (
                <Book
                  imageMap={CasaPirriBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              map2: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment1.location2.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              toCasaPirri: (
                <FromStation
                  imageMap={ToCasaPirriImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans i18nKey="program.appointment1.location3.time_and_name" />
        </div>
      </div>
      <div className={styles.Foto}>
        <img src={SpazioY} alt={t("program.appointment1.location3.imageAlt")} />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="program.appointment1.location3.address"
            components={{
              book_SpazioY: (
                <Book imageMap={SpazioYBookImageMap} altKey="program.bookAlt" />
              ),
              map3: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment1.location3.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              toSpazioY: (
                <FromStation
                  imageMap={ToAcquedottoImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionTitle"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionProgram"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionTitle2"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionProgram2"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionTitle3"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionProgram3"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionTitle4"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionProgram4"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionTitle5"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionProgram5"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionTitle6"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="program.appointment1.descriptionProgram6"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment1.CriticTextTitle"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription}>
        <div>
          <Trans
            i18nKey="program.appointment1.CriticTextParagraphs"
            components={{ br: <br /> }}
          />
        </div>
      </div>

      <div className={styles.Vision}>
        <div>
          <Trans
            i18nKey="program.appointment1.Vision"
            components={{
              br: <br />,
              carousel_Vision: (
                <ButtonCarousel
                  images={VisionImages}
                  className={styles.IconStandard}
                />
              ),
            }}
          />
        </div>
      </div>

      {/* --------------------------------------------------2------------- */}
      <div className={styles.TitleAppuntamento}>
        <p>{t("program.appointment2.sectionTitle")}</p>
      </div>
      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment2.name")}</p>
      </div>
      <div className={styles.Orari}>
        <div>{t("program.appointment2.time")}</div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment2.description1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment2.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
            }}
          />
        </div>

        {appointment2Locations.map((loc, index) => (
          <div className={styles.Luoghi} key={index}>
            <div>
              <Trans
                i18nKey={loc.timeAndNameKey}
                components={{
                  br: <br />,
                  map: (
                    <span className={styles.SimbolMapp}>
                      <MapButton mapQuery={t(loc.mapQueryKey)}>
                        <img
                          src={simbolmapp}
                          alt={t("program.mapSymbolAlt")}
                          className={styles.IconStandard}
                        />
                      </MapButton>
                    </span>
                  ),
                  to: (
                    <FromStation
                      className={styles.IconStandard}
                      imageMap={loc.fromStationImageMap}
                      altKey="program.fromStationAlt"
                    />
                  ),
                  book: (
                    <Book
                      className={styles.IconStandard}
                      imageMap={loc.bookImageMap}
                      altKey="program.bookAlt"
                    />
                  ),
                  foto: (
                    <Foto
                      className={styles.IconStandard}
                      imageMap={loc.fotoImageMap}
                      altKey="program.fotoAlt"
                    />
                  ),
                }}
              />
            </div>
          </div>
        ))}
        <div className={styles.Luoghi}></div>
        <div>
          <Trans
            i18nKey="program.appointment2.description2"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment2.location8.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
            }}
          />
        </div>

        <div className={styles.Luoghi}>
          <div>
            <Trans
              i18nKey="program.appointment2.location9.time_and_name"
              components={{
                br: <br />,
                map: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t("program.appointment2.location8.mapQuery")}
                    >
                      <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                    </MapButton>
                  </span>
                ),
                to: (
                  <FromStation
                    className={styles.IconStandard}
                    imageMap={ToSpazioYImageMap}
                    altKey="program.fromStationAlt"
                  />
                ),
                book: (
                  <Book
                    className={styles.IconStandard}
                    imageMap={SpazioYBookImageMap}
                    altKey="program.bookAlt"
                  />
                ),
                foto: (
                  <Foto
                    className={styles.IconStandard}
                    imageMap={SpazioYFotoImageMap}
                    altKey="program.fotoAlt"
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="program.appointment2.artistList"
            components={{
              br: <br />,
              carousel_iginio: (
                <ButtonCarousel
                  images={IginiodeLucaImages}
                  className={styles.IconStandard}
                />
              ),
              book_iginio: (
                <Book
                  className={styles.IconStandard}
                  imageMap={IginiodeLucaBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_pamela: (
                <ButtonCarousel
                  images={PamelaPImages}
                  className={styles.IconStandard}
                />
              ),
              book_pamela: (
                <Book
                  className={styles.IconStandard}
                  imageMap={PamelaPBookImages}
                  altKey="program.bookAlt"
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
                  altKey="program.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>

      {/* --------------------------------------------------3------------- */}

      <div className={styles.TitleAppuntamento}>
        <p>{t("program.appointment3.sectionTitle")}</p>
      </div>

      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment3.name")}</p>
      </div>

      {/* 🌊 Evento 1 — Lago Ex Snia */}
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment3.event1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment3.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToLagoExSNIAEImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={LagoExSNIAEBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={LagoExSNIAEFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>

      {/* 🏛️ Evento 2 — Parco di Tor Fiscale */}
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment3.event2"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment3.location2.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToParcoTorFiscaleImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ParcoTorFiscaleBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={Acquedotto2FotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
        <div>
          <Trans
            i18nKey="program.appointment3.description"
            components={{ br: <br /> }}
          />
        </div>
      </div>

      {/* 🎨 ArtistList parfaitement aligné */}
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="program.appointment3.artistList"
            components={{
              br: <br />,
              carousel_giulia: (
                <ButtonCarousel
                  images={giuliaApiceImages}
                  className={styles.IconStandard}
                />
              ),
              book_giulia: (
                <Book
                  className={styles.IconStandard}
                  imageMap={GiuliaApiceBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_paolo: (
                <ButtonCarousel
                  images={PaoloAssenzaImages}
                  className={styles.IconStandard}
                />
              ),
              book_paolo: (
                <Book
                  className={styles.IconStandard}
                  imageMap={PaoloAssenzaBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_matteo: (
                <ButtonCarousel
                  images={MatteoBasileImages}
                  className={styles.IconStandard}
                />
              ),
              book_matteo: (
                <Book
                  className={styles.IconStandard}
                  imageMap={MatteoBasileBookImages}
                  altKey="program.bookAlt"
                />
              ),

              carousel_luca: (
                <ButtonCarousel
                  images={lucaGrechiImages}
                  className={styles.IconStandard}
                />
              ),
              book_luca: (
                <Book
                  className={styles.IconStandard}
                  imageMap={lucaGrechiBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_maddalena: (
                <ButtonCarousel
                  images={maddalenaScuderoniImages}
                  className={styles.IconStandard}
                />
              ),
              book_maddalena: (
                <Book
                  className={styles.IconStandard}
                  imageMap={maddalenaScuderoniBookImages}
                  altKey="program.bookAlt"
                />
              ),
              OV: (
                <OeilVide
                  imageMap={OVImageMap}
                  altKey="program.artistPlaceholderAlt"
                  className={styles.IconStandard}
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
                  altKey="program.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      {/* ------------------------------------------------4------------------ */}
      <div className={styles.TitleAppuntamento}>
        <p>{t("program.appointment4.sectionTitle")}</p>
      </div>
      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment4.name")}</p>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment4.time1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment4.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToCentroAnzianiImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={CentroAnzianiBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={CentroAnzianiFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment4.time2"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment4.location2.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={AnnaFraentzelCelliImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={AnnaFraentzelCelliBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={AnnaFraentzelCelliFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment4.time3"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment4.location3.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToABalabanoffImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ABalabanoffBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={ABalabanoffFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment4.time4"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment4.location4.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToConfalonieriImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ConfalonieriBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={ConfalonieriFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
        <div>
          <Trans
            i18nKey="program.appointment4.description"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="program.appointment4.artistList"
            components={{
              br: <br />,
              OV: (
                <OeilVide
                  imageMap={OVImageMap}
                  altKey="program.artistPlaceholderAlt"
                  className={styles.IconStandard}
                />
              ),
              carousel_lorenza: <ButtonCarousel images={lorenzaRicciImages} />,
              book_lorenza: (
                <Book
                  className={styles.IconStandard}
                  imageMap={lorenzaRicciBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_cristiana: (
                <ButtonCarousel images={cristianaPacchiarottiImages} />
              ),
              book_cristiana: (
                <Book
                  className={styles.IconStandard}
                  imageMap={cristianaPacchiarottiBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_giancarlo: (
                <ButtonCarousel images={giancarloCaracuzzoImages} />
              ),
              book_giancarlo: (
                <Book
                  className={styles.IconStandard}
                  imageMap={giancarloCaracuzzoBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_alberto: <ButtonCarousel images={albertoBesiImages} />,
              book_alberto: (
                <Book
                  className={styles.IconStandard}
                  imageMap={albertoBesiBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_davide: <ButtonCarousel images={davideDiTollaImages} />,
              book_davide: (
                <Book
                  className={styles.IconStandard}
                  imageMap={davideDiTollaBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_irma: <ButtonCarousel images={irmaAlonzoImages} />,
              book_irma: (
                <Book
                  className={styles.IconStandard}
                  imageMap={IrmaAlonzoBookImages}
                  altKey="program.bookAlt"
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
                  altKey="program.bookAlt"
                />
              ),
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

      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment5.description2"
            components={{ br: <br /> }}
          />
        </div>
      </div>

      <div className={styles.Orari}>
        <div>
          <div className={styles.EventDescription}></div>

          <Trans
            i18nKey="program.appointment5.time1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment5.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToPianoBiImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={PianoBiBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={PianoBiFotoImageMap}
                  altKey="program.fotoAlt"
                />
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
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment5.location2.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToParcoTorFiscaleImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ParcoTorFiscaleBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={ParcoDiTorFiscaleFotoImageMap}
                  altKey="program.fotoAlt"
                />
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
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment5.location3.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToParcoTorFiscaleImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={ParcoTorFiscaleBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={AcquedottoFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription}>
        <div>
          <Trans
            i18nKey="program.appointment5.description"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="program.appointment5.artistList"
            components={{
              br: <br />,
              carousel_mercedes: <ButtonCarousel images={MercedesKWImages} />,
              book_mercedes: (
                <Book
                  className={styles.IconStandard}
                  imageMap={MercedesKBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_paolo: <ButtonCarousel images={PaoloAssenzaImages} />,
              book_paolo: (
                <Book
                  className={styles.IconStandard}
                  imageMap={PaoloAssenzaBookImages}
                  altKey="program.bookAlt"
                />
              ),
              carousel_laurent: <ButtonCarousel images={LaurentLDImages} />,
              book_laurent: (
                <Book
                  className={styles.IconStandard}
                  imageMap={LaurentLDBookImages}
                  altKey="program.bookAlt"
                />
              ),

              OV: (
                <OeilVide
                  imageMap={OVImageMap}
                  altKey="program.artistPlaceholderAlt"
                  className={styles.IconStandard}
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
                  altKey="program.bookAlt"
                />
              ),
              carousel_isabella: (
                <ButtonCarousel
                  images={IsabellaVitaleImages}
                  className={styles.IconStandard}
                />
              ),
              book_isabella: (
                <Book
                  className={styles.IconStandard}
                  imageMap={IsabellaVitaleBookImages}
                  altKey="program.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      {/* ------------------------------------------------6------------------ */}
      <div className={styles.TitleAppuntamento}>
        <p>{t("program.appointment6.sectionTitle")}</p>
      </div>

      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment6.name1")}</p>
      </div>

      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment6.name2")}</p>
      </div>

      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment6.time1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment6.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToCasaPirriImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={CasaPirriBookImageMap}
                  altKey="program.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={CasaPirriFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="program.appointment6.time2"
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
        <div>{t("program.appointment6.location2.name")}</div>
        <div className={styles.SimbolMapp}>
          <MapButton mapQuery={t("program.appointment6.location2.mapQuery")}>
            <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
          </MapButton>
        </div>
      </div>
      <div className={styles.Foto}>
        <img src={Pirri1} alt={t("program.appointment6.location2.imageAlt")} />
      </div>
      <div className={styles.Luoghi}>
        <div>{t("program.appointment6.location2.name")}</div>
        <div className={styles.SimbolMapp}>
          <MapButton mapQuery={t("program.appointment6.location2.mapQuery")}>
            <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
          </MapButton>
        </div>
      </div>
      <div className={styles.FotoV}>
        <img src={Pirri0} alt={t("program.appointment6.location2.imageAlt")} />
      </div>

      {/* ------------------------------------------------7------------------ */}
      <div className={styles.TitleAppuntamento}>
        <p>{t("program.appointment7.sectionTitle")}</p>
      </div>
      <div className={styles.NameAppuntamento}>
        <p>
          <Trans> {t("program.appointment7.time")}</Trans>
        </p>
      </div>

      <div className={styles.Orari}>
        <div className={styles.EventDescription}></div>
        <div>
          <Trans
            i18nKey="program.appointment7.description"
            components={{ br: <br /> }}
          />
        </div>
        <div>
          <Trans
            i18nKey="program.appointment7.DonSardelli"
            components={{
              br: <br />,
              carousel_DonSardelliIT: (
                <ButtonCarousel images={DonSardelliITImages} />
              ),
              carousel_DonSardelliEN: (
                <ButtonCarousel images={DonSardelliENImages} />
              ),
              carousel_DonSardelliFR: (
                <ButtonCarousel images={DonSardelliFRImages} />
              ),
            }}
          />
          <div />

          <Trans
            i18nKey="program.appointment7.location1.name1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment7.location1.mapQuery")}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToFontanaImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={FontanaImageMap}
                  altKey="program.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.Foto}>
        <img src={Pirri2} alt={t("program.appointment7.location1.imageAlt")} />
      </div>
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="program.appointment7.artistList"
            components={{
              br: <br />,
              OV: (
                <OeilVide
                  imageMap={OVImageMap}
                  altKey="program.artistPlaceholderAlt"
                  className={styles.IconStandard}
                />
              ),
              carousel_adriana: <ButtonCarousel images={AdrianaRitImages} />,
              book_adriana: (
                <Book
                  className={styles.IconStandard}
                  imageMap={AdrianaBookImages}
                  altKey="program.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Programma;

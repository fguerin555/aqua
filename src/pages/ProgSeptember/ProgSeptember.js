import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./ProgSeptember.module.css";
import ExpandableTransText from "../../components/ExpandableTransText";
import FotoFilm from "../../components/FotoFilm";
import QRcode3D from "../../assets/images/QRcode3D.png";
import FotoPerQRcode from "../../assets/images/FotoPerQRcode.jpg";
import MapButton from "../../components/MapButton";
import ScrollToTop from "../../components/ScrollToTop";
import Slider from "../../components/Slider";

import ButtonCarousel from "../../components/ButtonCarrousel";
import FromStation from "../../components/FromStation";
import Book from "../../components/Book";
import BookCarousel from "../../components/BookCarousel";
import Foto from "../../components/Foto";

import OeilVide from "../../components/OeilVide";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import OV from "../../assets/images/OeilVide.png";

import RaccontodellAcqua from "../../assets/videos/RaccontodellAcqua.mp4";
import Liquefazioni from "../../assets/videos/Liquefazioni.mp4";

import EntrataParco from "../../assets/images/EntrataParco.png";

import ARAcqua from "../../assets/videos/ARAcqua.mp4";

import MatteoBBio01IT from "../../assets/images/MatteoBBio01IT.png";
import MatteoBBio01EN from "../../assets/images/MatteoBBio01EN.png";
import MatteoBBio01FR from "../../assets/images/MatteoBBio01FR.png";
import MatteoBBio02IT from "../../assets/images/MatteoBBio02IT.png";
import MatteoBBio02EN from "../../assets/images/MatteoBBio02EN.png";
import MatteoBBio02FR from "../../assets/images/MatteoBBio02FR.png";
import MatteoBW01 from "../../assets/images/MatteoBW01.png";
import MatteoBW02 from "../../assets/images/MatteoBW02.png";
import MatteoBW03 from "../../assets/images/MatteoBW03.png";
import MatteoBW04 from "../../assets/images/MatteoBW04.png";
import MatteoBW05 from "../../assets/images/MatteoBW05.png";
import MatteoBRit from "../../assets/images/MatteoBRit.png";

import AdrianaRit from "../../assets/images/AdrianaRit.png";
import AdrianaIT from "../../assets/images/AdrianaIT.png";
import AdrianaEN from "../../assets/images/AdrianaEN.png";
import AdrianaFR from "../../assets/images/AdrianaFR.png";

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
import App1_LaPiuLontanaPatria from "../../assets/images/App1_LaPiuLontanaPatria.png";

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

import ViaDellAcquedottoFelice from "../../assets/images/ViaDellAcquedottoFelice.png";
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

import CentroAnzianiIT from "../../assets/images/CentroAnzianiIT.png";
import CentroAnzianiEN from "../../assets/images/CentroAnzianiEN.png";
import CentroAnzianiFR from "../../assets/images/CentroAnzianiFR.png";
import ToCentroAnzianiIT from "../../assets/images/ToCentroAnzianiIT.png";
import ToCentroAnzianiEN from "../../assets/images/ToCentroAnzianiEN.png";
import ToCentroAnzianiFR from "../../assets/images/ToCentroAnzianiFR.png";
import CentroAnziani from "../../assets/images/CentroAnziani.png";

import ViaDellAcquaFelice from "../../assets/images/ViaDellAcquaFelice.png";
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

import FontanaFR from "../../assets/images/FontanaFR.png";
import FontanaIT from "../../assets/images/FontanaIT.png";
import FontanaEN from "../../assets/images/FontanaEN.png";
import ToFontanaFR from "../../assets/images/ToFontanaFR.png";
import ToFontanaIT from "../../assets/images/ToFontanaIT.png";
import ToFontanaEN from "../../assets/images/ToFontanaEN.png";

import Logo from "../../assets/images/LogoOndaBlue2.png";

import simbolmapp from "../../assets/images/simbolmapp.png";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const ProgSeptember = () => {
  const { t } = useTranslation();
  const giuliaApiceImages = [
    { src: Apice1, alt: "" },
    { src: Apice2, alt: "" },
    { src: Apice3, alt: "" },
  ];

  const MatteoBImages = [
    { src: MatteoBRit, alt: "" },
    { src: MatteoBW01, alt: "" },
    { src: MatteoBW02, alt: "" },
    { src: MatteoBW03, alt: "" },
    { src: MatteoBW04, alt: "" },
    { src: MatteoBW05, alt: "" },
  ];

  const AdrianaRitImages = [{ src: AdrianaRit, alt: "" }];

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

  const MatteoB1BookImages = {
    it: MatteoBBio01IT,
    en: MatteoBBio01EN,
    fr: MatteoBBio01FR,
  };
  const MatteoB2BookImages = {
    it: MatteoBBio02IT,
    en: MatteoBBio02EN,
    fr: MatteoBBio02FR,
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
    { src: App1_LaPiuLontanaPatria, alt: "" },
  ];

  const IrmaAlonzoBookImages = {
    it: IrmaAlonzoIT,
    en: IrmaAlonzoEN,
    fr: IrmaAlonzoFR,
  };

  const ToSpazioYImageMap = {
    it: ToSpazioYIT,
    en: ToSpazioYEN,
    fr: ToSpazioYFR,
  };
  const SpazioYBookImageMap = {
    it: SpazioYIT,
    en: SpazioYEN,
    fr: SpazioYFR,
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

  const AcquedottoBookImageMap = {
    it: ParcoTorFiscaleIT,
    en: ParcoTorFiscaleEN,
    fr: ParcoTorFiscaleFR,
  };

  const ViaDellAcquaFeliceFotoImageMap = {
    it: ViaDellAcquaFelice,
    en: ViaDellAcquaFelice,
    fr: ViaDellAcquaFelice,
  };

  const ViaDellAcquedottoFeliceFotoImageMap = {
    it: ViaDellAcquedottoFelice,
    en: ViaDellAcquedottoFelice,
    fr: ViaDellAcquedottoFelice,
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

  // const Acquedotto2FotoImageMap = {
  //   it: Acquedotto2,
  //   en: Acquedotto2,
  //   fr: Acquedotto2,
  // };

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

  const ToLagoExSNIAEImageMap = {
    it: ToLagoExSNIAEIT,
    en: ToLagoExSNIAEEN,
    fr: ToLagoExSNIAEFR,
  };

  const ToFontanaImageMap = {
    it: ToFontanaIT,
    en: ToFontanaEN,
    fr: ToFontanaFR,
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

  const EntrataParcoFotoImageMap = {
    it: EntrataParco,
    en: EntrataParco,
    fr: EntrataParco,
  };

  const appointment2Locations = [
    {
      timeAndNameKey: "programSeptember.appointment2.location1.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location1.mapQuery",
      fromStationImageMap: ToParcoTorFiscaleImageMap,
      bookImageMap: ParcoTorFiscaleBookImageMap,
      fotoImageMap: ParcodiTorFiscaleFotoImageMap,
      fotoSrc: ParcodiTorFiscale2,
    },
    {
      timeAndNameKey: "programSeptember.appointment2.location2.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location2.mapQuery",
      fromStationImageMap: ToParcoTorFiscaleImageMap,
      bookImageMap: CasaleBookImageMap,
      fotoImageMap: CasaleFotoImageMap,
      fotoSrc: Casale,
    },
    {
      timeAndNameKey: "programSeptember.appointment2.location3.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location3.mapQuery",
      fromStationImageMap: ToViaCasilinaVecchiaImageMap,
      bookImageMap: ViaCasilinaVecchiaBookImageMap,
      fotoImageMap: ViaCasilinaVecchiaFotoImageMap,
      fotoSrc: ViaCasilinaVecchia,
    },

    {
      timeAndNameKey: "programSeptember.appointment2.location4.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location4.mapQuery",
      fromStationImageMap: ToViadelMandrioneImageMap,
      bookImageMap: ViadelMandrioneBookImageMap,
      fotoImageMap: ViadelMandrioneFotoImageMap,
      fotoSrc: ViadelMandrione,
    },
    {
      timeAndNameKey: "programSeptember.appointment2.location5.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location5.mapQuery",
      fromStationImageMap: ToViaDellAcquaFeliceImageMap,
      bookImageMap: ViaDellAcquaFeliceBookImageMap,
      fotoImageMap: ViaDellAcquaFeliceFotoImageMap,
      fotoSrc: ViaDellAcquaFelice,
    },
    {
      timeAndNameKey: "programSeptember.appointment2.location6.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location6.mapQuery",
      fromStationImageMap: ToViaDellAcquedottoFeliceImageMap,
      bookImageMap: ViaDellAcquedottoFeliceBookImageMap,
      fotoImageMap: ViaDellAcquedottoFeliceFotoImageMap,
      fotoSrc: ViaDellAcquedottoFelice,
    },
    {
      timeAndNameKey: "programSeptember.appointment2.location7.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location7.mapQuery",
      fromStationImageMap: ToViaDiTorreBrancaImageMap,
      bookImageMap: ViaDiTorreBrancaBookImageMap,
      fotoImageMap: ViaDiTorreBrancaFotoImageMap,
      fotoSrc: ViadiTorreBranca,
    },
    {
      timeAndNameKey: "programSeptember.appointment2.location8.time_and_name",
      mapQueryKey: "programSeptember.appointment2.location8.mapQuery",
      fromStationImageMap: ToFontanaImageMap,
      bookImageMap: FontanaBookImageMap,
      fotoImageMap: ViaTuscolanaFotoImageMap,
      fotoSrc: ViaTuscolana,
    },
  ];

  return (
    <div className={styles.ProgrammaPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
      </div>
      <div className={styles.ProgrammaPageTitle}>
        <p>{t("programSeptember.pageTitle")}</p>
      </div>
      <div className={styles.Logo}>
        <img src={Logo} alt={t("navbar.logoAlt")} />
      </div>

      <div className={styles.NameAppuntamento}>
        <p>{t("programSeptember.appointment1.name")}</p>
      </div>
      <div className={styles.Name2Appuntamento}>
        <p>{t("programSeptember.appointment1.name2")}</p>
      </div>
      {/* ---------- */}
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.description"
            components={{ br: <br /> }}
          />
        </div>
      </div>

      <div className={styles.EventDescriptionShort}></div>
      <div className={styles.Orari}>
        <div>
          <Trans i18nKey="programSeptember.appointment1.location1.time_and_name" />
        </div>
      </div>
      <div className={styles.Foto}>
        <img
          src={Acquedotto}
          alt={t("programSeptember.appointment1.location1.imageAlt")}
        />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.location1.address"
            components={{
              book_Acquedotto: (
                <Book
                  imageMap={AcquedottoBookImageMap}
                  altKey="programSeptember.bookAlt"
                />
              ),
              map1: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programSeptember.appointment1.location1.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programSeptember.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              toAcquedotto: (
                <FromStation
                  imageMap={ToAcquedottoImageMap}
                  altKey="programSeptember.fromStationAlt"
                />
              ),
              fotoEntrataParco: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={EntrataParcoFotoImageMap}
                  altKey="programSeptember.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={styles.VideoWrapperVertical}>
        <video width="640" controls>
          <source src={Liquefazioni} type="video/mp4" />
        </video>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans i18nKey="programSeptember.appointment1.location2.time_and_name" />
        </div>
      </div>

      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.location2.address"
            components={{
              book_CasaPirri: (
                <Book
                  imageMap={CasaPirriBookImageMap}
                  altKey="programSeptember.bookAlt"
                />
              ),
              map2: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programSeptember.appointment1.location2.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programSeptember.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              toCasaPirri: (
                <FromStation
                  imageMap={ToCasaPirriImageMap}
                  altKey="programSeptember.fromStationAlt"
                />
              ),
              fotoCasaPirri: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={CasaPirriFotoImageMap}
                  altKey="programSeptember.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>

      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionTitle"
            components={{
              br: <br />,
              i: <i />,
              span: <span className={styles.Author} />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionProgram"
            components={{
              br: <br />,
              i: <i />,
              fotoIlNuotatore: <FotoFilm imageKey="IlNuotatore" />,
              fotoIlSatiroDanzante: <FotoFilm imageKey="IlSatiroDanzante" />,
              fotoKarma: <FotoFilm imageKey="Karma" />,
              fotoLaPiuLontanaPatria: (
                <FotoFilm imageKey="LaPiuLontanaPatria" />
              ),
              fotoMurodiSabbia: <FotoFilm imageKey="MurodiSabbia" />,
              fotoPryntil: <FotoFilm imageKey="Pryntil" />,
              fotoSpectralCanticle: <FotoFilm imageKey="SpectralCanticle" />,
              fotoVoyagedHiver: <FotoFilm imageKey="VoyagedHiver" />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionTitle2"
            components={{
              br: <br />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionProgram2"
            components={{
              br: <br />,
              i: <i />,
              fotoIlNuotatore: <FotoFilm imageKey="IlNuotatore" />,
              fotoIlSatiroDanzante: <FotoFilm imageKey="IlSatiroDanzante" />,
              fotoKarma: <FotoFilm imageKey="Karma" />,
              fotoLaPiuLontanaPatria: (
                <FotoFilm imageKey="LaPiuLontanaPatria" />
              ),
              fotoMurodiSabbia: <FotoFilm imageKey="MurodiSabbia" />,
              fotoPryntil: <FotoFilm imageKey="Pryntil" />,
              fotoSpectralCanticle: <FotoFilm imageKey="SpectralCanticle" />,
              fotoVoyagedHiver: <FotoFilm imageKey="VoyagedHiver" />,
            }}
          />
        </div>
      </div>

      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionTitle3"
            components={{
              br: <br />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionProgram3"
            components={{
              br: <br />,
              i: <i />,
              fotoIlNuotatore: <FotoFilm imageKey="IlNuotatore" />,
              fotoIlSatiroDanzante: <FotoFilm imageKey="IlSatiroDanzante" />,
              fotoKarma: <FotoFilm imageKey="Karma" />,
              fotoLaPiuLontanaPatria: (
                <FotoFilm imageKey="LaPiuLontanaPatria" />
              ),
              fotoMurodiSabbia: <FotoFilm imageKey="MurodiSabbia" />,
              fotoPryntil: <FotoFilm imageKey="Pryntil" />,
              fotoSpectralCanticle: <FotoFilm imageKey="SpectralCanticle" />,
              fotoVoyagedHiver: <FotoFilm imageKey="VoyagedHiver" />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionTitle4"
            components={{
              br: <br />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionProgram4"
            components={{
              br: <br />,
              i: <i />,
              fotoIlNuotatore: <FotoFilm imageKey="IlNuotatore" />,
              fotoIlSatiroDanzante: <FotoFilm imageKey="IlSatiroDanzante" />,
              fotoKarma: <FotoFilm imageKey="Karma" />,
              fotoLaPiuLontanaPatria: (
                <FotoFilm imageKey="LaPiuLontanaPatria" />
              ),
              fotoMurodiSabbia: <FotoFilm imageKey="MurodiSabbia" />,
              fotoPryntil: <FotoFilm imageKey="Pryntil" />,
              fotoSpectralCanticle: <FotoFilm imageKey="SpectralCanticle" />,
              fotoVoyagedHiver: <FotoFilm imageKey="VoyagedHiver" />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionTitle5"
            components={{
              br: <br />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionProgram5"
            components={{
              br: <br />,
              i: <i />,
              fotoIlNuotatore: <FotoFilm imageKey="IlNuotatore" />,
              fotoIlSatiroDanzante: <FotoFilm imageKey="IlSatiroDanzante" />,
              fotoKarma: <FotoFilm imageKey="Karma" />,
              fotoLaPiuLontanaPatria: (
                <FotoFilm imageKey="LaPiuLontanaPatria" />
              ),
              fotoMurodiSabbia: <FotoFilm imageKey="MurodiSabbia" />,
              fotoPryntil: <FotoFilm imageKey="Pryntil" />,
              fotoSpectralCanticle: <FotoFilm imageKey="SpectralCanticle" />,
              fotoVoyagedHiver: <FotoFilm imageKey="VoyagedHiver" />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionTitle6"
            components={{
              br: <br />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription4}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.descriptionProgram6"
            components={{
              br: <br />,
              i: <i />,
              fotoIlNuotatore: <FotoFilm imageKey="IlNuotatore" />,
              fotoIlSatiroDanzante: <FotoFilm imageKey="IlSatiroDanzante" />,
              fotoKarma: <FotoFilm imageKey="Karma" />,
              fotoLaPiuLontanaPatria: (
                <FotoFilm imageKey="LaPiuLontanaPatria" />
              ),
              fotoMurodiSabbia: <FotoFilm imageKey="MurodiSabbia" />,
              fotoPryntil: <FotoFilm imageKey="Pryntil" />,
              fotoSpectralCanticle: <FotoFilm imageKey="SpectralCanticle" />,
              fotoVoyagedHiver: <FotoFilm imageKey="VoyagedHiver" />,
            }}
          />
        </div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.CriticTextTitle"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.EventDescription}>
        <ExpandableTransText
          i18nKeyIntro="programSeptember.appointment1.CriticTextIntro"
          i18nKeyFull="programSeptember.appointment1.CriticTextFull"
          i18nKeyMore="programSeptember.appointment1.ReadMore"
          i18nKeyLess="programSeptember.appointment1.ReadLess"
        />
      </div>

      <div className={styles.Vision}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment1.Vision"
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
      {/* -------------PLEIN AIR -------------------------------------3---devient2---------- */}

      <div className={styles.NameAppuntamento}>
        <p>{t("programSeptember.appointment3.name")}</p>
      </div>
      <div className={styles.Orari}>
        <Trans
          i18nKey="programSeptember.appointment3.descriptionEvent"
          components={{ br: <br /> }}
        />
      </div>
      <div className={styles.Foto}>
        <img
          src={LagoExSNIAE}
          alt={t("programSeptember.appointment3.location1.imageAlt")}
        />
      </div>

      <div className={styles.Orari}>
        <div>
          {/* event1 */}
          <Trans
            i18nKey="programSeptember.appointment3.event1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programSeptember.appointment3.location1.mapQuery"
                    )}
                  >
                    <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToLagoExSNIAEImageMap}
                  altKey="programSeptember.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={LagoExSNIAEBookImageMap}
                  altKey="programSeptember.bookAlt"
                />
              ),
            }}
          />
          <div>
            {/* event1B */}
            <Trans
              i18nKey="programSeptember.appointment3.event1B"
              components={{
                br: <br />,
              }}
            />
          </div>

          <div className={styles.VideoWrapper}>
            <video width="640" height="360" controls>
              <source src={RaccontodellAcqua} type="video/mp4" />
            </video>
          </div>
          <div classname={styles.FotosPerfLuca}>
            <Trans
              i18nKey="programSeptember.appointment3.textFotoLuca"
              components={{
                br: <br />,
              }}
            />
          </div>
          <div className={styles.FotoPerf}>
            <Slider />
          </div>

          {/* 🏛️ Evento 2 — Parco di Tor Fiscale */}
          {/* <div className={styles.Orari}>
            <div>
              <Trans
                i18nKey="programSeptember.appointment3.event2"
                components={{
                  br: <br />,
                  map: (
                    <span className={styles.SimbolMapp}>
                      <MapButton
                        mapQuery={t(
                          "programSeptember.appointment3.location2.mapQuery"
                        )}
                      >
                        <img
                          src={simbolmapp}
                          alt={t("programSeptember.mapSymbolAlt")}
                        />
                      </MapButton>
                    </span>
                  ),
                  to: (
                    <FromStation
                      className={styles.IconStandard}
                      imageMap={ToParcoTorFiscaleImageMap}
                      altKey="programSeptember.fromStationAlt"
                    />
                  ),
                  book: (
                    <Book
                      className={styles.IconStandard}
                      imageMap={ParcoTorFiscaleBookImageMap}
                      altKey="programSeptember.bookAlt"
                    />
                  ),
                  foto: (
                    <Foto
                      className={styles.IconStandard}
                      imageMap={Acquedotto2FotoImageMap}
                      altKey="programSeptember.fotoAlt"
                    />
                  ),
                }}
              />
            </div>
          </div>  */}
          <div>
            <Trans
              i18nKey="programSeptember.appointment3.description"
              components={{ br: <br /> }}
            />
          </div>
        </div>
        <div className={styles.VideoWrapper}>
          <video width="640" height="360" controls>
            <source src={ARAcqua} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.Watchin3DQrcode}>
        <Trans
          i18nKey="programSeptember.appointment3.watchin3D"
          components={{ br: <br /> }}
        />
      </div>
      <div className={styles.qrRow}>
        <img
          src={QRcode3D}
          alt="QR code pour lancer l’AR"
          className={styles.Qrcode3D}
        />
        <img
          src={FotoPerQRcode}
          alt="Visuel déclencheur de l’AR"
          className={styles.FotoPerQRcode}
        />
      </div>

      {/* 🎨 ArtistList parfaitement aligné */}
      <div className={styles.ArtistList}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment3.artistList"
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
                  altKey="programSeptember.bookAlt"
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
                  altKey="programSeptember.bookAlt"
                />
              ),
              carousel_matteo: (
                <ButtonCarousel
                  images={MatteoBImages}
                  className={styles.IconStandard}
                />
              ),
              bookcarousel_matteo: (
                <BookCarousel
                  imageMaps={[MatteoB1BookImages, MatteoB2BookImages]}
                  altKey="programSeptember.bookAlt"
                  className={styles.IconStandard}
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
                  altKey="programSeptember.bookAlt"
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
                  altKey="programSeptember.bookAlt"
                />
              ),
              OV: (
                <OeilVide
                  imageMap={OVImageMap}
                  altKey="programSeptember.artistPlaceholderAlt"
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
                  altKey="programSeptember.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>
      {/* --------------- I PORTATORI D'ACQUA-----------------------------------2--devient3----------- */}

      <div className={styles.NameAppuntamento}>
        <p>{t("programSeptember.appointment2.name")}</p>
      </div>
      <div className={styles.Orari}>
        <div>{t("programSeptember.appointment2.time")}</div>
      </div>
      <div className={styles.EventDescription3}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment2.description1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programSeptember.appointment2.location1.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programSeptember.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
            }}
          />
        </div>
        {appointment2Locations.map((loc, index) => {
          const componentsObj = {
            br: <br />,
            map: (
              <span className={styles.SimbolMapp}>
                <MapButton mapQuery={t(loc.mapQueryKey)}>
                  <img
                    src={simbolmapp}
                    alt={t("programSeptember.mapSymbolAlt")}
                    className={styles.IconStandard}
                  />
                </MapButton>
              </span>
            ),
            to: (
              <FromStation
                className={styles.IconStandard}
                imageMap={loc.fromStationImageMap}
                altKey="programSeptember.fromStationAlt"
              />
            ),
            book: (
              <Book
                className={styles.IconStandard}
                imageMap={loc.bookImageMap}
                altKey="programSeptember.bookAlt"
              />
            ),
          };

          return (
            <div className={styles.Luoghi} key={index}>
              <div className={styles.LuogoContent}>
                {/* ✅ Bloc image corrigé */}
                <div className={styles.FotoTop}>
                  <div className={styles.ImageFull}>
                    {loc.fotoSrc ? (
                      <img
                        src={loc.fotoSrc}
                        alt={t("programSeptember.fotoAlt")}
                      />
                    ) : (
                      <Foto
                        imageMap={loc.fotoImageMap}
                        altKey="programSeptember.fotoAlt"
                      />
                    )}
                  </div>
                </div>

                {/* Texte */}
                <div className={styles.TextBlock}>
                  <Trans
                    i18nKey={loc.timeAndNameKey}
                    components={componentsObj}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.Luoghi}>
        <div className={styles.NameAppuntamento}>
          {/* Si tu veux afficher un titre ici, ajoute une clé i18n */}
        </div>

        <div className={styles.Orari}>
          <div>{t("programSeptember.appointment2.time")}</div>
        </div>

        <div className={styles.Orari}>
          <div>
            <Trans
              i18nKey="programSeptember.appointment2.location9.time_and_name"
              components={{
                br: <br />,
                map: (
                  <span className={styles.SimbolMapp}>
                    <MapButton
                      mapQuery={t(
                        "programSeptember.appointment2.location9.mapQuery"
                      )}
                    >
                      <img
                        src={simbolmapp}
                        alt={t("programSeptember.mapSymbolAlt")}
                      />
                    </MapButton>
                  </span>
                ),
                to: (
                  <FromStation
                    className={styles.IconStandard}
                    imageMap={ToSpazioYImageMap}
                    altKey="programSeptember.fromStationAlt"
                  />
                ),
                book: (
                  <Book
                    className={styles.IconStandard}
                    imageMap={SpazioYBookImageMap}
                    altKey="programSeptember.bookAlt"
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
            i18nKey="programSeptember.appointment2.artistList"
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
                  altKey="programSeptember.bookAlt"
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
                  altKey="programSeptember.bookAlt"
                />
              ),
            }}
          />
        </div>
      </div>

      {/* ------------------------------------------------4------------------ */}
      {/* <div className={styles.TitleAppuntamento}>
        <p>{t("programSeptember.appointment4.sectionTitle")}</p>
      </div> */}
      <div className={styles.NameAppuntamento}>
        <p>{t("programSeptember.appointment4.name")}</p>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="programSeptember.appointment4.time1"
            components={{
              br: <br />,
              map: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t(
                      "programSeptember.appointment4.location1.mapQuery"
                    )}
                  >
                    <img
                      src={simbolmapp}
                      alt={t("programSeptember.mapSymbolAlt")}
                    />
                  </MapButton>
                </span>
              ),
              to: (
                <FromStation
                  className={styles.IconStandard}
                  imageMap={ToCentroAnzianiImageMap}
                  altKey="programSeptember.fromStationAlt"
                />
              ),
              book: (
                <Book
                  className={styles.IconStandard}
                  imageMap={CentroAnzianiBookImageMap}
                  altKey="programSeptember.bookAlt"
                />
              ),
              foto: (
                <Foto
                  className={styles.IconStandard}
                  imageMap={CentroAnzianiFotoImageMap}
                  altKey="programSeptember.fotoAlt"
                />
              ),
            }}
          />
          <div className={styles.ArtistList}>
            <div>
              <Trans
                i18nKey="programSeptember.appointment4.artistList"
                components={{
                  br: <br />,
                  carousel_irma: (
                    <ButtonCarousel
                      images={irmaAlonzoImages}
                      className={styles.IconStandard}
                    />
                  ),
                  book_irma: (
                    <Book
                      className={styles.IconStandard}
                      imageMap={IrmaAlonzoBookImages}
                      altKey="programSeptember.bookAlt"
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
                      altKey="programSeptember.bookAlt"
                    />
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------5------------------ */}

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
      <ScrollToTop />
      {/* <BackButton /> */}
    </div>
  );
};

export default ProgSeptember;

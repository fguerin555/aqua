import React from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./NewProgramma.module.css";
import MapButton from "../../components/MapButton";
import ButtonCarousel from "../../components/ButtonCarrousel";
import FromStation from "../../components/FromStation";
import Book from "../../components/Book";
import Foto from "../../components/Foto";

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

import Pirri1 from "../../assets/images/Pirri1.png";
import Pirri2 from "../../assets/images/Pirri2.png";
import Pirri0 from "../../assets/images/Pirri0.png";

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
import SpazioY from "../../assets/images/SpazioY.png";

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

import ToAnnaFraentzelCelliIT from "../../assets/images/ToAnnaFraentzelCelliIT.png";
import ToAnnaFraentzelCelliEN from "../../assets/images/ToAnnaFraentzelCelliEN.png";
import ToAnnaFraentzelCelliFR from "../../assets/images/ToAnnaFraentzelCelliFR.png";

import AcquedottoEN from "../../assets/images/AcquedottoEN.png";
import AcquedottoIT from "../../assets/images/AcquedottoIT.png";
import AcquedottoFR from "../../assets/images/AcquedottoFR.png";
import ToAcquedottoEN from "../../assets/images/ToAcquedottoEN.png";
import ToAcquedottoIT from "../../assets/images/ToAcquedottoIT.png";
import ToAcquedottoFR from "../../assets/images/ToAcquedottoFR.png";

import VillaDeSanctisIT from "../../assets/images/VillaDeSanctisIT.png";
import VillaDeSanctisEN from "../../assets/images/VillaDeSanctisEN.png";
import VillaDeSanctisFR from "../../assets/images/VillaDeSanctisFR.png";
import ToVillaDeSanctisEN from "../../assets/images/ToVillaDeSanctisEN.png";
import ToVillaDeSanctisIT from "../../assets/images/ToVillaDeSanctisIT.png";
import ToVillaDeSanctisFR from "../../assets/images/ToVillaDeSanctisFR.png";

import CasilinaVecchiaIT from "../../assets/images/CasilinaVecchiaIT.png";
import CasilinaVecchiaEN from "../../assets/images/CasilinaVecchiaEN.png";
import CasilinaVecchiaFR from "../../assets/images/CasilinaVecchiaFR.png";
import ToCasilinaVecchiaIT from "../../assets/images/ToCasilinaVecchiaIT.png";
import ToCasilinaVecchiaEN from "../../assets/images/ToCasilinaVecchiaEN.png";
import ToCasilinaVecchiaFR from "../../assets/images/ToCasilinaVecchiaFR.png";

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
// import ParcoDiTorFiscale from "../../assets/images/ParcoDiTorFiscale.png";

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

import VicolodellAcquedottoFelice from "../../assets/images/VicolodellAcquedottoFelice.png";

import VicoloDellAcquedottoFeliceIT from "../../assets/images/VicoloDellAcquedottoFeliceIT.png";
import VicoloDellAcquedottoFeliceFR from "../../assets/images/VicoloDellAcquedottoFeliceFR.png";
import VicoloDellAcquedottoFeliceEN from "../../assets/images/VicoloDellAcquedottoFeliceEN.png";
import ToVicoloDellAcquedottoFeliceIT from "../../assets/images/ToVicoloDellAcquedottoFeliceIT.png";
import ToVicoloDellAcquedottoFeliceEN from "../../assets/images/ToVicoloDellAcquedottoFeliceEN.png";
import ToVicoloDellAcquedottoFeliceFR from "../../assets/images/ToVicoloDellAcquedottoFeliceFR.png";

import ViadiTorreBranca from "../../assets/images/ViadiTorreBranca.png";

import ViaDiTorreBrancaIT from "../../assets/images/ViaDiTorreBrancaIT.png";
import ViaDiTorreBrancaEN from "../../assets/images/ViaDiTorreBrancaEN.png";
import ViaDiTorreBrancaFR from "../../assets/images/ViaDiTorreBrancaFR.png";
import ToViaDiTorreBrancaIT from "../../assets/images/ToViaDiTorreBrancaIT.png";
import ToViaDiTorreBrancaEN from "../../assets/images/ToViaDiTorreBrancaEN.png";
import ToViaDiTorreBrancaFR from "../../assets/images/ToViaDiTorreBrancaFR.png";

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

import ViaCasilinaVecchia19 from "../../assets/images/ViaCasilinaVecchia19.png";
import ViaCasilinaVecchia115 from "../../assets/images/ViaCasilinaVecchia115.png";

import VillaDeSanctis from "../../assets/images/VillaDeSanctis.png";

import Logo from "../../assets/images/LogoOndaBlue2.png";

import AppareilFoto from "../../assets/images/AppareilFoto.png";

import ParcoTorFiscale from "../../assets/images/ParcoDiTorFiscale.png";

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
    { src: CristianaPCVI, alt: "" },
    { src: CristianaPCVE, alt: "" },
    { src: CristianaPCVF, alt: "" },
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
  const CasaPirriImages = [{ src: CasaPirri, alt: "" }];
  const SpazioYImages = [{ src: SpazioY, alt: "" }];

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
    it: AcquedottoIT,
    en: AcquedottoEN,
    fr: AcquedottoFR,
  };
  const ToVillaDeSanctisImageMap = {
    it: ToVillaDeSanctisIT,
    en: ToVillaDeSanctisEN,
    fr: ToVillaDeSanctisFR,
  };
  const VillaDeSanctisBookImageMap = {
    it: VillaDeSanctisIT,
    en: VillaDeSanctisEN,
    fr: VillaDeSanctisFR,
  };
  const VillaDeSanctisFotoImageMap = {
    it: VillaDeSanctis,
    en: VillaDeSanctis,
    fr: VillaDeSanctis,
  };
  const CasilinaVecchia19FotoImageMap = {
    it: ViaCasilinaVecchia19,
    en: ViaCasilinaVecchia19,
    fr: ViaCasilinaVecchia19,
  };
  const CasilinaVecchia115FotoImageMap = {
    it: ViaCasilinaVecchia115,
    en: ViaCasilinaVecchia115,
    fr: ViaCasilinaVecchia115,
  };
  const ViaDellAcquaFeliceFotoImageMap = {
    it: ViadellAcquaFelice,
    en: ViadellAcquaFelice,
    fr: ViadellAcquaFelice,
  };

  const VicoloDellAcquedottoFeliceFotoImageMap = {
    it: VicolodellAcquedottoFelice,
    en: VicolodellAcquedottoFelice,
    fr: VicolodellAcquedottoFelice,
  };
  const ViaDiTorreBrancaFotoImageMap = {
    it: ViadiTorreBranca,
    en: ViadiTorreBranca,
    fr: ViadiTorreBranca,
  };

  const ToCasilinaVecchiaImageMap = {
    it: ToCasilinaVecchiaIT,
    en: ToCasilinaVecchiaEN,
    fr: ToCasilinaVecchiaFR,
  };

  const CasilinaVecchiaBookImageMap = {
    it: CasilinaVecchiaIT,
    en: CasilinaVecchiaEN,
    fr: CasilinaVecchiaFR,
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

  const ToCentroAnzianiImageMap = {
    it: ToCentroAnzianiIT,
    en: ToCentroAnzianiEN,
    fr: ToCentroAnzianiFR,
  };
  const CentroAnzianiImageMap = {
    it: CentroAnzianiIT,
    en: CentroAnzianiEN,
    fr: CentroAnzianiFR,
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
  const ToAnnaFraentzelCelliImageMap = {
    it: ToAnnaFraentzelCelliIT,
    en: ToAnnaFraentzelCelliEN,
    fr: ToAnnaFraentzelCelliFR,
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
  const ConfalonieriImageMap = {
    it: ConfalonieriIT,
    en: ConfalonieriEN,
    fr: ConfalonieriFR,
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

  const ToVicoloDellAcquedottoFeliceImageMap = {
    it: ToVicoloDellAcquedottoFeliceIT,
    en: ToVicoloDellAcquedottoFeliceEN,
    fr: ToVicoloDellAcquedottoFeliceFR,
  };
  const VicoloDellAcquedottoFeliceBookImageMap = {
    it: VicoloDellAcquedottoFeliceIT,
    en: VicoloDellAcquedottoFeliceEN,
    fr: VicoloDellAcquedottoFeliceFR,
  };

  const ToViaDiTorreBrancaImageMap = {
    it: ToViaDiTorreBrancaIT,
    en: ToViaDiTorreBrancaEN,
    fr: ToViaDiTorreBrancaFR,
  };

  const ParcoTorFiscaleImageMap = {
    it: ParcoTorFiscaleIT,
    en: ParcoTorFiscaleEN,
    fr: ParcoTorFiscaleFR,
  };

  const ToParcoTorFiscaleImageMap = {
    it: ToParcoTorFiscaleIT,
    en: ToParcoTorFiscaleEN,
    fr: ToParcoTorFiscaleFR,
  };

  const ParcoTorFiscaleBookImageMap = {
    it: ParcoTorFiscaleIT,
    en: ParcoTorFiscaleEN,
    fr: ParcoTorFiscaleFR,
  };

  const ParcoTorFiscaleFotoImageMap = {
    it: ParcoTorFiscale,
    en: ParcoTorFiscale,
    fr: ParcoTorFiscale,
  };

  const ViaDiTorreBrancaBookImageMap = {
    it: ViaDiTorreBrancaIT,
    en: ViaDiTorreBrancaEN,
    fr: ViaDiTorreBrancaFR,
  };

  const ViaDiTorreBrancaImageMap = {
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
  const LagoExSNIAEImageMap = {
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

  const appointment2Locations = [
    {
      timeAndNameKey: "program.appointment2.location1.time_and_name",
      mapQueryKey: "program.appointment2.location1.mapQuery",
      fromStationImageMap: ToCasilinaVecchiaImageMap,
      bookImageMap: CasilinaVecchiaBookImageMap,
      fotoImageMap: CasilinaVecchia19FotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location2.time_and_name",
      mapQueryKey: "program.appointment2.location2.mapQuery",
      fromStationImageMap: ToCasilinaVecchiaImageMap,
      bookImageMap: CasilinaVecchiaBookImageMap,
      fotoImageMap: CasilinaVecchia115FotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location3.time_and_name",
      mapQueryKey: "program.appointment2.location3.mapQuery",
      fromStationImageMap: ToVillaDeSanctisImageMap,
      bookImageMap: VillaDeSanctisBookImageMap,
      fotoImageMap: VillaDeSanctisFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location4.time_and_name",
      mapQueryKey: "program.appointment2.location4.mapQuery",
      fromStationImageMap: ToViaDellAcquaFeliceImageMap,
      bookImageMap: ViaDellAcquaFeliceBookImageMap,
      fotoImageMap: ViaDellAcquaFeliceFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location5.time_and_name",
      mapQueryKey: "program.appointment2.location5.mapQuery",
      fromStationImageMap: ToVicoloDellAcquedottoFeliceImageMap,
      bookImageMap: VicoloDellAcquedottoFeliceBookImageMap,
      fotoImageMap: VicoloDellAcquedottoFeliceFotoImageMap,
    },
    {
      timeAndNameKey: "program.appointment2.location6.time_and_name",
      mapQueryKey: "program.appointment2.location6.mapQuery",
      fromStationImageMap: ToViaDiTorreBrancaImageMap,
      bookImageMap: ViaDiTorreBrancaBookImageMap,
      fotoImageMap: ViaDiTorreBrancaFotoImageMap,
    },

    {
      timeAndNameKey: "program.appointment2.location7.time_and_name",
      mapQueryKey: "program.appointment2.location7.mapQuery",
      fromStationImageMap: ToParcoTorFiscaleImageMap,
      bookImageMap: ParcoTorFiscaleBookImageMap,
      fotoImageMap: ParcoTorFiscaleFotoImageMap,
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
      <div className={styles.EventDescriptionShort}>
        <div>{t("program.appointment1.description")}</div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans i18nKey="program.appointment1.location1.time_and_name" />
        </div>
      </div>
      <div className={styles.Foto}>
        <img
          src={CasaPirri}
          alt={t("program.appointment1.location1.imageAlt")}
        />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="program.appointment1.location1.address"
            components={{
              book_casaPirri: (
                <Book
                  imageMap={CasaPirriBookImageMap}
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
              toCasaPirri_1: (
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
          <Trans i18nKey="program.appointment1.location2.time_and_name" />
        </div>
      </div>
      <div className={styles.Foto}>
        <img src={SpazioY} alt={t("program.appointment1.location2.imageAlt")} />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="program.appointment1.location2.address"
            components={{
              book_spazioY: (
                <Book imageMap={SpazioYBookImageMap} altKey="program.bookAlt" />
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
              toSpazioY_1: (
                <FromStation
                  imageMap={ToSpazioYImageMap}
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
        <img
          src={Acquedotto}
          alt={t("program.appointment1.location3.imageAlt")}
        />
      </div>
      <div className={styles.Luoghi}>
        <div>
          <Trans
            i18nKey="program.appointment1.location3.address"
            components={{
              book_Acquedotto: (
                <Book
                  imageMap={AcquedottoBookImageMap}
                  altKey="program.bookAlt"
                />
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
              toAcquedotto_1: (
                <FromStation
                  imageMap={ToAcquedottoImageMap}
                  altKey="program.fromStationAlt"
                />
              ),
            }}
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
      <div className={styles.EventDescription}>
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
              i18nKey="program.appointment2.location8.time_and_name"
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
            components={{ br: <br /> }}
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
                  imageMap={ParcoTorFiscaleFotoImageMap}
                  altKey="program.fotoAlt"
                />
              ),
            }}
          />
        </div>
      </div>

      {/* 🧠 Description */}
      <div className={styles.Orari}>
        <div>{t("program.appointment3.description")}</div>
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
              carousel_luca: (
                <ButtonCarousel
                  images={lucaGrechiImages}
                  className={styles.IconStandard}
                />
              ),
              carousel_maddalena: (
                <ButtonCarousel
                  images={maddalenaScuderoniImages}
                  className={styles.IconStandard}
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
              carousel_lorenza: <ButtonCarousel images={lorenzaRicciImages} />,
              carousel_cristiana: (
                <ButtonCarousel images={cristianaPacchiarottiImages} />
              ),
              carousel_giancarlo: (
                <ButtonCarousel images={giancarloCaracuzzoImages} />
              ),
              carousel_alberto: <ButtonCarousel images={albertoBesiImages} />,
              carousel_davide: <ButtonCarousel images={davideDiTollaImages} />,
              carousel_irma: <ButtonCarousel images={irmaAlonzoImages} />,
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
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.LuoghiVertical}>
        <div>{t("program.appointment5.location1.name")}</div>
        <div className={styles.SimbolMapp}>
          <MapButton mapQuery={t("program.appointment5.location1.mapQuery")}>
            <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
          </MapButton>
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment5.time2"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.LuoghiVertical}>
        <div>{t("program.appointment5.location2.name")}</div>
        <div className={styles.SimbolMapp}>
          <MapButton mapQuery={t("program.appointment5.location2.mapQuery")}>
            <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
          </MapButton>
        </div>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment5.time3"
            components={{ br: <br /> }}
          />
        </div>
      </div>
      <div className={styles.LuoghiVertical}>
        <div>{t("program.appointment5.location1.name")}</div>
        <div className={styles.SimbolMapp}>
          <MapButton mapQuery={t("program.appointment5.location1.mapQuery")}>
            <img src={simbolmapp} alt={t("program.mapSymbolAlt")} />
          </MapButton>
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
            components={{ br: <br /> }}
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
      <div className={styles.Orari}>
        <div>{t("program.appointment6.time1")}</div>
      </div>
      <div className={styles.NameAppuntamento}>
        <p>{t("program.appointment6.name2")}</p>
      </div>
      <div className={styles.Orari}>
        <div>
          <Trans
            i18nKey="program.appointment6.time2"
            components={{
              br: <br />,
              carousel_casaPirri: <ButtonCarousel images={CasaPirriImages} />,
              map1: (
                <span className={styles.SimbolMapp}>
                  <MapButton
                    mapQuery={t("program.appointment6.location1.mapQuery")}
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
        <img src={Pirri2} alt={t("program.appointment7.location1.imageAlt")} />
      </div>
    </div>
  );
};

export default Programma;

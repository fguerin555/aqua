import React from "react";
import App1_IlNuotatore from "../assets/images/App1_IlNuotatore.png";
import App1_IlSatiroDanzante from "../assets/images/App1_IlSatiroDanzante.png";
import App1_Karma from "../assets/images/App1_Karma.png";
import App1_LaPiuLontanaPatria from "../assets/images/App1_LaPiuLontanaPatria.png";
import App1_MurodiSabbia from "../assets/images/App1_MurodiSabbia.png";
import App1_Pryntil from "../assets/images/App1_Pryntil.png";
import App1_SpectralCanticle from "../assets/images/App1_SpectralCanticle.png";
import App1_VoyagedHiver from "../assets/images/App1_VoyagedHiver.png";

// Ajoute ici toutes tes images

import styles from "./FotoFilm.module.css"; // si tu veux styliser

const imageMap = {
  IlNuotatore: App1_IlNuotatore,
  IlSatiroDanzante: App1_IlSatiroDanzante,
  Karma: App1_Karma,
  LaPiuLontanaPatria: App1_LaPiuLontanaPatria,
  MurodiSabbia: App1_MurodiSabbia,
  Pryntil: App1_Pryntil,
  SpectralCanticle: App1_SpectralCanticle,
  VoyagedHiver: App1_VoyagedHiver,
};

const altMap = {
  IlNuotatore: "Image du film Il Nuotatore",
  IlSatiroDanzante: "Image du film Il Satiro Danzante",
  Karma: "Image du film Karma",
  LaPiuLontanaPatria: "Image du film La Piu Lontana Patria",
  MurodiSabbia: "Image du film Murodi Sabbia",
  Pryntil: "Image du film Pryntil",
  SpectralCanticle: "Image du film Spectrale Canticle",
  VoyagedHiver: "Image du film Voyaged d'Hiver",
};

const FotoFilm = ({ imageKey }) => {
  const src = imageMap[imageKey];
  const alt = altMap[imageKey];

  if (!src) return null;

  return (
    <div className={styles.Foto}>
      <img src={src} alt={alt} className={styles.Image} />
    </div>
  );
};

export default FotoFilm;

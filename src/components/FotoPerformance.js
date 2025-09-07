import React from "react";
import LaurentLDW1 from "../assets/images/LaurentLDW1.png";
import MercedesKW1 from "../assets/images/MercedesKW1.png";
import Giancarlo1 from "../assets/images/Giancarlo1.png";
import Lorenza2 from "../assets/images/Lorenza2.png";
import Davide3 from "../assets/images/Davide3.png";
import AlbertoB2 from "../assets/images/AlbertoB2.png";

// Ajoute ici toutes tes images

import styles from "./FotoFilm.module.css"; // si tu veux styliser

const imageMap = {
  MercedesKW1: MercedesKW1,
  LaurentLDW1: LaurentLDW1,
  Giancarlo1: Giancarlo1,
  Lorenza2: Lorenza2,
  Davide3: Davide3,
  AlbertoB2: AlbertoB2,
};

const altMap = {
  MercedesKW1: "Image de la performance de Mercedes Klausner",
  LaurentLDW1: "Image de la performnace de Laurent Le Dneuff",
  Giancarlo1: "Image dessin de BD de Giancarlo Caracuzzo",
  Lorenza2: "Image dessin de BD de Lorenza Ricci",
  Davide3: "Image dessin de BD de Davide Di Tolla",
  AlbertoB2: "Image dessin de BDde Alberto Besi",
};

const FotoPerformance = ({ imageKey }) => {
  const src = imageMap[imageKey];
  const alt = altMap[imageKey];

  if (!src) return null;

  return (
    <div className={styles.Foto}>
      <img src={src} alt={alt} className={styles.Image} />
    </div>
  );
};

export default FotoPerformance;

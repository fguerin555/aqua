import React from "react";
import LaurentLDW1 from "../assets/images/LaurentLDW1.png";
import MercedesKW1 from "../assets/images/MercedesKW1.png";

// Ajoute ici toutes tes images

import styles from "./FotoFilm.module.css"; // si tu veux styliser

const imageMap = {
  MercedesKW1: MercedesKW1,
  LaurentLDW1: LaurentLDW1,
};

const altMap = {
  MercedesKW1: "Image de la performance de Mercedes Klausner",
  LaurentLDW1: "Image de la performnace de Laurent Le Dneuff",
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

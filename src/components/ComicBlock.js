import React from "react";
import FotoPerformance from "./FotoPerformance";
import styles from "./ComicBlock.module.css"; // crée ce fichier CSS

export default function ComicBlock({ imageKey }) {
  return (
    <div className={styles.Container}>
      <FotoPerformance imageKey={imageKey} />
    </div>
  );
}

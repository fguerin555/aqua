import React from "react";
import styles from "./Video.module.css";

export default function VideoPlayer({ src, vertical = false }) {
  return (
    <div
      className={vertical ? styles.VideoWrapperVertical : styles.VideoWrapper}
    >
      <video controls>
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

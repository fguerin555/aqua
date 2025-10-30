import React, { useState } from "react";
import styles from "./SliderNew.module.css";

const ArrowLeft = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
    <span className={styles.arrowIcon}>‹</span>
  </div>
);

const ArrowRight = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.right}`} onClick={onClick}>
    <span className={styles.arrowIcon}>›</span>
  </div>
);

export default function SliderNew({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.sliderWrapper}>
      <ArrowLeft onClick={goLeft} />
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className={styles.slide}>
              <img src={src} alt={`slide-${index}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
      <ArrowRight onClick={goRight} />
    </div>
  );
}

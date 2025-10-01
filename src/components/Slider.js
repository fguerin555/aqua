import React, { useState } from "react";
import styles from "./Slider.module.css";
import PerfLuca01 from "../assets/images/PerfLuca01.png";
import PerfLuca02 from "../assets/images/PerfLuca02.png";
import PerfLuca03 from "../assets/images/PerfLuca03.png";
import PerfLuca04 from "../assets/images/PerfLuca04.png";
import PerfLuca05 from "../assets/images/PerfLuca05.png";
import PerfLuca06 from "../assets/images/PerfLuca06.png";

const photos = [
  PerfLuca01,
  PerfLuca02,
  PerfLuca03,
  PerfLuca04,
  PerfLuca05,
  PerfLuca06,
];

export default function SliderAR() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={goToPrev} className={styles.arrow}>
        ←
      </button>
      <img
        src={photos[currentIndex]}
        alt={`Foto ${currentIndex + 1}`}
        className={styles.sliderImage}
      />
      <button onClick={goToNext} className={styles.arrow}>
        →
      </button>
    </div>
  );
}

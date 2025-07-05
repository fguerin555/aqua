import React, { useState } from "react";
import styles from "./Modal.module.css"; // On réutilise le même CSS pour les boutons de navigation et les images

/**
 * Un composant qui affiche une liste d'images dans un carrousel.
 * Doit être utilisé à l'intérieur du composant Modal.
 * @param {object} props
 * @param {Array<{src: string, alt: string}>} props.images - Le tableau d'images à afficher.
 */
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p>Aucune image à afficher.</p>;
  }

  const goToPrevious = (e) => {
    e.stopPropagation(); // Empêche la modale de se fermer
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    e.stopPropagation(); // Empêche la modale de se fermer
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <button
        onClick={goToPrevious}
        className={`${styles.navButton} ${styles.prevButton}`}
      >
        &#10094;
      </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className={styles.carouselImage}
      />
      <button
        onClick={goToNext}
        className={`${styles.navButton} ${styles.nextButton}`}
      >
        &#10095;
      </button>
      <div className={styles.caption}>{images[currentIndex].alt}</div>
    </>
  );
};

export default Carousel;

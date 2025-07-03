import React, { useState, useEffect } from "react";
import styles from "./CarouselPlan.module.css";
import FromTermini from "../assets/images/FromTermini.png";

const CarouselPlan = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Empêche le scroll de l'arrière-plan quand le carrousel est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Nettoyage au démontage du composant
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!images || images.length === 0) {
    return null; // Ne rien afficher si pas d'images
  }

  const openCarousel = () => {
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeCarousel = () => setIsOpen(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <button onClick={openCarousel} className={styles.triggerButton}>
        {/* 2. Utiliser l'icône importée et lui donner une classe */}
        <img src={FromTermini} alt="" className={styles.triggerIcon} />
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeCarousel}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeCarousel} className={styles.closeButton}>
              &times;
            </button>
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
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselPlan;

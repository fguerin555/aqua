import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import Caroussel from "./Caroussel"; // ton carrousel existant
import modalStyles from "./Modal.module.css";
import stationIcon from "../assets/images/Book.png";

/**
 * Un bouton qui ouvre une modale avec un carrousel d'images
 * @param {object} props
 * @param {Array<object>} props.imageMaps - Liste des objets imageMap par langue
 * @param {string} props.altKey - Clé de traduction pour les textes alternatifs
 */
const BookCarousel = ({ imageMaps, altKey }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Construire le tableau d'images à afficher dans le carrousel
  const images = imageMaps
    .map((map) => {
      const src = map[currentLanguage] || map.en;
      return src ? { src, alt: t(altKey) } : null;
    })
    .filter(Boolean); // retire les entrées nulles

  if (images.length === 0) return null;

  return (
    <Modal
      trigger={
        <button className={modalStyles.triggerButton}>
          <img
            src={stationIcon}
            alt={t(altKey, "")}
            className={modalStyles.triggerIcon}
          />
        </button>
      }
    >
      <Caroussel images={images} />
    </Modal>
  );
};

export default BookCarousel;

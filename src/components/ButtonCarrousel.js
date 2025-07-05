import React from "react";
import Modal from "./Modal"; // On importe notre nouvel assistant
import Caroussel from "./Caroussel"; // On importe le composant qui gère juste le carrousel
import modalStyles from "./Modal.module.css"; // On utilise le CSS consolidé
import oeilIcon from "../assets/images/oeil.png";

/**
 * Ce composant est maintenant beaucoup plus simple !
 * Il utilise Modal pour afficher un Carousel.
 */

const ButtonCaroussel = ({ images }) => {
  if (!images || images.length === 0) {
    return null; // Ne rien afficher si pas d'images
  }

  return (
    <Modal
      trigger={
        <button className={modalStyles.triggerButton}>
          <img
            src={oeilIcon}
            alt="Voir les oeuvres"
            className={modalStyles.triggerIcon}
          />
        </button>
      }
    >
      <Caroussel images={images} />
    </Modal>
  );
};

export default ButtonCaroussel;

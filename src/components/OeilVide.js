import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import modalStyles from "./Modal.module.css";
import stationIcon from "../assets/images/OeilVide.png";

/**
 * Un bouton qui ouvre une modale avec des indications d'itinéraire.
 * @param {object} props
 * @param {object} props.imageMap- La clé de traduction pour le titre de la modale.
 * @param {string} props.alttKey - La clé de traduction pour le contenu de la modale.
 */
const OeilVide = ({ imageMap, altKey }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  // Si les clés ne sont pas fournies, ne rien rendre pour éviter les erreurs.
  const imageSrc = imageMap[currentLanguage] || imageMap.en;
  // Si aucune image n'est trouvée, ne rien rendre.
  if (!imageSrc) {
    return null;
  }

  return (
    <Modal
      trigger={
        <button className={modalStyles.triggerButton}>
          <img
            src={stationIcon}
            alt={t(altKey, "Espace Vide à la place de l'oeil")}
            className={modalStyles.triggerIcon}
          />
        </button>
      }
    >
      <img
        src={imageSrc}
        alt={t(altKey)}
        className={modalStyles.carouselImage}
      />
    </Modal>
  );
};

export default OeilVide;

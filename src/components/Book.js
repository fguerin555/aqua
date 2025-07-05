import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import modalStyles from "./FromStation.module.css";
import stationIcon from "../assets/images/Book.png";

/**
 * Un bouton qui ouvre une modale avec des indications d'itinéraire.
 * @param {object} props
 * @param {object} props.imageMap- La clé de traduction pour le titre de la modale.
 * @param {string} props.alttKey - La clé de traduction pour le contenu de la modale.
 */
const Book = ({ imageMap, altKey }) => {
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
            alt={t(altKey, "Itinéraire depuis la gare")}
            className={modalStyles.triggerIcon}
          />
        </button>
      }
    >
      {/* Affiche directement l'image dans la modale */}
      <img
        src={imageSrc}
        alt={t(altKey)}
        style={{ width: "100%", height: "auto" }}
      />
    </Modal>
  );
};

export default Book;

import React from "react";
import styles from "./MapButton.module.css"; // Importe les styles spécifiques au bouton

const MapButton = ({ mapQuery, buttonText = "mappa", children }) => {
  // Vérifiez que mapQuery est bien une chaîne avant d'encoder
  const query = typeof mapQuery === "string" ? mapQuery : "";
  const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.MapButton} // Utilise la classe du module CSS local
    >
      {children ? children : buttonText}
    </a>
  );
};

export default MapButton;

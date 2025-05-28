import React from "react";
import styles from "./Event.module.css"; // Nouveau fichier CSS pour ce composant
import programStyles from "../pages/ProgrammaFile/Programma.module.css"; // Pour les classes globales comme Appuntamento
import LocationInfo from "../pages/ProgrammaFile/Locationinfo";
import SectionTitle from "../pages/ProgrammaFile/SectionTitle";
import TextBlock from "../pages/ProgrammaFile/TextBlock"; // Pour la description principale de l'événement

const Event = ({ data }) => {
  // Déterminer la classe pour la description principale de l'événement
  // en fonction de l'ID de l'événement ou d'une propriété dans les données
  let eventInfoClassName = programStyles.ProgrammaPageContentA; // Par défaut
  if (data.id === "app2") {
    // Ou une autre logique pour déterminer la classe
    eventInfoClassName = programStyles.ProgrammaPageContentB;
  }
  // Si vous avez ajouté `className` à `eventInfo` dans `programmaData.js`, utilisez-le :
  // const eventInfoClassName = data.eventInfo.className;

  return (
    <div className={styles.eventContainer}>
      <div className={programStyles.Appuntamento}>
        {" "}
        {/* Utilise le style global existant */}
        <p>{data.appuntamentoTitle}</p>
      </div>

      {data.eventInfo && (
        <div className={`${styles.eventMainInfo} ${eventInfoClassName}`}>
          <TextBlock
            content={`${data.eventInfo.title}\n${data.eventInfo.dates}`}
            // Vous pouvez passer une classe spécifique ici si nécessaire pour surcharger TextBlock
          />
        </div>
      )}

      {data.sections.map((section) => {
        if (section.type === "location") {
          return <LocationInfo key={section.id} sectionData={section} />;
        }
        if (section.type === "sectionTitle") {
          return <SectionTitle key={section.id} text={section.text} />;
        }
        // Ajoutez d'autres types de section ici si nécessaire
        return null;
      })}
    </div>
  );
};

export default Event;

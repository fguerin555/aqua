import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

/**
 * Un composant Modal réutilisable qui affiche du contenu par-dessus la page.
 * @param {object} props
 * @param {React.ReactNode} props.trigger - L'élément JSX qui déclenchera l'ouverture de la modale (ex: un bouton).
 * @param {React.ReactNode} props.children - Le contenu à afficher à l'intérieur de la modale.
 */
const Modal = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Clone l'élément déclencheur pour y attacher le gestionnaire d'événements `onClick`.
  const triggerElement = React.cloneElement(trigger, {
    onClick: (e) => {
      openModal();
      // Si le déclencheur original a déjà un `onClick`, on s'assure de l'appeler aussi.
      if (trigger.props.onClick) {
        trigger.props.onClick(e);
      }
    },
  });

  const ModalContent = () => {
    if (!isOpen) return null;

    // Utilise un portail pour rendre la modale à la racine du `body`,
    // ce qui évite les problèmes de z-index et de style.
    return ReactDOM.createPortal(
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
          {children}
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      {triggerElement}
      <ModalContent />
    </>
  );
};

export default Modal;

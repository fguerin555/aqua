// /Users/fredericguerin/Desktop/aqua/src/pages/HomePageFile/HomePage.js
import React from "react";
import styles from "./HomePage.module.css";
import Logo from "../../assets/images/LogoOndaBlue1.jpg";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const Home = () => {
  return (
    <div>
      <div className={styles.HomePage}>
        <div className={styles.BackgroundFoto}>
          <img src={BackgroundFoto} alt="Acqua di fiume con riflessi di luce" />
        </div>
        <div className={styles.HomePageContentA}>
          <p>Il Racconto dell'Acqua</p>
        </div>
        <div className={styles.Logo}>
          <img
            src={Logo}
            alt="Logo - Libro aperto, con onde sulle pagine e nel fondo un viadotto"
          />
        </div>
        <div className={styles.HomePageContentB}>
          <p>
            Il concept si concentra su un’offerta concreta per i pellegrini,
            sull’inclusione sociale, la valorizzazione del territorio e l’arte
            contemporanea per attivare la coesione sociale. Obiettivi
            principali: Coinvolgimento dei pellegrini: attraverso la
            celebrazione di Don Roberto Sardelli con un’opera in suo omaggio e
            un convegno che approfondisca il suo impegno sociale, educativo e
            artistico.
          </p>
          <p>
            Le iniziative sono aperte alla cittadinanza e soprattutto ai
            pellegrini cui si offre un reale momento di riflessione e
            partecipazione al di là di facili stereotipi. Promozione della
            cittadinanza attiva e inclusione sociale: Il progetto coinvolge le
            comunità locali in attività culturali, come laboratori artistici
            nelle scuole, videoproiezioni pubbliche nei pressi degli acquedotti,
            sessioni di pittura e di Intelligenza Artificiale in luoghi
            simbolici del territorio, realizzazione di opere che interpretano
            variamente il tema dell'acqua.Valorizzazione del territorio: I
            Municipi VII e V, ricchi di associazioni culturali e studi
            d’artista, saranno al centro di un dialogo tra artisti, istituzioni
            e comunità, con l’obiettivo di rafforzare l’identità culturale del
            territorio e attrarre residenti e pellegrini del Giubileo 2025.
          </p>
          <p>
            La raccolta e la gestione dei dati del pubblico si svolgerà con
            criteri di trasparenza, fornendo dati verificabili sull’impatto
            sociale, culturale e ambientale; ottimizzazione delle risorse,
            utilizzando strumenti tecnologici e metodologie avanzate per
            massimizzare l’efficacia del monitoraggio; accountability,
            documentando i risultati raggiunti per garantire una rendicontazione
            chiara e replicabile.L’obiettivo è stimolare la partecipazione
            collettiva, valorizzando il patrimonio culturale e creando
            opportunità di scambio tra diverse realtà sociali e culturali.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

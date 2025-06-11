import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Logo from "../../assets/images/LogoAcqua2.png";
import styles from "./BlogPage.module.css";
import BackgroundFoto from "../../assets/images/BackgroundFoto5.png";

const BlogPage = () => {
  const { t } = useTranslation();

  // Vérifications dans la console pour s'assurer que les ressources sont bien chargées
  console.log("Langue actuelle :", i18n.language);
  console.log(
    "Ressources chargées :",
    i18n.getResourceBundle(i18n.language, "translation")
  );
  console.log("Blog pageTitle direct :", t("blog.pageTitle"));

  return (
    <div className={styles.BlogPage}>
      <div className={styles.BackgroundFoto}>
        <img src={BackgroundFoto} alt={t("home.backgroundAlt")} />
      </div>

      <div className={styles.BlogPageTitle}>
        <p>{t("blog.pageTitle")}</p>
      </div>

      <div className={styles.Logo}>
        <img src={Logo} alt={t("navbar.logoAlt")} />
      </div>
    </div>
  );
};

export default BlogPage;

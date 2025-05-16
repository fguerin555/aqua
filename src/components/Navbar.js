import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/HomePage">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

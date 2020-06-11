import React from 'react';
import styles from "./styles.module.scss";
import logo from '../../../assets/images/logo-almundo.svg'


function Layout() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.image} alt="imagen SVG" src={logo} />
    </nav>
  );
}

export default Layout;

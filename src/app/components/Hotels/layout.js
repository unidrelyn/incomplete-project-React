import React from 'react';
import styles from "./styles.module.scss";
import FilterHotels from './components/FilterHotels';
import DescriptionHotels from './components/DescriptionHotels';


function Layout() {
  return (
    <div className={styles.navbar}>
      <FilterHotels />
      <DescriptionHotels />
    </div>
  );
}

export default Layout;

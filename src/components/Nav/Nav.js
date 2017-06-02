import React from 'react';
import styles from './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div id='nav' className={styles.nav}>
        <div className={styles.nameContainer}>
          <a href='#top' className={styles.name}>Benson Ninh</a>
        </div>
        <div className={styles.paths}>
          <a href='#projects' className={styles.path}>Projects</a>
          <a href='#about' className={styles.path}>About</a>
          <a href='#contact' className={styles.path}>Contact Me</a>
        </div>
      </div>
    );
  }
} 

export default Nav;
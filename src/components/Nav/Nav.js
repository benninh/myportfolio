import React from 'react';
import styles from './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.name}>
          <p>Benson Ninh</p>
        </div>
        <div className={styles.paths}>
          <div className={styles.path}>Projects</div>
          <div className={styles.path}>About</div>
          <div className={styles.path}>Contact Me</div>
        </div>
      </div>
    );
  }
} 

export default Nav;
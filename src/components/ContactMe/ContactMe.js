import React from 'react';
import styles from './ContactMe.css';

import Icons from '../Icons/Icons.js';

class ContactMe extends React.Component {
  render() {
    return (
      <div id='contact' className={styles.container}>
        <div className={styles.header}>
          <h2>Let's Connect!</h2>
        </div>
        <div>
          <Icons />
        </div>
        <div className={styles.finePrint}>
          <p>Designed and Developed by Benson Ninh</p>
        </div>
      </div>
    );
  }
} 

export default ContactMe;
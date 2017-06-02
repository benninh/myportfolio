import React from 'react';
import styles from './ContactMe.css';

import Icons from '../Icons/Icons.js';

class ContactMe extends React.Component {
  render() {
    return (
      <div id='contact' className={styles.container}>
        <div className={styles.header}>
          <h2>Contact Me</h2>
        </div>
        <div>
          <Icons />
        </div>
      </div>
    );
  }
} 

export default ContactMe;
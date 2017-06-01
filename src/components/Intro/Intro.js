import React from 'react';
import styles from './Intro.css';

class Intro extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h1>Benson Ninh</h1>
          <h3>Software Engineer</h3>
        </div>
        <div className={styles.links}>
          <h4>RESUME</h4>
          <h4>GITHUB</h4>
          <h4>LINKEDIN</h4>
          <h4>GMAIL</h4>
        </div>
      </div>
    );
  }
} 

export default Intro;
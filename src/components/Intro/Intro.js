import React from 'react';
import styles from './Intro.css';

import Icons from '../Icons/Icons.js';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='top' className={styles.container}>
        <div>
          <h1>Benson Ninh</h1>
          <h2>Software Engineer</h2>
        </div>
        <Icons />
      </div>
    );
  }
} 

export default Intro;
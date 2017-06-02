import React from 'react';
import styles from './Icons.css';

class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var resume = `${styles.icon} fa fa-file-text-o fa-3x`;
    var git = `${styles.icon} fa fa-github fa-3x`;
    var linkedIn = `${styles.icon} fa fa-linkedin-square fa-3x`;
    var gmail = `${styles.icon} fa fa-envelope-o fa-3x`;

    return (
      <div className={styles.container}>
        <div className={styles.links}>
          <div>
            <a href='https://goo.gl/bkQeMw'>
              <i className={resume} aria-hidden='true'></i>
            </a>
            <div className={styles.iconLabel}>Resume</div>
          </div>
          <div>
            <a href='https://github.com/benninh'>
              <i className={git} aria-hidden='true'></i>
            </a>
            <div className={styles.iconLabel}>Github</div>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/benson-ninh-85764780/'>
              <i className={linkedIn} aria-hidden='true'></i>
            </a>
            <div className={styles.iconLabel}>LinkedIn</div>
          </div>
          <div>
            <a href='mailto:bensonninh@gmail.com'>
              <i className={gmail} aria-hidden='true'></i>
            </a>
            <div className={styles.iconLabel}>Gmail</div>
          </div>
        </div>
      </div>
    );
  }
} 

export default Icons;
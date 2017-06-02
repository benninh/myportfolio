import React from 'react';
import styles from './AboutMe.css';
import assets from './AboutMeAssets.js'

class AboutMe extends React.Component {
  render() {    
    return (
      <div id='about' className={styles.container}>
        <div className={styles.header}>
          <h2>About Me</h2>
        </div>
        <div className={styles.container2}>
          <div className={styles.pictureContainer}>
            <img src={assets.selfie} className={styles.picture}/>
          </div>
          <div className={styles.description}>
            <p>{assets.body}</p>
            <p>{assets.bodyContact}</p>
          </div>
        </div>
      </div>
    );
  }
} 

export default AboutMe;


// var body2 = `One of my life's precepts is to "Aspire to be the best me I can be" and I have found software to be a key piece to my best self.`;


// console.log(`Driven software engineer with a strong foundation in web and mobile development. \
// I worked on building multiple application writing client and server JavaScript, building advanced React, React native component based UI, and deploying flexible Node.js web service REST APIs. \
// I enjoy solving challenging problems in innovative ways, while implementing well designed and maintainable code. \
// Passionate about building, learning, and teaching software development. 
// Please feel free to reach out to me at isaachyoon@gmail.com`)
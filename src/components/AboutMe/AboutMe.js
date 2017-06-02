import React from 'react';
import styles from './AboutMe.css';

class AboutMe extends React.Component {
  render() {
  
    var body1 = `\
    Software Engineer specialized in developing Full Stack applicatons. \
    My expertise lies in developing React applications with a NodeJS/Express web service, \
    and in SQL/noSQL databases like MySQL, MongoDB, and Google Firebase. \
    I view software as a key component to finding and building practical solutions to modern day problems.`;

    var selfie = `https://firebasestorage.googleapis.com/v0/b/web-portfolio-52c16.appspot.com/o/images%2Fselfie2015.jpg?alt=media&token=0c0a2e5f-e0a3-479d-9293-776a0e6d0d40`;
    
    return (
      <div id='about' className={styles.container}>
        <div className={styles.pictureContainer}>
          <img src={selfie} className={styles.picture}/>
        </div>
        <div className={styles.description}>
          <p>{body1}</p>
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
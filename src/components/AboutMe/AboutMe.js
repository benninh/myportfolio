import React from 'react';
import styles from './AboutMe.css';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>{body1}</p>
        <p>{body2}</p>
      </div>
    );
  }
} 

export default AboutMe;

var body1 = `\
Welcome to my web portfolio! My name Benson Ninh. \
I am a Software Engineer specialized in developing Full Stack applicatons. \
My expertise lies in developing React applications with a NodeJS/Express web service, \
and in SQL/noSQL databases like MySQL, MongoDB, and Google Firebase. \
I view software as a key component to finding and building practical solutions to modern day problems.`;

var body2 = `One of my life's precepts is to "Aspire to be the best me I can be" and I have found software to be a key piece to my best self.`;


// console.log(`Driven software engineer with a strong foundation in web and mobile development. \
// I worked on building multiple application writing client and server JavaScript, building advanced React, React native component based UI, and deploying flexible Node.js web service REST APIs. \
// I enjoy solving challenging problems in innovative ways, while implementing well designed and maintainable code. \
// Passionate about building, learning, and teaching software development. 
// Please feel free to reach out to me at isaachyoon@gmail.com`)
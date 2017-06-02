import React from 'react';
import styles from './App.css';

import Nav from '../Nav/Nav.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Projects from '../Projects/Projects.js';
import ContactMe from '../ContactMe/ContactMe.js';
import Intro from '../Intro/Intro.js';

class App extends React.Component {
  render() {
    return (
      <div id='app' className={styles.app}>
        <Nav />
        <Intro />
        <Projects />
        <AboutMe />
        <ContactMe />
      </div>
    );
  }
} 

export default App;
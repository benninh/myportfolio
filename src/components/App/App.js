import React from 'react';
import styles from './App.css';

import Nav from '../Nav/Nav.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Projects from '../Projects/Projects.js';
import ContactMe from '../ContactMe/ContactMe.js';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Nav />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    );
  }
} 

export default App;
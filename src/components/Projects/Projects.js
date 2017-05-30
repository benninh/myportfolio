import React from 'react';
import styles from './Projects.css';

import ProjectImage from '../ProjectImage/ProjectImage.js';
import projectList from './projectList.js';

class Projects extends React.Component {
  render() {
    
    var projectDescriptions = projectList.map((project, index) => {
      return (
        <div className={styles.container} key={index}>
          <div className={styles.project}>
            <div className={styles.image}>
              <ProjectImage project={project}/>
            </div>
            <div className={styles.details}> 
              <h3>{project.projectTitle}</h3>
              <h3>description</h3>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className={styles.header}>
          <h2>Software Projects</h2>
        </div>
        <div>
          {projectDescriptions}
        </div>
      </div>
    );
  } 
} 

export default Projects;
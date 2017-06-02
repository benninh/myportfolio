import React from 'react';
import styles from './Projects.css';

import ProjectImage from '../ProjectImage/ProjectImage.js';
import projectList from './projectList.js';

class Projects extends React.Component {
  render() {
    var tools = `${styles.tools} fa fa-wrench fa-2x`
    var projectDescriptions = projectList.map((project, index) => {
      return (
        <div className={styles.container} key={index}>
          <div className={styles.project}>
            <div className={styles.image}>
              <ProjectImage project={project}/>
            </div>
            <div className={styles.details}>
              <div className={styles.title}><h3>{project.titleDisplay}</h3></div>
              <p>{project.projectDescription}</p>
              <div className={styles.techStack}>
                <i className={tools}></i>
                {project.techStack.map((tech, index) => {
                  return (
                    <div className={styles.tech} key={index}>
                      {tech}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div id='projects'>
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
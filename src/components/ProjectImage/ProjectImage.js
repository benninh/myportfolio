import React from 'react';
import styles from './ProjectImage.css';
import firebaseApp from './../../firebase.js';

import projectImages from './imgURLs';

class ProjectImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectInfo: this.props.project,
      title: this.props.project.projectTitle,
      currentImage: 0
    }
  }

  handleImageForward = () => {
    var image = projectImages[this.state.title];
    var current = this.state.currentImage;
    if (image[current + 1]) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
  }

  handleImageBack = () => {
    var image = projectImages[this.state.title];
    var current = this.state.currentImage;
    if (image[current - 1]) {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    } else {
      this.setState({
        currentImage: image.length - 1
      });
    }
  }

  render() {
    var image = projectImages[this.state.title][this.state.currentImage];
    var placeHolderImg = 'https://img.fireden.net/a/image/1445/89/1445897362069.jpg';

    return (
      <div className={styles.container}>
        <div className={styles.imageDiv}>
          <img src={image ? image : placeHolderImg} className={styles.image}/>
        </div>
        <div className={styles.arrows}>
          <div>
            <i className='fa fa-arrow-circle-left fa-2x' aria-hidden='true' onClick={this.handleImageBack}></i>
          </div>
          <div>
            <i className='fa fa-arrow-circle-right fa-2x' aria-hidden='true' onClick={this.handleImageForward}></i>
          </div>
        </div>
      </div>
    );
  }
} 

export default ProjectImage;
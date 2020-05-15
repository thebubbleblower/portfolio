import React, { Component } from 'react';

class Projects extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selectedProject: "",
    }
    
  }
  render() {
    return <div id="projectSection">
      <div>
        <h2>
          Projects
        </h2>
      </div>
      <div className="projects">
        <div>
          <h4>Dot-Eater</h4>
          <div className="project-image" id="doteater">
            <img className="static" src="../../public/assets/pacman.png"/>
            <img className="moving" src="../../public/assets/doteater2.gif"/>
          </div>
          {/* <button><a href="http://dot-eater.herokuapp.com/" target="_blank">Live Version</a></button>
          <button><a href="https://github.com/Team-Blade/Capstone-Project" target="_blank">View Code on Github</a></button> */}
        </div>
        <div>
          <h4>Weather Pet</h4>
          <div className="project-image" id="weatherpet">
            <img className="static" src="../../public/assets/weatherpetrain.png"/>
            <img className="moving" src="../../public/assets/weatherpet.gif"/>
          </div>
        </div>
        <div>
          <h4>Twilight Gems Shop</h4>
          <div className="project-image" id="shop">
            <img className="static" src="../../public/assets/ecommerce.png"/>
            <img className="moving" src="../../public/assets/shop.gif"/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Projects;
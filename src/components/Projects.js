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
      <div className="all-projects">
        <div className="project">
          <h4>WEATHER PET</h4>
          <div className="project-image" id="weatherpet">
            <img className="moving" src="../../public/assets/weatherpet.gif"/>
            <img className="static" src="../../public/assets/weatherpetrain.png"/>
          </div>
          <div className="short-description">JAVASCRIPT WEATHER ILLUSTRATION</div>
        </div>
        <div className="project">
          <h4>DOT-EATER</h4>
          <div className="project-image" id="doteater">
            <img className="moving" src="../../public/assets/doteater2.gif"/>
            <img className="static" src="../../public/assets/pacman.png"/>
          </div>
          <div className="short-description">REALTIME MULTIPLAYER ONLINE VERSION OF PAC-MAN BATTLE ROYALE</div>
          {/* <button><a href="http://dot-eater.herokuapp.com/" target="_blank">Live Version</a></button>
          <button><a href="https://github.com/Team-Blade/Capstone-Project" target="_blank">View Code on Github</a></button> */}
        </div>
        <div className="project">
          <h4>TWILIGHT GEMS SHOP</h4>
          <div className="project-image" id="shop">
            <img className="moving" src="../../public/assets/shop.gif"/>
            <img className="static" src="../../public/assets/ecommerce.png"/>
          </div>
          <div className="short-description">SCALABLE E-COMMERCE SITE</div>
        </div>
      </div>
    </div>
  }
}

export default Projects;
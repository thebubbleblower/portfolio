import React from 'react';
import Popup from 'reactjs-popup';
import Resume from "./Resume.js"

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.showResume = this.showResume.bind(this);
    this.hideResume = this.hideResume.bind(this);
  }

  showResume() {
    this.setState({show: true});
    console.log(this)
  }

  hideResume() {
    this.setState({show: false});
  }

  render() {
    return <div className="nav">
      <button onClick={this.showResume}>
        Resume
      </button>
      <button>
        About
      </button>
      <Popup open={this.state.show} 
            closeOnDocumentClick onClose={this.hideResume} 
            contentStyle={{border:"none", padding:"none", background:"none"}}
            >
        <Resume />
      </Popup>
    </div>
  }
}

export default Nav;
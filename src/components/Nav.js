import React from 'react';
import Popup from 'reactjs-popup';
import Resume from "./Resume.js";

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      status: 'not-selected'
    }
    this.showResume = this.showResume.bind(this);
    this.hideResume = this.hideResume.bind(this);
  }

  showResume() {
    this.setState({show: true, status: 'selected'});
  }

  hideResume() {
    this.setState({show: false, status: 'not-selected'});
  }

  render() {
    return <div className="nav">
      <button onClick={this.showResume} className={this.state.status}>
        Resume
      </button>
      {/* <button>
        About
      </button> */}
      <Popup open={this.state.show} 
            closeOnDocumentClick onClose={this.hideResume} 
            contentStyle={{border:"none", padding:"none", background:"none", width:"50px"}}
            >
            {/* <a href="../../public/assets/CarmenWen_Resume_(Official).pdf" target="blank"> */}
              <Resume />
            {/* </a> */}
      </Popup>
    </div>
  }
}

export default Nav;
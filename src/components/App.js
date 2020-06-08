import React, { Component } from 'react';
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Nav from "./Nav";

const App = () => {
    return <div className="main-app">
        <h1>Carmen</h1>
        <h2>software developer</h2>
        {/* <div id="greetings">01110000 01100101 01100101 01101011 00101101 01100001 00101101 01100010 01101111 01101111 00100001 00001010 00001010 01000001 01110010 01100101 01101110 00100111 01110100 00100000 01111001 01101111 01110101 00100000 01100001 00100000 01100011 01110101 01110010 01101001 01101111 01110101 01110011 00100000 01101111 01101110 01100101 00111111 00001010 00001010 00111011 00101001 </div> */}
        <Projects />
        <Nav />
    </div>
}

export default App;
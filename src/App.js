import React, { Component } from "react";
import Loginpage from "./loginpage";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Appw">
        <Loginpage />
      </div>
    );
  }
}

export default App;

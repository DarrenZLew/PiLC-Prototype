import React, { Component } from "react";
import GlobalHeader from "./components/GlobalHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <GlobalHeader />
      </div>
    );
  }
}

export default App;

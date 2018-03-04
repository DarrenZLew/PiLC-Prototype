import React, { Component } from "react";
import { GlobalHeader } from "./components/GlobalHeader";
import Components from "./components/Components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div className="App">
        <GlobalHeader />
        <Components />
      </div>
    );
  }
}

export default App;

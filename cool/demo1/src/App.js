import React, { Component } from 'react'
import User from "./components/User"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <User/>
      </div>

    );
  }
}

export default App;
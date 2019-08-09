import React, { Component } from 'react'
import Top from "./components/Top";
import Bottom from "./components/Bottom"
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Top />
        <Bottom />
      </div>
    );
  }
}

export default App;



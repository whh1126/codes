import React, { Component } from 'react';
import Top from "./components/Top";
import Bot from "./components/Bot"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Top></Top>   
        <Bot></Bot>
      </div>
      
    );
  }
}

export default App;
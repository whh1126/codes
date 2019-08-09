import React, { Component } from 'react'
import Top from "./components/Top";
import Bottom from "./components/Bottom"
//  import Swipers from "./components/Swipers"
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
        <Top add={(obj) => {
          this.setState({
            list: [...list, obj]
          },()=>{
            console.log(this.state.list)
          })
        }} />
        <Bottom list={list} />
        {/* <Swipers /> */}
      </div>
    );
  }
}

export default App;



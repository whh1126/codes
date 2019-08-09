import React, { Component } from 'react'
import Left from "./components/Left"
import Right from "./components/Right"
import "./components/style.css"
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }
  render() {
    const {list}=this.state
    return (
      <div className="App">
        <div className="content">
          {/* 从最外面的app传给数据 */}
          <Left list={list}></Left>
          <Right list={list}></Right>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get('/api/list').then((res) => {
      this.setState({
        list: res.data.data
      })
    })
  }
}
export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom"
import Home from './views/Home';
import List from './views/List';
import "./style.css"
// import Router from "./routers"
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <div>
      //    <Router></Router>
      // </div>
      <BrowserRouter>
        <Route path="/list" component={List} exact></Route>
        <Route path="/" component={Home} exact></Route>
        <div>
          <NavLink to="/list" activeClassName="active">列表</NavLink>
          {/* <NavLink to="/" activeClassName="active">首页</NavLink> */}
          <NavLink to="/" activeStyle={{ color:'skyblue'}}>首页</NavLink>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
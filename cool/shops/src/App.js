import React from 'react';
import Home from "./pages/Home";
import { BrowserRouter, Route, NavLink, Switch, Redirect } from "react-router-dom"
import Order from './pages/Order';
import Shop from './pages/Shop';
import My from './pages/My';
import "./pages/home.css";
import './App.css';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/order' component={Order}></Route>
        <Route path='/shop' component={Shop}></Route>
        <Route path="/my" component={My}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
      <div className="footer-nav">
        <div> <NavLink to="/order">订单</NavLink></div>
        <div>
          <NavLink to="/shop">购物</NavLink>
        </div>
        <div>
          <NavLink to="/my">我的</NavLink>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

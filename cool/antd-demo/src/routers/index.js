import React from 'react'
import { BrowserRouter, Redirect, Route, Switch, NavLink } from "react-router-dom";
import Home from "../views/home"
import Options1 from '../views/options1';
import Options2 from '../views/options2';
import User from '../views/user';
import Tema from '../views/tema';
function MyRouter() {
    return <BrowserRouter>
        <Switch>
           
            <Route path="/options1" component={Options1}></Route>
            <Route path="/options2" component={Options2}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/tema" component={Tema}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect from="/" to="/home"></Redirect>
        </Switch>
        <div>
            <NavLink to="/user">用户</NavLink>
            <NavLink to="/options1">选项1</NavLink>
            <NavLink to="/options2">选项2</NavLink>
            <NavLink to="/tema">团队</NavLink>
            <NavLink to="/home">首页</NavLink>
        </div>
    </BrowserRouter>
}
export default MyRouter
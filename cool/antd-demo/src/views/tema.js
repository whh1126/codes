import React, { Component } from 'react'
import { Switch, Redirect, Route, NavLink } from "react-router-dom"
import Shoplist from './shoplist';
import Order from './order';
export default class Tema extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/tema/shoplist" component={Shoplist}></Route>
                    <Route path="/tema/order" component={Order}></Route>
                    <Redirect from="/tema" to="/tema/shoplist"></Redirect>
                </Switch>
                <div>
                    <NavLink to="/tema/order">订单管理</NavLink>
                </div>
            </div>
        )
    }
}

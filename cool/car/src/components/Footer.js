
import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/shop">购物</NavLink>
                <NavLink to="/my">我的</NavLink>
                <NavLink to="/home">首页</NavLink>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Head extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="header">
                    <NavLink to="/home"> 首页</NavLink>
                    <span></span>
                    <span></span>
                    <NavLink to="/login">登录</NavLink>
                    <NavLink to="/resign">注册</NavLink>
                </div>
            </div>
        )
    }
}

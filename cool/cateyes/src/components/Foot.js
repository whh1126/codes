import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class Foot extends Component {
    render() {
        return (
            <div className="footer-nav">
                <NavLink to="/movie">电影</NavLink>
                <NavLink to="/cimea">影院</NavLink>
                <NavLink to="/my">我的</NavLink>
            </div>
        )
    }
}

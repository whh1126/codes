
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/exam">答题考试</NavLink>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import Routerview from "../route/routerview";
import routers from "../route/routerConfig";
import "../components/style.css"
// import Head from "../components/Head"
export default class Fd extends Component {
    render() {
        let { child } = this.props
        return (
            <div className="footer-nav">
             {/* <Head></Head>    */}
                <div>
                    <NavLink to="/dong">动态</NavLink>
                </div>
                <div>
                    <NavLink to="/tui">推荐</NavLink>
                </div>
                <Routerview routers={child} ></Routerview>
            </div>
        )
    }
}
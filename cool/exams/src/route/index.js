import { BrowserRouter, Redirect, Route, NavLink } from "react-router-dom";
import React from 'react';
import "../components/style.css";
import Routerview from "../route/routerview";
import routers from "../route/routerConfig";
function MyRouter() {
    return <BrowserRouter>
        <ul className="uls">
            <li>
                <NavLink to="/fd">沸点</NavLink>
            </li>
            <li>
                <NavLink to="/ku">开源库</NavLink>
            </li>
            <li>
                <NavLink to="/small">小册</NavLink></li>
            <li>
                <NavLink to="/actived">活动</NavLink>
            </li>
            <li>
                <NavLink to="/login">登录</NavLink>
            </li>
            <li>
                <NavLink to="/resign">注册</NavLink>
            </li>
            <li>   <Redirect from="/" to="/home">首页</Redirect>  </li>
        </ul>
        <Routerview routers={routers} ></Routerview>
    </BrowserRouter>
}
export default MyRouter
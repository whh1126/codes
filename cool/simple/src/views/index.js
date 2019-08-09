import React, { Component } from 'react'
import Head from "../components/Head";
import Find from "./find";
import Forum from "./forum";
import Oldcar from "./oldcar"
import Home from "./home";
import Server from "./server"
import { Switch, Redirect, Route } from "react-router-dom"
export default class Index extends Component {
    render() {
        return (
            <div className="wrap">
                <Head></Head>
                <section>
                    <Switch>
                        <Route path="/index/forum" component={Forum}></Route>
                        <Route path="/index/home" component={Home}></Route>
                        <Route path="/index/find" component={Find}></Route>
                        <Route path="/index/oldcar" component={Oldcar}></Route>
                        <Route path="/index/server" component={Server}></Route>
                        <Redirect from="/index" to="/index/home"></Redirect>
                    </Switch>
                </section>
            </div>
        )
    }
}

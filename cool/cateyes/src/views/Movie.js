import React, { Component } from 'react'
import Head from "../components/Head"
import Foot from "../components/Foot";
import { NavLink, Route } from "react-router-dom"
import Hot from '../views/Hot';
import Will from '../views/Will';
export default class Movie extends Component {
    render() {
        console.log(this.props)//以render回调方式解构props取出history
        let { history } = this.props
        return (
            <div className="wrap">
                <Head />
                <section>
                    <div className="content">
                        <span onClick={this.handleCity.bind(this,history)}>城市</span>
                        <span onClick={() => {
                            history.push('/search')
                        }} >搜索</span>
                    </div>
                    <div className="jump">
                        <NavLink to="/movie/hot" activeClassName="active">正在热映</NavLink>
                        <NavLink to="/movie/will" activeClassName="active">即将上映</NavLink>
                    </div>
                    <div className="viewss">
                        <Route path="/movie/hot" component={Hot}></Route>
                        <Route path="/movie/will" component={Will}></Route>
                    </div>
                </section>
                <Foot />
            </div>
        )
    }
    handleCity(history){
        //把history以第二个参数传过来
        console.log(history)
        history.push('/city')


    }
}

import React from 'react';
import Loadable from "react-loadable";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
const Loading = () => {
    return <div>
        <img src={require('../img/loading.gif')} alt="" />
    </div>
}
const Home = Loadable({
    loader: () => import('../views/home'),
    loading: Loading
})
const Exam = Loadable({
    loader: () => import('../views/exam'),
    loading: Loading
})

function MyRoter() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/exam" component={Exam} />
            <Redirect from="/" to="/home" />
        </Switch>
    </BrowserRouter>
}
export default MyRoter
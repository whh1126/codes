import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Index from "../views/index"
import Search from '../views/search';
import My from "../views/my";
import Login from "../views/login";

function MyRouter() {
    return <BrowserRouter>
        <Switch>
            <Route path="/search" component={Search}></Route>
            <Route path="/index" component={Index}></Route>
            <Route path="/my" component={My}></Route>
            <Route path="/login" component={Login}></Route>
            <Redirect from="/" to="/index"></Redirect>
        </Switch>
    </BrowserRouter>

}
export default MyRouter
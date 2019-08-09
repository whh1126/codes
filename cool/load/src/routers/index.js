import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from "react-router-dom"
// import Home from '../views/home';
// import My from '../views/my';
// import Login from '../views/login';
// import Old from '../views/old';
import routers from "./routerConfig";
import RouterViews from "./routerviews"
console.log(routers)
function MyRouter() {
    return <BrowserRouter>
        {/* <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/my" component={My}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/old" component={Old}></Route>
            <Redirect from="/" to="/home"></Redirect>
        </Switch> */}
        <RouterViews routers={routers}></RouterViews>
      
    </BrowserRouter>
}
export default MyRouter
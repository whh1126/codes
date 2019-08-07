import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Movie from '../views/Movie';
import Cimea from '../views/Cimea';
import My from '../views/My';
import City from '../views/City';
import Search from '../views/Search';
import routers from "./router.config";
import RouterView from "./routerview"
console.log(routers)

// import Detail from "../views/Detail"
function MyRouter() {
    return <BrowserRouter>
        <Switch>
            {
                <RouterView routers={routers} />
            }
            {/* <Route path="/movie" component={Movie}></Route>
            <Route path="/cimea" component={Cimea}></Route>
            <Route path="/my" component={My}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/search" render={(props)=>{
                console.log(props)
                return <Search {...props} />
            }}></Route>
            <Route path="/detail:id" render={(props) => {
                console.log(props)
                return <div>详情{props.match.params.id}</div>

            }}></Route>
            <Redirect from="/" to="/movie"></Redirect> */}
        </Switch>
    </BrowserRouter>
}
export default MyRouter
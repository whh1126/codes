import React from 'react';
import routers from "./routerConfig";
import { Switch, Redirect, Route } from "react-router-dom"
function Routerview(props) {
    let { routers } = props;
    let routeArr = routers && routers.filter((item, index) => !item.redirect)
    let redirectArr = routers
        && routers.filter((item, index) =>
            item.redirect).map((item, index) => <Redirect
                key={item.path} from={item.path} to={item.redirect} />)
    return <Switch>
        {
            routeArr && routeArr.map((item, index) =>
                <Route key={index}
                    path={item.path}
                    render={(props) => {
                        return <item.component {...props} child={item.children} />
                    }}
                />).concat(redirectArr)
        }
    </Switch>
}
export default Routerview
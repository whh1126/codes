import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom"
function RouterViews(props) {
    let { routers } = props;
    let routeArr = routers && routers.filter(item => !item.redirect);
    let redirectArr = routers && routers.filter(item => item.redirect).map((item, index) => (
        <Redirect key={index} from={item.path} to={item.redirect} />
    )) 
    return <Switch>
        {
            routeArr && routeArr.map((item, index) => (
                <Route path={item.path} key={index} render={(props) => {
                    return <item.component {...props} child={item.children} />
                }} />
            )).concat(redirectArr)
        }
    </Switch>
}
export default RouterViews
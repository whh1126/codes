import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom"
import routers from "../route/routerConfig";
function Routerview(props) {
    let { routers } = props;
    let routerArr = routers && routers.filter(item => !item.redirect)
    let redirectArr = routers && routers.filter(item => item.redirect).map((item, index) => {
        return <Redirect key={index} from={item.path} to={item.redirect} />
    })
    return <Switch>
        {
            routerArr && routerArr.map((item, index) =>
                <Route
                    key={index}
                    path={item.path}
                    render={(props) => {
                        return <item.component {...props} child={item.children} />
                    }}
                ></Route>
            ).concat(redirectArr)
        }
    </Switch>
}
export default Routerview
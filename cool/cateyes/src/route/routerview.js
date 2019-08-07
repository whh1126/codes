import React from 'react'
import { Switch, Redirect, Route } from "react-router-dom";
function RouterViews(props) {
    console.log(props)
    let { routers } = props;
    //查找的是所有不包含重定向的路由
    let routeArr = routers.filter(item => !item.redirect)
    //查找的是有重定向的路由
    let redriectArr = routers.filter(item => item.redirect).map((item, index) =>
        <Redirect
            key={index}
            from={item.path}
            to={item.redirect}
        />
    )
    //二级路由
    return <Switch>
        {
            routeArr && routeArr.map((item, index) =>
                <Route key={index} path={item.path} render={(props) => {
                    return <item.component {...props} child={item.children} />
                }}></Route>
            ).concat(redriectArr)
        }
    </Switch>
}
export default RouterViews
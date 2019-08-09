import React from 'react';
import { BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import Business from '../views/business';
import Evaluate from '../views/evaluate';
import Food from '../views/food';
function MyRouter() {
    return <BrowserRouter>
        <Switch>
            <Route path="/business" component={Business}></Route>
            <Route path="/evaluate" component={Evaluate}></Route>
            <Route path="/food" component={Food}></Route>
            <Redirect from="/" to="/food"></Redirect>
        </Switch>
        
       
    </BrowserRouter>

}
export default MyRouter
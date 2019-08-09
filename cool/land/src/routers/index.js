import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import List from '../views/List';
import Home from '../views/Home';
function MyRouter() {
    return <BrowserRouter>
        <Route path="/list" component={List} exact></Route>
        <Route path="/" component={Home} exact></Route>
        {/* <div className="router">figting</div> */}
    </BrowserRouter>
}
export default MyRouter

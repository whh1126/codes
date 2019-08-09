import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routerview from "./routerviews";
import routers from "./routerConfig";
function MyRouter() {
    return <BrowserRouter>
        <Routerview routers={routers}></Routerview>
    </BrowserRouter>
}
export default MyRouter
import Fd from "../views/Fd";
import Ku from "../views/Ku";
import Small from "../views/Small";
import Actived from "../views/Actived";
import Home from "../views/Home";
import Dong from "../views/Dong"
import Tui from "../views/Tui"
import Login from "../views/Login";
import Resign from "../views/Resign";
const routers = [{
    path: "/fd",
    component: Fd,
    children: [{
        path: "/fd/dong",
        component: Dong
    }, {
        path: "/fd/tui",
        component: Tui
    }, {
        path: "/fd",
        redirect: "/fd/dong"
    }]
}, {
    path: "/ku",
    component: Ku
}, {
    path: "/small",
    component: Small
}, {
    path: "/actived",
    component: Actived
}, {
    path: "/home",
    component: Home
}, {
    path: "/login",
    component: Login
}, {
    path: "/resign",
    component: Resign
}, {
    path: "/",
    redirect: Home
}]
export default routers
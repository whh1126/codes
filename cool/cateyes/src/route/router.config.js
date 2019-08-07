import Movie from "../views/Movie";
import My from "../views/My";
import City from "../views/City";
import Cimea from "../views/Cimea";
import Search from "../views/Search";
import Will from "../views/Will";
import Hot from "../views/Hot";
import Detail from "../views/Detail";
import Login from "../views/Login";
const routers = [{
    path: "/movie",
    component: Movie,
    children: [{
        path: "/movie/will",
        component: Will
    }, {
        path: "/movie/hot",
        component: Hot
    }]
}, {
    path: "/My",
    component: My
}, {
    path: "/city",
    component: City
}, {
    path: "/cimea",
    component: Cimea
}, {
    path: "/search",
    component: Search
}, {
    path: "/",
    redirect: "/movie"
}, {
    path: "/detail",
    component: Detail
}, {
    path: "/login",
    component: Login
}]
export default routers
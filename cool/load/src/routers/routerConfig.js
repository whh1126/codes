import Home from '../views/home';
import My from '../views/my';
import Old from '../views/old';
import Detail from '../views/detail';
import Oldcar from "../views/oldcar"
import Server from '../views/server';
import Search from '../views/search';
import Login from "../views/login"
const routers = [{
    path: "/home",
    component: Home,
    children: [{
        path: "/home/oldcar",
        component: Oldcar
    }, {
        path: "/home/server",
        component: Server
    }, {
        path: "/home",
        redirect: "/home/oldcar"
    }]
},
{
    path: "/old",
    component: Old
},{
    path: "/login",
    component: Login
},
{
    path: "/detail/:id",
    component: Detail
},
{
    path: "/my",
    component: My
},
{
    path: "/search",
    component: Search
},
{
    path: '/',
    redirect: '/home'
}]
export default routers

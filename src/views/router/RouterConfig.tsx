import Login from "../pages/login/Login";
import Home from './../pages/home/Home';

const routerConfig = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home/>
    }
];

export default routerConfig;
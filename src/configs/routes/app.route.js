import PublicHomeContainer from "../../containers/publicHome";
import Login from "../../views/public/login";
import Register from "../../views/public/register";

export const PublicRoutes = [
    {
        name: 'Home',
        key: 'home',
        path: '/',
        element: <PublicHomeContainer/>
    },
    {
        name: 'Login',
        key: 'login',
        path: '/login',
        element: <Login/>
    },
    {
        name: 'Register',
        key: 'register',
        path: '/register',
        element: <Register/>
    }
]
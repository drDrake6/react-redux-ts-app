import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
//import Login from "../pages/Login";
//import PostIdPage from "../pages/PostIdPage";
//import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: <About/>},
    {path: '/posts', component: <Posts/>},
    {path: '/', component: <Posts/>},
    {path: '/posts/:id', component: <PostIdPage/>},
    {path: '/*', component: <Error/>},
]

export const publicRoutes = [
    //{path: '/login', component: <Login/>},
]
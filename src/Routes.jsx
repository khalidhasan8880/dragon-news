import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Category from "./Category/Category";
import NewsContent from "./NewsContext/NewsContent";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Terms from "./Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch(`https://dragon-news-server-three-dun.vercel.app/news`)
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-three-dun.vercel.app/category/${params.id}`)
            },
        ]
    },
    {
        path: '/news/:id',
        element: <PrivetRoute><NewsContent></NewsContent></PrivetRoute>,
        loader: ({params})=> fetch(`https://dragon-news-server-three-dun.vercel.app/news/${params.id}`)
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/register',
        element:<Register/>
    },
    {
        path: '/terms&conditions',
        element:<Terms></Terms>
    },
])

export default router
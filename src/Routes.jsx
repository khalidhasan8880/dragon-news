import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Category from "./Category/Category";
import NewsContent from "./NewsContext/NewsContent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/home',
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    },
    {
        path: '/news/:id',
        element: <NewsContent></NewsContent>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
    }
])

export default router
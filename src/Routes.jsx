import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
        ]
    }
])

export default router
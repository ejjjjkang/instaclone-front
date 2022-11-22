import { createBrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import About from "./screens/About"
import Root from "./Root"
import NotFound from "./screens/NotFound";
import Login from "./screens/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "",
                        element: <Login />,

                    },
                ],
            },
            {
                path: "about",
                element: <About />,
            },   
        ],
        errorElement: <NotFound />
    },
]);

export default router;
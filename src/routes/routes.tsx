import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/admin",
        element: <App/>,
        children: adminPaths
    },
    {
        path: "/faculty",
        element: <App/>,
        children: adminPaths
    },
    {
        path: "/student",
        element: <App/>,
        children: adminPaths
    },
])

export default router
import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import {  adminPaths} from "./admin.routes";
import { routeGenerator } from "../utiles/routesGenerator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/admin",
        element: <App/>,
        children: routeGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App/>,
        // children: adminRoutes
    },
    {
        path: "/student",
        element: <App/>,
        // children: adminRoutes
    },
])

export default router
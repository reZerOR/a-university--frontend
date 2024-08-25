import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import {  adminPaths} from "./admin.routes";
import { routeGenerator } from "../utiles/routesGenerator";
import { facultyPaths } from "./faculty.routes";
console.log(routeGenerator(facultyPaths));


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
        children: routeGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App/>,
        // children: adminRoutes
    },
])

export default router
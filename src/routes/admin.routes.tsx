import { RouteObject } from "react-router-dom";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateStudent from "../pages/Student/CreateStudent";
import CreateFaculty from "../pages/Faculty/CreateFaculty";

export const adminPaths: RouteObject[] = [
    {
        path: "dasboard",
        element: <CreateAdmin/>
    },
    {
        path: 'create-student',
        element: <CreateStudent/>
    },
    {
        path: 'create-admin',
        element: <CreateAdmin/>
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty/>
    },
]
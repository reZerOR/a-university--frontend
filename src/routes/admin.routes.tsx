import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateStudent from "../pages/Student/CreateStudent";
import CreateFaculty from "../pages/Faculty/CreateFaculty";
import { TNav } from "../types";

export const adminPaths: TNav[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <CreateAdmin />,
  },
  {
    name: "User Managment",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

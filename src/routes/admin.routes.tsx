import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateStudent from "../pages/Student/CreateStudent";
import CreateFaculty from "../pages/Faculty/CreateFaculty";
import { Children, ReactNode } from "react";
import { NavLink, RouteObject } from "react-router-dom";
import { MenuProps } from "antd";
type TLink = {
  name: string;
  path?: string;
  element?: ReactNode;
};

interface TNav extends TLink {
  children?: TLink[];
}

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

export const adminRoutes: RouteObject[] = adminPaths.reduce(
  (acc: RouteObject[], item: TNav) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({ path: child.path as string, element: child.element });
      });
    }
    return acc;
  },
  []
);

export const adminNav = adminPaths.reduce((acc, item)=>{
    if(item.name && item.path){
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }

    if(item.children){
        acc.push({
            key: item.name,
            label: item.name,
        children: item.children.map((child)=>({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
        })
    }

    return acc
}, [])

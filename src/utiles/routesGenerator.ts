import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
type TLink = {
    name: string;
    path?: string;
    element?: ReactNode;
  };
  
  interface TNav extends TLink {
    children?: TLink[];
  }
export const routeGenerator = (items: TNav[]) =>{
    const routes: RouteObject[] = items.reduce(
        (acc: RouteObject[], item) => {
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
      return routes
}
import { RouteObject } from "react-router-dom";
import { TNav } from "../types";
export const routeGenerator = (items: TNav[]) => {
  const routes: RouteObject[] = items.reduce((acc: RouteObject[], item) => {
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
  }, []);
  return routes;
};

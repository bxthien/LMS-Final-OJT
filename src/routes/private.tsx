import { lazy } from "react";
import NotFound from "../components/not-found";
import HomePage from "../pages/HomePage/home-page";
import Categories from "../pages/Categories/categories";
import Products from "../pages/Products/products";
import Users from "../pages/Users/users";
import Orders from "../pages/Orders/orders";
import Settings from "../pages/Settings/settings";

const PrivateLayout = lazy(
  () => import("../components/layouts/PrivateLayout/PrivateLayout")
);

interface Route {
  element: JSX.Element;
  children?: Route[];
  path?: string;
}

const routes = [
  {
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  } as Route,
];

export default routes;

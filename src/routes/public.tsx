import PrivateLayout from "../components/layouts/PrivateLayout/PrivateLayout";
import PublicLayout from "../components/layouts/PublicLayout/PublicLayout";
import NotFound from "../components/not-found";
import Categories from "../pages/Categories/categories";
import HomePage from "../pages/HomePage/home-page";
import Orders from "../pages/Orders/orders";
import Products from "../pages/Products/products";
import Settings from "../pages/Settings/settings";
import Users from "../pages/Users/users";

const routes = [
  // {
  //   element: <PublicLayout />,
  //   children: [{ path: "login", element: <></> }],
  // },
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
  },
];

export default routes;

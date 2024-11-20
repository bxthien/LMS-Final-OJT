import { StrictMode } from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/page";
import HomePage from "./pages/HomePage/home-page";
import Categories from "./pages/Categories/categories";
import NotFound from "./components/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

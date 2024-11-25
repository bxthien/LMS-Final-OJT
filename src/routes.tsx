import { createBrowserRouter, Outlet } from "react-router-dom";
import NotFound from "./components/not-found";
import privateRoutes from "./routes/private";
import publicRoutes from "./routes/public";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [...publicRoutes, ...privateRoutes],
  },
]);

export default router;

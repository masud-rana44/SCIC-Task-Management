import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../components/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { PublicRoute } from "./PublicRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
    ],
  },
]);

export default router;

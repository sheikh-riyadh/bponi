import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

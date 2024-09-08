import { createBrowserRouter } from "react-router-dom";
import Setup from "./pages/setup";
import Login from "./pages/login";
import Dashoard from "./components/dashoard";
import Admins from "./pages/admins";
import Events from "./pages/events";
import Blog from "./pages/blog";
import Preview from "./pages/blog/preview";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "setup-app", element: <Setup /> },
  {
    path: "admin",
    element: <Dashoard />,
    children: [
      { index: true, element: <Admins /> },
      { path: "events", element: <Events /> },
      {
        path: "blog",
        children: [
          { index: true, element: <Blog /> },
          { path: "preview", element: <Preview /> },
        ],
      },
    ],
  },
]);

export default routes;

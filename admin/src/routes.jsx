import { createBrowserRouter } from "react-router-dom";
import Setup from "./pages/setup";
import Login from "./pages/login";
import Dashoard from "./components/dashoard";
import Admins from "./pages/admins";
import Events from "./pages/events";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "setup-app", element: <Setup /> },
  {
    path: "admin",
    element: <Dashoard />,
    children: [
      { index: true, element: <Admins /> },
      { path: "events", element: <Events /> },
    ],
  },
]);

export default routes;

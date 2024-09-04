import { createBrowserRouter } from "react-router-dom";
import Setup from "./pages/setup";
import Login from "./pages/login";
import Dashoard from "./components/dashoard";
import Admins from "./pages/admins";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "setup-app", element: <Setup /> },
  {
    path: "admin",
    element: <Dashoard />,
    children: [{ index: true, element: <Admins /> }],
  },
]);

export default routes;

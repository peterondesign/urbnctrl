import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Utilities from "./pages/utilities";
import AboutUs from "./pages/about-us";
import Community from "./pages/community";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/utilities", element: <Utilities /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/community", element: <Community /> },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Utilities from "./pages/utilities";
import AboutUs from "./pages/about-us";
import Community from "./pages/community";
import CommunityPost from "./pages/community-post";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import ForgottenPassword from "./pages/auth/forgottenPassword";
import CreatePost from "./pages/create-post";
import Socials from "./pages/socials";
import CreateEvent from "./pages/create-event";
import Announcement from "./pages/announcement";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "utilities", element: <Utilities /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "announcements", element: <Announcement /> },
  {
    path: "community",
    children: [
      { index: true, element: <Community /> },
      { path: ":post-id", element: <CommunityPost /> },
      { path: "create-post", element: <CreatePost /> },
    ],
  },
  {
    path: "socials",
    children: [
      { index: true, element: <Socials /> },
      { path: "create-event", element: <CreateEvent /> },
    ],
  },
  {
    path: "auth",
    children: [
      { index: true, element: <SignIn /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "forgotten-password", element: <ForgottenPassword /> },
    ],
  },
]);

export default routes;

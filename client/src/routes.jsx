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
import PreviewPost from "./pages/preview-post";
import ProtectedRoutes from "./components/protectedRoutes";
import OrganizerContainer from "./components/organizerContainer";
import Organizer from "./pages/organizer";
import ValidateTicket from "./pages/organizer/validateTicket";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "utilities", element: <Utilities /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "announcements", element: <Announcement /> },
  {
    path: "community",
    children: [
      { index: true, element: <Community /> },
      { path: ":postId", element: <CommunityPost /> },

      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "create-post",
            children: [
              { index: true, element: <CreatePost /> },
              { path: "preview", element: <PreviewPost /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "organizer",
    element: <OrganizerContainer />,
    children: [
      { index: true, element: <Organizer /> },
      { path: "validate-ticlet", element: <ValidateTicket /> },
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

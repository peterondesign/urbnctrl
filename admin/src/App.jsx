import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

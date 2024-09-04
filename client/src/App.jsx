import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

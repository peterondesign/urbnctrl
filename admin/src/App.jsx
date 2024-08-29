import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Layout from "./components/Layout";
import Sidebar from "./components/sidebar";
import Setup from "./pages/Setup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Route */}
        <Route path="login" element={<Login />} />
        <Route path="setup" element={<Setup />} />

        {/* Protected Routes */}
        <Route path="admin" element={<Admin />} />
        <Route path="blog" element={<Blog />} />
        <Route path="events" element={<Events />} />
        <Route path="/" element={<Sidebar />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

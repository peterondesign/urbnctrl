import Sidebar from './sidebar';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from '../pages/Events';
import Blog from '../pages/Blog';
import Admin from '../pages/Admin';
const Dashboard = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="p-6 bg-white flex-grow">
            <Routes>
              <Route path="/Admin" element={<Admin />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/" element={<Events />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";
import { MdLogout, MdAdminPanelSettings } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { AiFillTrophy } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Blog");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-64  h-[900px] flex flex-col border-r-pink border-b border-r">
      <div className="text-xl font-bold mb-8 pb-28 justify-start">
        URBANCENTRAL
      </div>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/Admin"
          className={`flex items-center side-items text-custom1 ${
            activeLink === "Admin" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Admin")}
        >
          <MdAdminPanelSettings className="mr-2 " />
          Admin
        </Link>
        <Link
          to="/events"
          className={`flex items-center side-items text-custom1 ${
            activeLink === "Events" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Events")}
        >
          <AiFillTrophy className="mr-2 " />
          Events
        </Link>
        <Link
          to="/blog"
          className={`flex items-center side-items text-custom1 ${
            activeLink === "Blog" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Blog")}
        >
          <FaNewspaper className="mr-2 " />
          <p>Blog</p>
        </Link>

        <div className="justify-end text-custom1">
          <button href="#" className="mt-auto side-items flex  items-center">
            <MdLogout className="mr-2" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

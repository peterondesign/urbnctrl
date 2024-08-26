/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // Example data for pending and completed events
  const pendingEvents = [
    {
      name: "Omah Lay Unplugged",
      date: "22-12-2024",
      detail:
        "Savage Rave is more than just a party; it's an embodiment of confidence, liberty, and fearless fun set against the backdrop of the shimmering Wave Beach.",
    },
    {
      name: "13 Hours With Rema",
      date: "22-12-2024",
      detail:
        "Savage Rave is more than just a party; it's an embodiment of confidence, liberty, and fearless fun set against the backdrop of the shimmering Wave Beach.",
    },
    {
      name: "Asake World Tour",
      date: "22-12-2024",
      detail:
        "Savage Rave is more than just a party; it's an embodiment of confidence, liberty, and fearless fun set against the backdrop of the shimmering Wave Beach.",
      status: "pending",
    },
  ];

  const completedEvents = [
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    {
      name: "Burna Boy Live",
      date: "12-11-2024",
      detail: "An energetic and unforgettable concert experience by Burna Boy.",
      status: "Approved",
    },
    // Add more completed events as needed
  ];

  const currentPosts = completedEvents.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="p-5">
      <div className="flex justify-between mb-4">
        <div>
          <button
            //   className={`p-2 ${
            //     activeTab === "pending" ? "bg-white" : "text-gray-300"
            //   }`}
            className={`pr-20 py-2 focus:outline-none w-1/3 font-medium ${
              activeTab === "pending"
                ? "border-b-2 border-yellow-500 font-semibold bg-white"
                : "text-gray-300"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`pr-20 py-2 focus:outline-none w-1/3 font-medium ${
              activeTab === "completed"
                ? "border-b-2 border-yellow-500 font-semibold bg-white"
                : "text-gray-300"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        <input
          type="text"
          placeholder="Search events"
          required
          className="w-1/4 h-9 rounded-full border-custom1 border flex-none  outline-0 px-3"
          value={form?.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e?.target?.value }))
          }
        />
      </div>

      {/* Table for Pending or Completed */}
      <div>
        {activeTab === "pending" && (
          <div>
            <Table data={pendingEvents} />
          </div>
        )}
        {activeTab === "completed" && (
          <div>
            <Table data={currentPosts} />
          </div>
        )}
      </div>

      <div>
        <Pagination
          totalPosts={completedEvents.length}
          postsPerPage={postsPerPage}
          seteCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Tabs;

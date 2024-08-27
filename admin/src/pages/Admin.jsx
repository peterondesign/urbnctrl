import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import AdminButton from "../components/AdminButton";
import AdminActions from "../components/AdminActions";
import adminData from "../data/adminData";

const Admin = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMenuToggle = () => setShowMenu(!showMenu);
  const handleEditClick = () => {
    setShowMenu(false);
    setShowPopup(true);
  };
  const handleClosePopup = () => setShowPopup(false);

  const Table = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-tl-lg rounded-tr-sm">
          <thead className="rounded-tl-lg rounded-tr-sm bg-[#FAF9F7]">
            <tr className="w-full font-medium text-black">
              <th className="py-2 px-4 border-b text-left ">Admin Name</th>
              <th className="py-2 px-4 border-b text-left">Access</th>
              <th className="py-2 px-4 border-b text-left">Assigned Role</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((event, index) => (
              <tr key={index} className="w-full">
                <td className="py-7 w-1/5 font-medium px-4 border-b">
                  {event.name}
                </td>
                <td className="py-7 w-2/5 font-semibold px-4 border-b">
                  {event.access}
                </td>
                <td className="py-7 w-1/5 font-normal px-4 border-b">
                  {event.role}
                </td>
                <td className="py-7 w-1/5 font-normal px-4 border-b">
                  {event.status}
                </td>
                <td className="py-7 w-1/5 items-center flex-none px-4 border-b">
                  <AdminActions/>
                </td>
                  {/* <AdminButton onMenuToggle={handleMenuToggle} /> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1 className="font-semibold">Admins</h1>
        <p>Choose admins and assign roles.</p>
      </div>

      <div>
        <Table data={adminData} />
      </div>
    </div>
  );
};



export default Admin;

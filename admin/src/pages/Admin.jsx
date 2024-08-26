import { SlOptionsVertical } from "react-icons/sl";

const Admin = () => {

  const adminData = [
    {
      name:"Emmanuel",
      access: "Events Management",
      role: "Sub Admin",
      status: 'online'
    },
    {
      name:"Ade",
      access: "Events Management",
      role: "Sub Admin",
      status: 'online'
    },
    {
      name:"Marcus",
      access: "Events Management",
      role: "Sub Admin",
      status: 'online'
    },
    {
      name:"Kerry",
      access: "Blog Management",
      role: "Sub Admin",
      status: 'offline'
    },
    {
      name:"Curry",
      access: "Events Management",
      role: "Sub Admin",
      status: 'online'
    },
  ];


  return (
    <div>
      <div>
        <h1 className="font-semibold">Admins</h1>
        <p>Choose admins and assign roles.</p>
      </div>

      <div>
        <Table data = {adminData}/>
      </div>
    </div>
  )
};

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-tl-lg rounded-tr-sm">
        <thead className="rounded-tl-lg rounded-tr-sm bg-[#FAF9F7]">
          <tr className="w-full font-medium text-black">
            <th className="py-2 px-4 border-b text-left ">
              Admin Name
            </th>
            <th className="py-2 px-4 border-b text-left">Access</th>
            <th className="py-2 px-4 border-b text-left">
              Assigned Role
            </th>
            <th className="py-2 px-4 border-b text-left">
              Status
            </th>
            <th className="py-2 px-4 border-b text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((event, index) => (
            <tr key={index} className="w-full">
              <td className="py-2 w-1/5 font-medium px-4 border-b">{event.name}</td>
              <td className="py-2 w-2/5 font-semibold px-4 border-b">{event.access}</td>
              <td className="py-2 w-1/5 font-normal px-4 border-b">{event.role}</td>
              <td className="py-2 w-1/5 font-normal px-4 border-b">{event.status}</td>
              <td className="py-2 flex-none px-4 border-b">
                <SlOptionsVertical/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin
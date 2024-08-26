const Table = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-tl-lg rounded-tr-sm">
          <thead className="rounded-tl-lg rounded-tr-sm bg-[#FAF9F7]">
            <tr className="w-full font-medium text-black">
              <th className="py-2 px-4 border-b text-left ">
                Event Name
              </th>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">
                Event Detail
              </th>
              <th className="py-2 px-4 border-b text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((event, index) => (
              <tr key={index} className="w-full">
                <td className="py-2 w-1/4 font-medium px-4 border-b">{event.name}</td>
                <td className="py-2 w-1/4 font-normal px-4 border-b">{event.date}</td>
                <td className="py-2 w-3/4 font-normal px-4 border-b">{event.detail}</td>
                <td className="py-2 w-1/4 px-4 border-b">
                  {event.status === "Approved" ? (
                    <p className="bg-red-500 text-white px-4 py-2 rounded">
                      completed
                    </p>
                  ) : (
                    <div className="">
                      <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                        Approve
                      </button>
                      <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Table;
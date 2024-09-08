import { useEffect, useState } from "react";
import PlusIcon from "../../assets/svgs/plus";
import Button from "../../components/button";
import TableContainer from "../../components/tableContainer";
import EditAddAdmin from "./components/editAddAdmin";
import TableDropdown from "./components/tableDropdown";
import useAdmins from "../../hooks/api/admin";
import { toast } from "react-toastify";
import Loader from "../../components/loader";
import Paginate from "../../components/paginate";

const Admins = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentPage, setCurrenPage] = useState(1);

  const {
    handleAllAdmin,
    allAdminData,
    handleDelete,
    deleteAdminData,
    handleCreate,
    createAdminData,
    handleUpdateAdmin,
    updateAdminData,
  } = useAdmins();

  useEffect(() => {
    const getAdmins = async () => {
      try {
        await handleAllAdmin({ page: currentPage, limit: 6 });
      } catch (error) {
        if (error?.response?.data) {
          toast.error(error?.response?.data?.message);
        }
      }
    };

    getAdmins();
  }, [
    deleteAdminData?.data,
    createAdminData?.data,
    updateAdminData?.data,
    currentPage,
  ]);

  const results = allAdminData?.data?.results;

  const deleteAdmin = async (id) => {
    try {
      const res = await handleDelete(id);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const admins = results?.data?.map((admin) => [
    { text: admin?.name },
    { text: admin?.email },
    { text: admin?.role },
    {
      element: (
        <TableDropdown
          onEdit={() => setEdit(admin)}
          onDelete={() => deleteAdmin(admin?.id)}
        />
      ),
    },
  ]);

  return (
    <div>
      {(deleteAdminData?.loading ||
        allAdminData?.loading ||
        createAdminData?.loading ||
        updateAdminData?.loading) && <Loader />}
      {add && (
        <EditAddAdmin
          onClose={setAdd}
          handleCreate={handleCreate}
          defaultValue={{ name: "", email: "", password: "", role: "blog" }}
        />
      )}
      {edit && (
        <EditAddAdmin
          isEdit
          defaultValue={{
            ...edit,
            createdAt: undefined,
            updatedAt: undefined,
            password: "",
          }}
          onClose={setEdit}
          handleUpdate={handleUpdateAdmin}
        />
      )}
      <div className="mb-[40px]">
        <h1 className="text-[20px] font-bold">Admins</h1>
        <div className="flex w-full items-center justify-between">
          <p className="text-[20px]">Choose admins and assign roles.</p>
          <Button
            text="Add New"
            icon={<PlusIcon />}
            onClick={() => setAdd(true)}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-[32px]">
        <TableContainer
          column="30% 1fr 1fr 150px"
          header={["Admin Name", "Email", "Role", "Action"]}
          body={admins}
          message={"Admin is empty."}
        />
        <Paginate
          current={results?.currentPage}
          totalItem={results?.count}
          totalPage={results?.totalItems}
          onChange={setCurrenPage}
        />
      </div>
    </div>
  );
};

export default Admins;

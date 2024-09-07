import useAxios from "axios-hooks";

const useAdmins = () => {
  const [{ ...allAdminData }, allAdmin] = useAxios(
    {
      url: "/admin/admins",
      method: "GET",
    },
    { manual: true }
  );
  const handleAllAdmin = async (params) => {
    return await allAdmin({
      params,
    });
  };

  const [{ ...deleteAdminData }, deleteAdmin] = useAxios(
    {
      method: "DELETE",
    },
    { manual: true }
  );
  const handleDelete = async (id) => {
    return await deleteAdmin({
      url: `/admin/admins/${id}`,
    });
  };

  const [{ ...createAdminData }, createAdmin] = useAxios(
    {
      url: "/admin/admins",
      method: "POST",
    },
    { manual: true }
  );
  const handleCreate = async (data) => {
    return await createAdmin({
      data,
    });
  };

  const [{ ...updateAdminData }, updateAdmin] = useAxios(
    {
      method: "PUT",
    },
    { manual: true }
  );
  const handleUpdateAdmin = async (id, data) => {
    return await updateAdmin({
      url: `/admin/admins/${id}`,
      data,
    });
  };

  return {
    handleUpdateAdmin,
    updateAdminData,
    handleAllAdmin,
    allAdminData,
    deleteAdminData,
    handleDelete,
    handleCreate,
    createAdminData,
  };
};

export default useAdmins;

import useAxios from "axios-hooks";

const useAuth = () => {
  //setup
  const [{ ...setupData }, setup] = useAxios(
    {
      url: "/admin/auth/setup",
      method: "POST",
    },
    { manual: true }
  );
  const handleSetup = async (data) => {
    return await setup({
      data,
    });
  };

  return { setupData, handleSetup };
};

export default useAuth;

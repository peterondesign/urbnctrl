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

  //login
  const [{ ...loginData }, login] = useAxios(
    {
      url: "/admin/auth/login",
      method: "POST",
    },
    { manual: true }
  );
  const handleLogin = async (data) => {
    return await login({
      data,
    });
  };

  //me
  const [{ ...meData }, me] = useAxios(
    {
      url: "/admin/auth/me",
      method: "GET",
    },
    { manual: true }
  );
  const handleMe = async () => {
    return await me();
  };

  return { setupData, handleSetup, meData, handleMe, handleLogin, loginData };
};

export default useAuth;

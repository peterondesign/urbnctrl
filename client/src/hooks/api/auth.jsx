import useAxios from "axios-hooks";

const useAuth = () => {
  // signing in
  const [{ ...signingInData }, signingIn] = useAxios(
    {
      method: "POST",
      url: "/login",
    },
    { manual: true }
  );
  const handleSigningIn = async (data) => {
    return await signingIn({
      data,
    });
  };

  // signing up
  const [{ ...signingUpData }, signingUp] = useAxios(
    {
      method: "POST",
      url: "/signup",
    },
    { manual: true }
  );
  const handleSigningUp = async (data) => {
    return await signingUp({
      data,
    });
  };

  return { signingInData, handleSigningIn, handleSigningUp, signingUpData };
};

export default useAuth;

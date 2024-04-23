import useAxios from 'axios-hooks';

const useAuth = () => {
  // signing in
  const [{ ...signingInData }, signingIn] = useAxios();
  const handleSigningIn = async (data) => {
    return await signingIn({
      method: 'POST',
      url: '/login',
      data,
    });
  };

  // signing up
  const [{ ...signingUpData }, signingUp] = useAxios();
  const handleSigningUp = async (data) => {
    return await signingUp({
      method: 'POST',
      url: '/signup',
      data,
    });
  };

  return { signingInData, handleSigningIn, handleSigningUp, signingUpData };
};

export default useAuth;

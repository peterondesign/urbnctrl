import useAxios from "axios-hooks";

const usePayment = () => {
  // create a blog
  const [{ ...makePaymentData }, makePayment] = useAxios();
  const handleMakePayment = async (data) => {
    return await makePayment({
      method: "POST",
      url: "/payment/initiate-payment",
      data,
    });
  };
  return { makePaymentData, handleMakePayment };
};

export default usePayment;

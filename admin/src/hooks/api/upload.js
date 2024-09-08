import useAxios from "axios-hooks";

const useUpload = () => {
  const [{ ...getUploadedData }, upload, cancelUpload] = useAxios(
    {
      method: "POST",
      url: "/blog/postImages",
    },
    { manual: true }
  );
  const handleUpload = async (data) => {
    return await upload({
      data,
    });
  };
  return { handleUpload, getUploadedData, cancelUpload };
};

export default useUpload;

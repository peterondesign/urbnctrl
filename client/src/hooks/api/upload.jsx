import useAxios from 'axios-hooks';

const useUpload = () => {
  const [{ ...getUploadedData }, upload, cancelUpload] = useAxios();
  const handleUpload = async (data) => {
    return await upload({
      method: 'POST',
      url: '/blog/postImages',
      data,
    });
  };
  return { handleUpload, getUploadedData, cancelUpload };
};

export default useUpload;

import useAxios from "axios-hooks";

const useBlog = () => {
  const [{ ...createBlogData }, createBlog] = useAxios(
    {
      method: "POST",
      url: "/admin/blog",
    },
    { manual: true }
  );
  const handleCreateBlog = async (data) => {
    return await createBlog({
      data,
    });
  };

  return {
    createBlogData,
    handleCreateBlog,
  };
};

export default useBlog;

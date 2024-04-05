import useAxios from 'axios-hooks';

const useBlog = () => {
  const [{ ...createBlogData }, createBlog] = useAxios();
  const handleBlog = async (data) => {
    return await createBlog({
      method: 'POST',
      url: '/blog/postBlog',
      data,
    });
  };
  return { handleBlog, createBlogData };
};

export default useBlog;

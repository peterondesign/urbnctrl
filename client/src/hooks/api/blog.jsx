import useAxios from 'axios-hooks';

const useBlog = () => {
  // create a blog
  const [{ ...createBlogData }, createBlog] = useAxios();
  const handleBlog = async (data) => {
    return await createBlog({
      method: 'POST',
      url: '/blog/postBlog',
      data,
    });
  };

  // get all blogs
  const [{ ...getBlogsData }, getBlogs] = useAxios();
  const handleGetBlogs = async () => {
    return await getBlogs({
      method: 'GET',
      url: '/blog/getBlogs',
    });
  };

  // get single blog
  const [{ ...getSingleBlogData }, getSingleBlog] = useAxios();
  const handleGetSingleBlog = async (id) => {
    return await getSingleBlog({
      method: 'GET',
      url: `/blog/getBlog/${id}`,
    });
  };
  return {
    handleBlog,
    createBlogData,
    getBlogsData,
    handleGetBlogs,
    handleGetSingleBlog,
    getSingleBlogData,
  };
};

export default useBlog;

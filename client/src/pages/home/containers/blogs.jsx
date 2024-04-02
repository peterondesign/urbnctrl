import LastestBlogs from "../../../components/lastestBlogs";

const BlogsSection = () => {
  return (
    <div className="py-[40px]">
      <h2 className="border-b border-solid border-b-[#5C5A5A] h-[80px] flex w-full items-center text-[32px] sm:text-5xl font-bold mb-[24px] sm:mb-[64px]">
        Latest Posts
      </h2>
      <LastestBlogs />
    </div>
  );
};

export default BlogsSection;

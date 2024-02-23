import { FaCalendarAlt } from "react-icons/fa";
import { chains } from "../assets/images";

const BlogCard = () => {
  return (
    <div className="w-[400px] h-[440px] rounded-[20px] bg-white flex flex-col overflow-hidden cursor-pointer">
      <div className="h-[248px]">
        <img
          src={chains}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 text-dark p-6 flex flex-col justify-between">
        <h3 className="blog_header text-[1.15rem] leading-[1.4rem] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          temporibus, dolore aliquam esse maxime corporis qui iusto nam nesciunt
          molestiae!
        </h3>
        <div className="flex items-center gap-2">
          <FaCalendarAlt color="#aab0bc" size={15} />
          <p className="text-xs text-[#aab0bc] font-medium">
            21 May, 2021 - 06:09AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

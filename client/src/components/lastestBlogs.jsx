import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import BlogCard from "./blogCard";

const LastestBlogs = () => {
  const arr = [1, 2, 3, 4];
  const btnClass =
    "bg-green rounded-full w-[44px] h-[44px] grid place-items-center cursor-pointer hover:bg-primary transition";
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
      autoplay
      className="pb-20"
    >
      {arr.map((blog) => (
        <SwiperSlide key={blog}>
          <BlogCard />
        </SwiperSlide>
      ))}
      <div className="flex gap-4 absolute translate-x-[-50%] left-[50%] bottom-0 z-20 ">
        <button className={`${btnClass} next-btn`}>
          <FaArrowLeft />
        </button>
        <button className={`${btnClass} prev-btn`}>
          <FaArrowRight />
        </button>
      </div>
    </Swiper>
  );
};

export default LastestBlogs;

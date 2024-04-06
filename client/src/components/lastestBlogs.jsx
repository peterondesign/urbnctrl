import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import BlogCard from './blogCard';

const LastestBlogs = () => {
  const arr = [];
  const btnClass =
    'bg-green rounded-full w-[44px] h-[44px] grid place-items-center cursor-pointer hover:bg-primary transition';

  return (
    <div>
      {arr?.length > 0 && (
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            autoplay
            className="hidden lg:block pb-20"
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
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            autoplay
            className="hidden sm:block lg:hidden pb-20"
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
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            autoplay
            className="block sm:hidden pb-20"
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
        </div>
      )}
      {arr?.length === 0 && (
        <div className="min-h-[350px] grid place-content-center w-full">
          <p className="capitalize text-2xl font-bold">no available post </p>
        </div>
      )}
    </div>
  );
};

export default LastestBlogs;

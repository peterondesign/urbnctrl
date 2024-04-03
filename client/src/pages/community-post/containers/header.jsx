import AboutText from "../../../assets/svgs/aboutText";
import { speaker } from "../../../assets/images";

const Header = () => {
  return (
    <header>
      <div className="h-[200px] sm:h-[220px] lg:h-[300px] relative">
        <div className="h-[300px] lg:h-[420px] absolute top-[-180px] lg:top-[-120px] left-0 right-0 pt-[120px] pb-[110px] grid place-items-center [&>svg]:w-[280px]  sm:[&>svg]:w-[447px] ">
          <AboutText />
          <h1 className="text-[28px] sm:text-[50px] font-bold absolute top-[calc(50%+120px)]  sm:top-[calc(50%+130px)] lg:top-[calc(50%+65px)] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
            Community
          </h1>
        </div>
      </div>
      <img
        src={speaker}
        alt="blog cover image"
        loading="lazy"
        className="h-[390px] lg:h-[508px] w-full object-cover"
      />
    </header>
  );
};

export default Header;

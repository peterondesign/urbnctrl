import { manUrban } from "../../../assets/images";
import AboutText from "../../../assets/svgs/aboutText";

const Header = () => {
  return (
    <header className="h-[540px] relative">
      <div className="h-[660px]  absolute top-[-120px] left-0 right-0 pt-[120px] pb-[40px] flex ">
        <div className="relative w-fit flex-shrink-0 [&>svg]:w-[550px] flex items-center ">
          <AboutText />
          <h1 className="text-[50px] font-bold absolute top-[calc(50%+25px)] left-1/2 -translate-x-1/2 -translate-y-1/2">
            About Us
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <img
            src={manUrban}
            alt=""
            className="w-[420px]  h-[440px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

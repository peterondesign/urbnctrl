import { manUrban } from "../../../assets/images";
import AboutText from "../../../assets/svgs/aboutText";

const Header = () => {
  return (
    <>
      <header className="h-[280px] sm:h-[380px] lg:h-[540px] relative">
        <div className="h-[400px] sm:h-[500px] lg:h-[660px] absolute top-[-120px] left-0 right-0 pt-[120px] pb-[40px] flex justify-center lg:justify-start ">
          <div className="hidden lg:flex relative w-fit flex-shrink-0 [&>svg]:w-[550px]  items-center ">
            <AboutText />
            <h1 className="text-[50px] font-bold absolute top-[calc(50%+25px)] left-1/2 -translate-x-1/2 -translate-y-1/2">
              About Us
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <img
              src={manUrban}
              alt=""
              className="w-full h-full lg:w-[420px]  lg:h-[440px] object-contain"
            />
          </div>
        </div>
      </header>
      <div className=" lg:hidden">
        <h1 className="text-[32px] sm:text-[50px] font-bold">About Us</h1>
      </div>
    </>
  );
};

export default Header;

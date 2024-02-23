import { womanUrban } from "../../../assets/images";
import UtilitiesText from "../../../assets/svgs/utilitiesText";

const HeaderSection = () => {
  return (
    <header className="h-[540px] relative">
      <div className="h-[660px] bg-[#0845F7] absolute top-[-120px] left-0 right-0 px-[80px] pt-[120px] pb-[40px] flex">
        <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
          <div className="flex-1">
            <img
              src={womanUrban}
              alt=""
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 flex items-center pb-[60px]">
            <div className="flex flex-col items-center justify-center gap-1 [&>svg]:w-[550px] ">
              <UtilitiesText />
              <h1 className="text-[80px] font-bold">How We Do It</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

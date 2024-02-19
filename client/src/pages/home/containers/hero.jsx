import { illustration } from "../../../assets/images";
import Button from "../../../components/button";

const HeroSection = () => {
  return (
    <div className="px-[60px]">
      <div className="flex w-full items-center h-[640px]">
        <div className="flex-1">
          <img
            src={illustration}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 grid place-items-center ">
          <div className="flex flex-col gap-6">
            <h1 className="text-[80px] leading-[80px] font-bold">
              We Live <br />
              Amongst
              <br />
              Giants
            </h1>
            <p className="text-sm">Beyond Music</p>
            <Button text="sign in" />
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default HeroSection;

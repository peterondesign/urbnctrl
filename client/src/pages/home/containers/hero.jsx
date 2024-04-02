import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiMediumLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

import { illustration } from "../../../assets/images";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:px-[60px]">
      <div className=" flex flex-col gap-[24px]  sm:flex-row w-full lg:items-center lg:h-[640px]">
        <div className=" w-full sm:w-1/2 h-[300px] lg:h-[640px]">
          <img
            src={illustration}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="w-full sm:w-1/2 grid place-items-center ">
          <div className="flex flex-col gap-6">
            <h1 className="text-[52px] leading-[52px] md:text-[72px] md:leading-[72px] lg:text-[80px] lg:leading-[80px] font-bold">
              We Live <br />
              Amongst
              <br />
              Giants
            </h1>
            <p className="text-sm">Beyond Music</p>
            <Button text="sign in" onClick={() => navigate("/auth/sign-in")} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:justify-center lg:gap-[50px] max-w-[400px] mx-auto h-[120px] mt-8">
        <FaXTwitter size={26} />
        <PiTelegramLogo size={26} />
        <FaInstagram size={26} />
        <RiMediumLine size={26} />
        <FaWhatsapp size={26} />
        <MdOutlineEmail size={26} />
      </div>
    </div>
  );
};

export default HeroSection;

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiMediumLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

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
            loading="lazy"
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
      <div className="flex items-center justify-center gap-[50px] h-[120px] mt-8">
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

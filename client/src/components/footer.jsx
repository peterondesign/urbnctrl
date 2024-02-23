import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiMediumLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

import { logo2 } from "../assets/images";
import { Link } from "react-router-dom";
import MaxContainer from "./maxContainer";

const Footer = () => {
  const date = new Date();
  const links = [
    { title: "community", to: "/community" },
    { title: "socials", to: "/" },
    { title: "annoucements", to: "/" },
    { title: "utilities", to: "/utilities" },
    { title: "about us", to: "/about-us" },
    { title: "Terms and Condition", to: "/" },
    { title: "Privacy Policy", to: "/" },
  ];

  return (
    <footer className="py-12 mt-12 pb-[80px] ">
      <MaxContainer>
        <div
          className="
      flex w-full justify-between
      "
        >
          <div className="w-[425px] flex flex-col gap-4 text-[#c9c8c3]">
            <img src={logo2} alt="" loading="lazy" className="w-full" />
            <p>© {date.getFullYear()} Urban Central. All rights reserved.</p>
            <div className="flex gap-[52px] items-center">
              <p>Follow us:</p>
              <div className="flex items-center gap-4">
                <FaXTwitter size={20} color="#FFBB4C" />
                <PiTelegramLogo size={20} color="#FFBB4C" />
                <FaInstagram size={20} color="#FFBB4C" />
                <RiMediumLine size={20} color="#FFBB4C" />
                <FaWhatsapp size={20} color="#FFBB4C" />
                <MdOutlineEmail size={20} color="#FFBB4C" />
              </div>
            </div>
          </div>
          <div className="flex gap-[120px] ">
            <div>
              <h4 className="text-[#343f52] font-semibold text-xl mb-4">
                Links
              </h4>
              <ul className="flex flex-col gap-4">
                {links?.map((link) => (
                  <li key={link.title} className="text-[18px] capitalize">
                    <Link to={link.to}>{link.title} </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="text-[#343f52] font-semibold text-xl mb-4">
                Get In Touch
              </h4>
              <p className="text-[18px] w-[350px]">
                46/48 Hakeem Balogun, Agindigbi, ikeja (opposite New African
                Shrine) Lagos State.
              </p>
            </div>
          </div>
        </div>
      </MaxContainer>
    </footer>
  );
};

export default Footer;

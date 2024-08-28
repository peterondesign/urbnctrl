import PropTypes from "prop-types";
import Button from "./button";
import { Link } from "react-router-dom";
import MaxContainer from "./maxContainer";
// import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom";
import BurgerMenuIcon from "./burgerMenu";
import CloseIcon from "../assets/svgs/close";
import classNames from "classnames";
import Logo from "../assets/svgs/logo";

/**
 * @param {{toggle: boolean, setToggle: Function, fixed: boolean}} props
 * @returns {JSX.Element}
 */
const Navbar = ({ toggle, setToggle, fixed }) => {
  const navigate = useNavigate();
  const links = [
    { title: "community", to: "/community" },
    { title: "socials", to: "/socials" },
    { title: "annoucements", to: "/announcements" },
    { title: "utilities", to: "/utilities" },
    { title: "about us", to: "/about-us" },
  ];
  return (
    <nav
      className={classNames("z-40 left-0 right-0 top-0", {
        relative: !fixed,
        "fixed bg-white drop-shadow-md": fixed,
      })}
    >
      <MaxContainer>
        <div className="flex w-full items-center justify-between h-[100px] lg:h-[120px]">
          <Link
            to="/"
            className={classNames("[&>svg]:w-[194px] lg:[&>svg]:w-[254px]", {
              "logo-dark": fixed,
            })}
          >
            <Logo />
          </Link>
          <div className="hidden xl:flex items-center gap-12">
            <ul className="flex items-center gap-8 font-medium">
              {links.map((link) => (
                <li
                  key={link.title}
                  className={classNames("capitalize", { "text-dark": fixed })}
                >
                  <Link to={link.to}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <Button text="sign in" onClick={() => navigate("/auth/sign-in")} />
          </div>
          <div className="xl:hidden">
            {toggle && (
              <div
                className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)]"
                onClick={() => setToggle(false)}
              >
                <div className="bg-[#1e2228] max-w-[360px] w-full h-full">
                  <MaxContainer>
                    <div className="h-[100px] lg:h-[120px] flex items-center justify-between w-full ">
                      <Link to="/" className="[&>svg]:w-[194px]">
                        <Logo />
                      </Link>
                      <span
                        className="grid place-items-center [&>svg]:w-[24px] [&>svg]:h-[24px] bg-[#303339] w-[36px] h-[36px] rounded-full cursor-pointer"
                        onClick={() => setToggle(false)}
                      >
                        <CloseIcon />
                      </span>
                    </div>
                    <ul className="flex flex-col gap-6 mb-10">
                      {links.map((link) => (
                        <li
                          key={link.title}
                          className="capitalize text-lg font-medium"
                        >
                          <Link to={link.to}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                    <Button
                      text="sign in"
                      onClick={() => navigate("/auth/sign-in")}
                    />
                  </MaxContainer>
                </div>
              </div>
            )}
            <span
              className={classNames("cursor-pointer", { "stroke-dark": fixed })}
              onClick={() => setToggle(true)}
            >
              <BurgerMenuIcon />
            </span>
          </div>
        </div>
      </MaxContainer>
    </nav>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.bool,
  fixed: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default Navbar;

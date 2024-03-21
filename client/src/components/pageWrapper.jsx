import { useEffect } from "react";
import PropTypes from "prop-types";
import { logo } from "../assets/images";
import Button from "./button";
import { Link } from "react-router-dom";
import MaxContainer from "./maxContainer";
import { useLocation, useNavigate } from "react-router";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Children element
 * @returns {JSX.Element}
 */
const PageWrapper = ({ children }) => {
  const links = [
    { title: "community", to: "/community" },
    { title: "socials", to: "/socials" },
    { title: "annoucements", to: "/" },
    { title: "utilities", to: "/utilities" },
    { title: "about us", to: "/about-us" },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <nav className=" relative z-50">
        <MaxContainer>
          <div className="flex w-full items-center justify-between h-[120px]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="flex items-center gap-12">
              <ul className="flex items-center gap-8 font-medium">
                {links.map((link) => (
                  <li key={link.title} className="capitalize">
                    <Link to={link.to}>{link.title}</Link>
                  </li>
                ))}
              </ul>
              <Button
                text="sign in"
                onClick={() => navigate("/auth/sign-in")}
              />
            </div>
          </div>
        </MaxContainer>
      </nav>
      <div className="w-full">{children}</div>
    </>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;

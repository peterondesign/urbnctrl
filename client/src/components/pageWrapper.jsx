import PropTypes from "prop-types";
import { logo } from "../assets/images";
import Button from "./button";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Children element
 * @returns {JSX.Element}
 */
const PageWrapper = ({ children }) => {
  return (
    <div className="px-[80px] max-w-[1440px] mx-auto">
      <nav className="flex w-full items-center justify-between h-[120px] ">
        <img src={logo} alt="" />
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-8 font-medium">
            <li>Community</li>
            <li>Socials</li>
            <li>Announcement</li>
            <li>Utilities</li>
            <li>About us</li>
          </ul>
          <Button text="sign in" />
        </div>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;

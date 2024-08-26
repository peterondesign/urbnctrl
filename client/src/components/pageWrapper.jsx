import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useLocation } from "react-router";
import { useLocation } from "react-router-dom";
import usePageScroll from "../hooks/custom/usePageScroll";
import Navbar from "./navbar";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Children element
 * @returns {JSX.Element}
 */
const PageWrapper = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const { y } = usePageScroll();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      {y > 120 && <Navbar toggle={toggle} setToggle={setToggle} fixed />}
      <div className="w-full">{children}</div>
    </>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;

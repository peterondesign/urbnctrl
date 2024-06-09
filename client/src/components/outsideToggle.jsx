import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, onClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick && onClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 *
 * @param {{children: React.ReactNode, handleClick:Function}} props
 * @returns
 */
export default function OutsideAlerter({ children, handleClick }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleClick);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

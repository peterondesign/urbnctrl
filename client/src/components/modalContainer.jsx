import PropTypes from "prop-types";
import classNames from "classnames";
import { useEffect } from "react";

/**
 * @param {{open:boolean, children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
const ModalContainer = ({ open, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div
      className={classNames(
        "bg-[#00000033] z-50 fixed grid place-items-center inset-0 py-[40px] overflow-y-auto",
        { hidden: !open },
      )}
    >
      {children}
    </div>
  );
};

ModalContainer.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default ModalContainer;

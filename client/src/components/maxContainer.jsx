import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Children element
 * @returns {JSX.Element}
 */
const MaxContainer = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-[80px] w-full">{children}</div>
  );
};

MaxContainer.propTypes = {
  children: PropTypes.node,
};

export default MaxContainer;

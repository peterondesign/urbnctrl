import PropTypes from "prop-types";

/**
 * Button component.
 * @param {{text: string} & React.BaseHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */
const Button = ({ text = "text", ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`h-[52px] w-[150px] bg-primary font-medium text-light-dark capitalize rounded ${restProps.className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;

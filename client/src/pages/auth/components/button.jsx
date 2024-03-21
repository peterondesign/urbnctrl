import PropTypes from "prop-types";
import { gmail } from "../../../assets/images";

/**
 * Button component.
 * @param {{text: string, type: "gmail" | "default"} & React.BaseHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */

const Button = ({ text = "text", type, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`h-[45px] w-full bg-primary font-medium text-light-dark capitalize rounded-[10px] flex items-center justify-center gap-4 ${restProps.className}`}
    >
      {type === "gmail" && <img src={gmail} alt="" />}
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;

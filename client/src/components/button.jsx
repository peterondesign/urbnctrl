import PropTypes from "prop-types";
import classNames from "classnames";
import Loader from "./loader";

/**
 * Button component.
 * @param {{loading: boolean, text: string} & React.ButtonHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */
const Button = ({ loading, text = "text", ...restProps }) => {
  return (
    <button
      {...restProps}
      className={classNames(
        `h-[52px] w-[150px] bg-[#FFBB4C] font-medium grid place-items-center relative text-light-dark capitalize opacity-100 rounded ${restProps.className}`,
        { "opacity-70 cursor-not-allowed": restProps.disabled || loading }
      )}
    >
      {!loading ? (
        text
      ) : (
        <span>
          <Loader size="28" color="#fff" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;

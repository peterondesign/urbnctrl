import PropTypes from "prop-types";

/**
 * Button component.
 * @param {{ label: string} & React.InputHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */
const Input = ({ type = "text", label, ...restProps }) => {
  return (
    <>
      <label className="block w-full">
        {label && <p className="text-[20px] leading-[20px] mb-3">{label}</p>}
        <input
          type={type}
          {...restProps}
          className={`w-full h-[54px] border border-solid border-[#ABABAB] outline-none px-[20px] ${restProps.className}`}
        />
      </label>
    </>
  );
};
Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;

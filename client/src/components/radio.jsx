import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * Button component.
 * @param {{type: "label" | "email", label: string} & React.InputHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */
const Radio = ({ id, label, ...restProps }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer gap-3 text-[20px]"
    >
      <input type="radio" id={id} {...restProps} className="hidden" />
      <span
        className={classNames(
          "custom-radio-button w-[24px] h-[24px] rounded-full border border-[#ABABAB] relative",
          {
            ["border-primary  before:absolute before:w-[18px] before:h-[18px] before:rounded-full before:bg-primary before:content-normal  before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"]:
              restProps?.checked,
          },
        )}
      ></span>
      {label}
    </label>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};
export default Radio;

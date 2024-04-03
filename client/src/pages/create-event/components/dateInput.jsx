import { forwardRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../../../assets/svgs/calender";
import { ArrowDown } from "../../../assets/svgs/arrows";

/**
 * @param {object} props
 * @param {Date} props.selected
 * @param {Date} props.mintDate
 * @param {Function} props.onChange
 * @returns
 */
const DateInput = ({ selected, onChange, className, mintDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      onClick={onClick}
      ref={ref}
      className={`flex cursor-pointer border border-[#ABABAB] border-solid items-center justify-between w-full px-4 ${className}`}
    >
      <div className="flex items-center gap-4 h-[54px]">
        <CalenderIcon />
        <span className="text-xl font-medium">{value}</span>
      </div>
      <ArrowDown />
    </div>
  ));
  CustomInput.displayName = "CustomInput";
  CustomInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
  };

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      minDate={mintDate}
      customInput={<CustomInput />}
      showTimeSelect
      dateFormat="MMMM d, yyyy  h:mm aa"
    />
  );
};

DateInput.propTypes = {
  selected: PropTypes.instanceOf(Date),
  mintDate: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
export default DateInput;

import _ from "lodash";

const TextField = ({
  label,
  type = "text",
  required,
  value,
  onChange,

  onChangeDebounce,
  placeholder,
}) => {
  const debouncedChange = _.debounce((value) => {
    onChangeDebounce && onChangeDebounce(value);
  }, 500);

  const handleInputChange = (event) => {
    const value = event?.target?.value;
    onChange && onChange(event);
    debouncedChange && debouncedChange(value);
  };

  return (
    <label className="w-full">
      {label && <p className="mb-[8px] text-[15px]">{label}</p>}
      <input
        onChange={handleInputChange}
        value={value}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[40px] border border-[#988E8E] w-full px-[16px] outline-none rounded-[6px]"
      />
    </label>
  );
};

export default TextField;

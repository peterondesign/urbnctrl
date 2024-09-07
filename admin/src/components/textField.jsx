import { useEffect, useState } from "react";

const TextField = ({
  label,
  type = "text",
  required,
  value,
  onChange,
  debounce,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let timeoutId;

    if (debounce && onChange) {
      timeoutId = setTimeout(() => {
        onChange(inputValue);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [inputValue, debounce]);

  return (
    <label className="w-full">
      {label && <p className="mb-[8px] text-[15px]">{label}</p>}
      <input
        onChange={(e) => {
          debounce ? setInputValue(e.target?.value) : onChange(e);
        }}
        value={debounce ? inputValue : value}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[40px] border border-[#988E8E] w-full px-[16px] outline-none rounded-[6px]"
      />
    </label>
  );
};

export default TextField;

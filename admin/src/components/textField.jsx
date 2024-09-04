const TextField = ({ label, type = "text", required, value, onChange }) => {
  return (
    <label className="">
      {label && <p className="mb-[8px] text-[15px]">{label}</p>}
      <input
        onChange={onChange}
        value={value}
        type={type}
        required={required}
        className="h-[40px] border border-[#988E8E] w-full px-[16px] outline-none rounded-[6px]"
      />
    </label>
  );
};

export default TextField;

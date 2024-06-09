import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MinusIcon from "../assets/svgs/minusIcon";
import PlusIcon from "../assets/svgs/plusIcon";

/**
 * Blog card
 * @param {{max: number, onChange: Function, initValue: number}} props
 * @returns {JSX.Element}
 */
const Counter = ({ max, onChange, initValue }) => {
  const [count, setCount] = useState(initValue || 0);

  useEffect(() => {
    onChange && onChange(count);
  }, [count]);

  const handleAdd = () => {
    if (max) {
      setCount((prev) => (prev >= max ? max : prev + 1));
      return;
    }
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count <= 0) {
      setCount(0);
      return;
    }
    setCount((prev) => prev - 1);
  };
  return (
    <div className="bg-[#FBF8F8] w-[190px] h-[50px] flex items-center justify-between rounded-[20px] overflow-hidden">
      <button
        className="w-[50px] h-[50px] bg-[#D9D9D9] grid place-items-center cursor-pointer"
        onClick={handleMinus}
      >
        <MinusIcon />
      </button>
      <p className="flex-1 text-center text-[24px] font-medium">{count}</p>
      <button
        className="w-[50px] h-[50px] bg-[#D9D9D9] grid place-items-center cursor-pointer"
        onClick={handleAdd}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

Counter.propTypes = {
  max: PropTypes.number,
  onChange: PropTypes.func,
  initValue: PropTypes.number,
};

export default Counter;

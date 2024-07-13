import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MinusIcon from "../assets/svgs/minusIcon";
import PlusIcon from "../assets/svgs/plusIcon";
import classNames from "classnames";

/**
 * Blog card
 * @param {{max: number, onChange: Function, initValue: number, }} props
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

  const mainCn = classNames(
    "bg-[#FBF8F8] w-[104px] h-[30px] sm:w-[190px] sm:h-[50px] flex items-center justify-between rounded-[20px] overflow-hidden"
  );
  const btnCn = classNames(
    "w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] bg-[#D9D9D9] grid place-items-center cursor-pointer [&>svg]:w-[20px]"
  );

  return (
    <div className={mainCn}>
      <button className={btnCn} onClick={handleMinus}>
        <MinusIcon />
      </button>
      <p className="flex-1 text-center text-[16px] sm:text-[24px] font-medium">
        {count}
      </p>
      <button className={btnCn} onClick={handleAdd}>
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

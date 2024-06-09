import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import OutsideAlerter from "../../../components/outsideToggle";
import { ArrowDown } from "../../../assets/svgs/arrows";

const EventDropdown = ({ onChange }) => {
  const [value, setValue] = useState("daily");
  const [toggle, setToggle] = useState(false);

  const data = ["daily", "weekly", "momthly"];

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  return (
    <OutsideAlerter handleClick={() => setToggle(false)}>
      <div>
        <p>Frequency</p>
        <div className="relative w-full max-w-[386px] ">
          <div
            onClick={() => setToggle(!toggle)}
            className="w-full flex items-center justify-between h-[54px] border border-[#ABABAB] border-solid px-[16px] cursor-pointer"
          >
            <p className="font-medium text-[20px] capitalize">{value}</p>
            <ArrowDown />
          </div>
          {toggle && (
            <ul className="absolute z-10 left-0 top-[54px] flex flex-col  bg-white right-0 border border-[#ABABAB] border-solid">
              {data.map((f) => (
                <li
                  key={f}
                  onClick={() => setValue(f)}
                  className="h-[48px] flex-shrink-0 flex items-center px-[16px] font-medium text-[20px] capitalize hover:bg-[#ededed]"
                >
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </OutsideAlerter>
  );
};

EventDropdown.propTypes = {
  onChange: PropTypes.func,
};

export default EventDropdown;

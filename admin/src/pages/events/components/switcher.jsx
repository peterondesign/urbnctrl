import classnames from "classnames";
import { useEffect, useState } from "react";

const Switcher = ({ onChange }) => {
  const [selected, setSelected] = useState("pending");

  const list = ["pending", "completed"];

  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, []);

  return (
    <ul className="flex">
      {list?.map((i) => (
        <li
          key={i}
          onClick={() => setSelected(i)}
          className={classnames(
            "w-[200px] h-[48px] border-b   flex items-center px-[8px] cursor-pointer capitalize",
            { "border-[#FFC700] text-[#000]": selected === i },
            { "border-[#E1DFDF] text-[#E1DFDF]": selected !== i }
          )}
        >
          {i}
        </li>
      ))}
    </ul>
  );
};

export default Switcher;

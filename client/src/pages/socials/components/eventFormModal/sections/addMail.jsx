import classNames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";

import numberFormatter from "../../../../../utils/numberFormatter";
import Button from "../../../../../components/button";
import Input from "../../../../../components/input";
import Counter from "../../../../../components/counter";

/**
 * @param {{onClick: Function}} props
 * @returns {JSX.Element}
 */
const EventAddMail = ({ onClick }) => {
  const [activeTab, setActiveTab] = useState("one");
  const [content, setContent] = useState([
    { type: "Regular", count: [1, 2] },
    { type: "Table", count: [1] },
  ]);

  const data = {
    tabs: [
      { type: "one", text: "SEND TO ONE EMAIL" },
      { type: "many", text: "SEND TO MULTIPLE EMAIL" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClick && onClick();
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <ul className="w-full flex justify-center items-center">
        {data?.tabs?.map((i) => (
          <li
            key={i.type}
            className={classNames(
              "w-[360px] h-[70px] grid place-items-center font-medium text-[18px] text-[#B8B8B8] border-b border-[#B8B8B8] border-solid cursor-pointer",
              { "border-[#FCC210] text-[#000]": activeTab === i.type },
            )}
            onClick={() => setActiveTab(i.type)}
          >
            {i.text}
          </li>
        ))}
      </ul>

      <div className="my-[80px] w-full max-w-[768px]">
        {activeTab === "one" ? (
          <div className=" w-full flex flex-col gap-[24px]">
            <Input label="Email" required />
            <Input label="Phone Number" type="tel" required />
          </div>
        ) : (
          <>
            {content?.map((i, idx) => (
              <div key={i.type}>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[24px] font-medium">{i.type}</p>
                  <Counter
                    initValue={i.count.length}
                    onChange={(v) => {
                      const copy = [...content];
                      const arr = [];
                      for (let i = 0; i < v; i++) {
                        arr.push(i);
                      }
                      copy[idx].count = arr;
                      setContent(() => copy);
                    }}
                  />
                </div>
                <ul>
                  {i.count.map((i) => (
                    <li className="py-[40px]" key={i}>
                      <div className=" w-full flex flex-col gap-[24px]">
                        <Input label="Email" required />
                        <Input label="Phone Number" type="tel" required />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
      <ul className="flex w-full flex-col gap-[20px]">
        <li className="flex items-center text-[20px] justify-between w-full font-medium">
          <p>Regular x2</p>
          <p className="font-bold">₦{numberFormatter(30000)}</p>
        </li>
        <li className="flex items-center text-[20px] justify-between w-full font-medium">
          <p>Table x1 </p>
          <p className="font-bold">₦{numberFormatter(1000000)}</p>
        </li>
      </ul>
      <div className="flex justify-end w-full mt-[80px]">
        <Button text="Continue" />
      </div>
    </form>
  );
};

EventAddMail.propTypes = {
  onClick: PropTypes.func,
};

export default EventAddMail;

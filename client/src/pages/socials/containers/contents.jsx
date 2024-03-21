import classNames from "classnames";
import { useState } from "react";
import SocialCard from "../components/socialCard";

const Content = () => {
  const [tabActive, setTabActive] = useState("Upcoming Events");
  const tabs = ["Upcoming Events", "Recent Events"];
  const tabCn = "cursor-pointer leading-[40px] relative text-[20px]";
  const activeCn =
    "before:absolute before:h-[1px] before:w-[180px] before:bg-primary before:bottom-0";

  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div className="py-[38px] px-[54px] pb-[54px] bg-white rounded-[20px] text-dark">
      <div className="w-full flex items-center justify-between mb-11">
        <ul className="flex gap-10">
          {tabs?.map((tab) => (
            <li
              onClick={() => setTabActive(tab)}
              key={tab}
              className={classNames(tabCn, { [activeCn]: tabActive === tab })}
            >
              {tab}
            </li>
          ))}
        </ul>
        <button className="text-lg font-medium border border-dark border-solid w-[160px] h-[54px] rounded-[10px]">
          Create Event
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {cards?.map((card) => (
          <SocialCard key={card} />
        ))}
      </div>
    </div>
  );
};

export default Content;

import classNames from "classnames";
import { useEffect, useState } from "react";
import SocialCard from "../components/socialCard";
import useEvent from "../../../hooks/api/event";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [tabActive, setTabActive] = useState("Upcoming Events");
  const navigate = useNavigate();
  const tabs = ["Upcoming Events", "Recent Events"];
  const { handleGetEvents, getEventsData } = useEvent();
  const tabCn =
    "cursor-pointer leading-[32px] lg:leading-[40px] relative text-[16px] lg:text-[20px]";
  const activeCn =
    "before:absolute before:h-[1px] before:w-[120px] lg:before:w-[180px] before:bg-primary before:bottom-0";

  // const cards = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    handleGetEvents();
  }, []);
  // console.log(getEventsData?.data);
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-[0px] sm:px-[24px] lg:px-[80px] w-full">
        <div className="py-[38px] px-[24px] lg:px-[54px] pb-[54px] bg-white rounded-[20px] text-dark">
          <div className="hidden w-full  items-center justify-between mb-9 lg:mb-11">
            <ul className="flex gap-6 lg:gap-10">
              {tabs?.map((tab) => (
                <li
                  onClick={() => setTabActive(tab)}
                  key={tab}
                  className={classNames(tabCn, {
                    [activeCn]: tabActive === tab,
                  })}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("create-event")}
              className="hidden sm:block text-lg font-medium border border-dark border-solid w-[160px] h-[54px] rounded-[10px]"
            >
              Create Event
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getEventsData?.data?.map((card) => (
              <SocialCard key={card?.id} data={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

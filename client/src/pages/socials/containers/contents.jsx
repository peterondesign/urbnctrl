// import classNames from "classnames";
import { useEffect } from "react";
import SocialCard from "../components/socialCard";
import useEvent from "../../../hooks/api/event";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";

const Content = () => {
  // const [tabActive, setTabActive] = useState("Upcoming Events");
  const navigate = useNavigate();
  // const tabs = ["Upcoming Events", "Recent Events"];
  const { handleGetEvents, getEventsData } = useEvent();
  // const tabCn =
  //   "cursor-pointer leading-[32px] lg:leading-[40px] relative text-[16px] lg:text-[20px]";
  // const activeCn =
  //   "before:absolute before:h-[1px] before:w-[120px] lg:before:w-[180px] before:bg-primary before:bottom-0";

  useEffect(() => {
    handleGetEvents({ page: 1, limit: 10 });
  }, []);
  const events = getEventsData?.data?.results;
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-[0px] sm:px-[24px] lg:px-[80px] w-full">
        <div className="py-[38px] px-[24px] lg:px-[54px] pb-[54px] bg-white rounded-[20px] text-dark">
          <div className="flex w-full  items-center justify-between mb-9 lg:mb-11">
            <h2 className="text-[32px] font-semibold">Events</h2>
            <button
              onClick={() => navigate("create-event")}
              className=" block text-lg font-medium border border-dark border-solid w-[160px] h-[54px] rounded-[10px]"
            >
              Create Event
            </button>
          </div>
          {getEventsData?.loading && (
            <div className="h-[410px] lg:h-[472px] grid place-items-center ">
              <Loader size="50" />
            </div>
          )}
          {!getEventsData?.loading &&
            events?.data &&
            (events?.data?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {events?.data?.map((card) => (
                  <SocialCard key={card?.id} data={card} />
                ))}
              </div>
            ) : (
              <div className="h-[410px] lg:h-[472px] grid  w-full place-content-center">
                <p className="capitalize text-2xl font-bold">
                  No available event
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Content;

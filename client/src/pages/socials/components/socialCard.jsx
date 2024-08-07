import PropTypes from "prop-types";
import { useState } from "react";
import moment from "moment";

// import { speaker } from "../../../assets/images";

import LocationIcon from "../../../assets/svgs/location";
import Button from "../../../components/button";
import EventFormModal from "./eventFormModal";

const SocialCard = ({ data }) => {
  const [eventData, setEventData] = useState(null);
  return (
    <>
      {eventData && <EventFormModal open={eventData} onClose={setEventData} />}
      <div className="h-[410px] lg:h-[472px] overflow-hidden flex flex-col w-full bg-[#FBF9F9] relative before:w-[70px] before:h-[70px] before:bg-white before:rounded-full before:absolute before:top-[calc(50%-0px)] lg:before:top-[calc(50%-20px)] before:left-[-50px] before:-translate-y-1/2  after:w-[70px] after:h-[70px] after:bg-white after:rounded-full after:absolute after:top-[calc(50%-0px)] lg:after:top-[calc(50%-20px)] after:right-[-50px] after:-translate-y-1/2 rounded-e-lg before:z-10 after:z-10 ">
        <div className=" h-[210px] lg:h-[230px] w-full flex-shrink-0 relative">
          <img src={data?.img} alt="" className="w-full h-full object-cover" />
          <p className="uppercase w-[54px] h-[54px] bg-primary text-center font-bold grid place-items-center absolute z-[3] top-[12px] left-[25px]">
            {moment(data?.startDay).format("DD MMM")}
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-between px-6 pt-[40px] lg:pt-[50px] pb-5">
          <div className="flex-1">
            <h2 className="font-bold text-base leading-4 lg:text-xl lg:leading-[20px] mb-3 lg:mb-[16px]">
              {data?.name}
            </h2>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <LocationIcon />
              <p className="capitalize">{data?.address}</p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button
              text="get ticket"
              className="rounded-xl"
              onClick={() => setEventData(data)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

SocialCard.propTypes = {
  data: PropTypes.object,
};

export default SocialCard;

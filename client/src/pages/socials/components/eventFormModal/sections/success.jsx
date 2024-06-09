import { successPhone } from "../../../../../assets/images";

const EventSuccess = () => {
  return (
    <div className=" text-center">
      <img
        src={successPhone}
        alt=""
        className="w-full h-[360px] object-contain"
      />
      <h2 className="font-bold text-[40px] mt-6">
        TICKET PURCHASED SUCCESSFULLY
      </h2>
      <p className="text-[#5B5656] text-[24px] font-medium mb-8">
        Your ticket receipt will be sent to the email address you provided.
      </p>
    </div>
  );
};

export default EventSuccess;

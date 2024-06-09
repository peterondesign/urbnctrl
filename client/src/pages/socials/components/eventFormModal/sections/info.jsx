import PropTypes from "prop-types";
import { speaker } from "../../../../../assets/images";
import Button from "../../../../../components/button";
import Counter from "../../../../../components/counter";
import numberFormatter from "../../../../../utils/numberFormatter";

/**
 * @param {{onClick: Function}} props
 * @returns {JSX.Element}
 */
const EventInfo = ({ onClick }) => {
  const data = {
    details: [
      { type: "Date", value: "Tuesday, 20th December 2023" },
      { type: "Time:", value: "11;00PM (WAT)" },
      {
        type: "Location",
        value: "Plot 205, Shodeinde close, Palms mall Lagos.",
      },
      {
        type: "Details",
        value:
          "Savage Rave is more than just a party; it's an embodiment of confidence, liberty, and fearless fun Set against the backdrop of the shimmering Wave Beach.",
      },
    ],
    pricing: [
      { type: "Regular", amount: 15000 },
      { type: "VIP", amount: 100000 },
      { type: "Table", amount: 1000000 },
    ],
  };
  return (
    <div className="w-full">
      <h2 className="text-center font-medium text-[#232121] text-[32px] mb-9">
        Event Detail
      </h2>

      <div className="w-full flex gap-10 h-fit border-b border-solid border-[#D9D9D9] pb-8 mb-8">
        <div className="w-[340px] flex-shrink-0">
          <img
            src={speaker}
            alt="event image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Omah Lay Unplugged 2023-REGULAR
          </h3>
          <div className="w-full flex flex-col gap-5">
            {data?.details?.map((i) => (
              <div key={i.type} className="flex  w-full gap-[8px]">
                <p className="w-[120px] flex-shrink-0 font-bold text-2xl">
                  {i.type}:
                </p>
                <p className="font-medium text-[20px]">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit border-b border-solid border-[#D9D9D9] pb-8 mb-8">
        <h3 className="text-[32px] mb-[32px] font-bold">Pricing</h3>
        <div className="font-medium text-[24px]">
          <div className="grid grid-cols-3 text-[#737373] mb-[24px]">
            <p>Ticket type</p>
            <p>Amount</p>
            <p>Quantity</p>
          </div>
          <div className="flex flex-col gap-[24px] w-full">
            {data?.pricing?.map((i) => (
              <div className="grid grid-cols-3" key={i.type}>
                <p>{i.type}</p>
                <p>₦{numberFormatter(i.amount)}</p>
                <Counter />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit mb-[60px]">
        <h3 className="text-[32px] mb-[32px] font-bold">Ticket Order</h3>

        <ul className="flex w-full flex-col gap-[20px]">
          <li className="flex items-center text-[20px] justify-between w-full font-medium">
            <p>Regular x2</p>
            <p className="font-bold">₦{numberFormatter(30000)}</p>
          </li>
          <li className="flex items-center text-[20px] justify-between w-full font-medium">
            <p>Table x1 </p>
            <p className="font-bold">₦{numberFormatter(1000000)}</p>
          </li>
          <li className="flex items-center text-[20px] justify-between w-full font-medium pt-[20px]">
            <p>Total price </p>
            <p className="font-bold">₦{numberFormatter(1030000)}</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-end w-full">
        <Button text="Make Payment" onClick={onClick} />
      </div>
    </div>
  );
};

EventInfo.propTypes = {
  onClick: PropTypes.func,
};

export default EventInfo;

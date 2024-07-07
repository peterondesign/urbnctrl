import PropTypes from "prop-types";
// import { speaker } from "../../../../../assets/images";
import Button from "../../../../../components/button";
import Counter from "../../../../../components/counter";
import numberFormatter from "../../../../../utils/numberFormatter";
import moment from "moment-timezone";
import { useState } from "react";

/**
 * @param {{onClick: Function}} props
 * @returns {JSX.Element}
 */
const EventInfo = ({ onClick, data }) => {
  const [ticketCount, setTIcketCount] = useState({
    vip: 0,
    table: 0,
    regular: 0,
  });

  return (
    <div className="w-full">
      <h2 className="text-center font-medium text-[#232121] text-[32px] mb-9">
        Event Detail
      </h2>

      <div className="w-full flex gap-10 h-fit border-b border-solid border-[#D9D9D9] pb-8 mb-8">
        <div className="w-[340px] flex-shrink-0">
          <img
            src={data?.img}
            alt="event image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">{data?.name}</h3>
          <div className="w-full flex flex-col gap-5">
            <div className="flex  w-full gap-[8px]">
              <p className="w-[120px] flex-shrink-0 font-bold text-2xl">
                Date:
              </p>
              <p className="font-medium text-[20px]">
                {moment(data?.stateDay).format("dddd, Do MMMM YYYY")}
              </p>
            </div>
            <div className="flex  w-full gap-[8px]">
              <p className="w-[120px] flex-shrink-0 font-bold text-2xl">
                Time:
              </p>
              <p className="font-medium text-[20px]">
                {moment(data?.stateDay).format("hh:mm A")}
              </p>
            </div>
            <div className="flex  w-full gap-[8px]">
              <p className="w-[120px] flex-shrink-0 font-bold text-2xl">
                Location:
              </p>
              <p className="font-medium text-[20px] capitalize">
                {data?.address}
              </p>
            </div>
            <div className="flex  w-full gap-[8px]">
              <p className="w-[120px] flex-shrink-0 font-bold text-2xl">
                Details:
              </p>
              <p className="font-medium text-[20px]">{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
      {(data?.regular > 0 || data?.vip > 0 || data?.table > 0) && (
        <div className="w-full h-fit border-b border-solid border-[#D9D9D9] pb-8 mb-8">
          <h3 className="text-[32px] mb-[32px] font-bold">Pricing</h3>
          <div className="font-medium text-[24px]">
            <div className="grid grid-cols-3 text-[#737373] mb-[24px]">
              <p>Ticket type</p>
              <p>Amount</p>
              <p>Quantity</p>
            </div>

            <div className="flex flex-col gap-[24px] w-full">
              {data?.regular > 0 && (
                <div className="grid grid-cols-3">
                  <p>Regular</p>
                  <p>₦{numberFormatter(data?.regular)}</p>
                  <Counter
                    max={999}
                    onChange={(v) =>
                      setTIcketCount((prev) => ({
                        ...prev,
                        regular: data?.regular * v,
                      }))
                    }
                  />
                </div>
              )}
              {data?.vip > 0 && (
                <div className="grid grid-cols-3">
                  <p>VIP</p>
                  <p>₦{numberFormatter(data?.vip)}</p>
                  <Counter
                    max={999}
                    onChange={(v) =>
                      setTIcketCount((prev) => ({
                        ...prev,
                        vip: data?.vip * v,
                      }))
                    }
                  />
                </div>
              )}
              {data?.table > 0 && (
                <div className="grid grid-cols-3">
                  <p>Table</p>
                  <p>₦{numberFormatter(data?.table)}</p>
                  <Counter
                    max={999}
                    onChange={(v) =>
                      setTIcketCount((prev) => ({
                        ...prev,
                        table: data?.table * v,
                      }))
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-fit mb-[60px]">
        <h3 className="text-[32px] mb-[32px] font-bold">Ticket Order</h3>

        <ul className="flex w-full flex-col gap-[20px]">
          {data?.regular > 0 && (
            <li className="flex items-center text-[20px] justify-between w-full font-medium">
              <p>
                Regular{" "}
                {ticketCount.regular !== 0
                  ? `x${ticketCount.regular / data?.regular}`
                  : null}
              </p>
              <p className="font-bold">
                ₦{numberFormatter(ticketCount?.regular)}
              </p>
            </li>
          )}
          {data?.table > 0 && (
            <li className="flex items-center text-[20px] justify-between w-full font-medium">
              <p>
                Table{" "}
                {ticketCount.table !== 0
                  ? `x${ticketCount.table / data?.table}`
                  : null}
              </p>
              <p className="font-bold">₦{numberFormatter(ticketCount.table)}</p>
            </li>
          )}
          {data?.vip > 0 && (
            <li className="flex items-center text-[20px] justify-between w-full font-medium">
              <p>
                VIP{" "}
                {ticketCount.vip !== 0
                  ? `x${ticketCount.vip / data?.vip}`
                  : null}
              </p>
              <p className="font-bold">₦{numberFormatter(ticketCount.vip)}</p>
            </li>
          )}
          <li className="flex items-center text-[20px] justify-between w-full font-medium pt-[20px]">
            <p>Total price </p>
            <p className="font-bold">
              ₦
              {numberFormatter(
                ticketCount.regular + ticketCount.table + ticketCount.vip
              )}
            </p>
          </li>
        </ul>
      </div>
      <div className="flex justify-end w-full">
        {!ticketCount?.regular > 0 &&
        !ticketCount?.table > 0 &&
        !ticketCount?.vip > 0 &&
        data?.eventType !== "free" ? (
          <Button text="Make Payment" disabled />
        ) : (
          <Button
            text="Make Payment"
            onClick={() => {
              onClick(ticketCount);
            }}
          />
        )}
      </div>
    </div>
  );
};

EventInfo.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object,
};

export default EventInfo;

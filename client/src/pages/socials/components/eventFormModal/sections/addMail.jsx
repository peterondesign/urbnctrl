import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import numberFormatter from "../../../../../utils/numberFormatter";
import Button from "../../../../../components/button";
import Input from "../../../../../components/input";
import Counter from "../../../../../components/counter";
import usePayment from "../../../../../hooks/api/payment";

/**
 * @param {{onClick: Function}} props
 * @returns {JSX.Element}
 */
const EventAddMail = ({ onClick, sectionData, data }) => {
  const [activeTab, setActiveTab] = useState("one");
  const [ticketCount] = useState(sectionData?.info);
  const [form, setForm] = useState(null);

  const { handleMakePayment, makePaymentData } = usePayment();

  const [content, setContent] = useState([
    { type: "Regular", count: [1, 2] },
    { type: "Table", count: [1] },
  ]);

  const data1 = {
    tabs: [
      { type: "one", text: "SEND TO ONE EMAIL" },
      { type: "many", text: "SEND TO MULTIPLE EMAIL" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "one") {
      handleMakePayment({
        ...ticketCount,
        EventId: data?.id,
        email: form?.email,
        totol: ticketCount?.vip + ticketCount?.regular + ticketCount?.table,
      });
    }
  };

  useEffect(() => {
    if (activeTab === "one") {
      setForm({
        email: "",
        phoneNo: "",
      });
    }
  }, [activeTab]);

  console.log(makePaymentData);
  const disableBtn = () => {
    if (activeTab === "one") return !form?.email || !form?.phoneNo;
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <ul className="w-full flex justify-center items-center">
        {data1?.tabs?.map((i) => (
          <li
            key={i.type}
            className={classNames(
              "w-[360px] h-[70px] grid place-items-center font-medium text-[18px] text-[#B8B8B8] border-b border-[#B8B8B8] border-solid cursor-pointer",
              { "border-[#FCC210] text-[#000]": activeTab === i.type }
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
            <Input
              label="Email"
              type="email"
              required
              value={form?.email || ""}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
            />
            <Input
              label="Phone Number"
              type="number"
              required
              value={form?.phoneNo || ""}
              onChange={(e) =>
                setForm((p) => ({ ...p, phoneNo: e.target.value }))
              }
            />
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
              {ticketCount.vip !== 0 ? `x${ticketCount.vip / data?.vip}` : null}
            </p>
            <p className="font-bold">₦{numberFormatter(ticketCount.vip)}</p>
          </li>
        )}
      </ul>
      <div className="flex justify-end w-full mt-[80px]">
        {disableBtn() ? (
          <Button text="Continue" disabled />
        ) : (
          <Button text="Continue" />
        )}
      </div>
    </form>
  );
};

EventAddMail.propTypes = {
  onClick: PropTypes.func,
  sectionData: PropTypes.object,
  data: PropTypes.object,
};

export default EventAddMail;

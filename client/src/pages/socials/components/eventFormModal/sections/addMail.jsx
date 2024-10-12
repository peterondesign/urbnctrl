// import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import numberFormatter from "../../../../../utils/numberFormatter";
import Button from "../../../../../components/button";
import Input from "../../../../../components/input";
// import Counter from "../../../../../components/counter";
import usePayment from "../../../../../hooks/api/payment";

const EventAddMail = ({ sectionData, data }) => {
  const [activeTab, setActiveTab] = useState("one");
  const [ticketCount] = useState(sectionData?.info);
  const [form, setForm] = useState(null);

  const { handleMakePayment, makePaymentData } = usePayment();

  // const data1 = {
  //   tabs: [
  //     { type: "one", text: "SEND TO ONE EMAIL" },
  //     { type: "many", text: "SEND TO MULTIPLE EMAIL" },
  //   ],
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = ticketCount?.vip + ticketCount?.regular + ticketCount?.table;
    if (activeTab === "one") {
      const res = await handleMakePayment({
        vip: ticketCount?.vip > 0 ? [form?.email] : [],
        regular: ticketCount?.regular > 0 ? [form?.email] : [],
        table: ticketCount?.table > 0 ? [form?.email] : [],
        EventId: data?.id,
        email: form?.email,
        total,
      });
      window.location.href = res.data;
    } else {
      const regular = form?.regular?.map((i) => i?.email);
      const table = form?.table?.map((i) => i?.email);
      const vip = form?.vip?.map((i) => i?.email);
      const res = await handleMakePayment({
        ...form,
        total,
        regular,
        table,
        vip,
        EventId: data?.id,
      });
      window.location.href = res.data;
    }
  };
  const handleNumArray = (type) => {
    if (data[type]) {
      const times = ticketCount[type] / data[type];
      let array = [];
      for (let index = 0; index < times; index++) {
        array.push({
          email: "",
          phoneNo: "",
          id: index,
        });
      }
      return array;
    }
    return [];
  };

  useEffect(() => {
    if (activeTab === "many") {
      setForm({
        email: "",
        regular: handleNumArray("regular"),
        table: handleNumArray("table"),
        vip: handleNumArray("vip"),
      });
    } else {
      setForm({
        email: "",
        phoneNo: "",
      });
    }
  }, [activeTab]);

  const handleInputUpdateState = (type, index, key, inputValue) => {
    setForm((prev) => {
      const value = {
        ...prev?.[type][index],
        [key]: inputValue,
      };
      const copyType = prev?.regular;
      copyType[index] = value;

      return { ...prev, [type]: copyType };
    });
  };

  useEffect(() => {
    function checkSingleTicket() {
      // Check if one is greater than 0 and the rest are 0
      const vipCount = ticketCount?.vip / data?.vip;
      const regularCount = ticketCount?.regular / data?.regular;
      const tableCount = ticketCount?.table / data?.table;
      return (
        (vipCount === 1 && tableCount === 0 && regularCount === 0) ||
        (tableCount === 1 && vipCount === 0 && regularCount === 0) ||
        (regularCount === 1 && vipCount === 0 && tableCount === 0)
      );
    }

    const isSingle = checkSingleTicket();
    if (isSingle) {
      setActiveTab("one");
    } else {
      setActiveTab("many");
    }
  }, []);
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {/* <ul className="w-full flex justify-center items-center">
        {data1?.tabs?.map((i) => (
          <li
            key={i.type}
            className={classNames(
              "w-[50%]  md:w-[360px] h-[50px] sm:h-[70px] grid place-items-center font-medium text-[12px] sm:text-[18px]  border-b border-[#B8B8B8] border-solid cursor-pointer",
              { "border-[#FCC210] text-[#000000]": activeTab === i.type },

              { "text-[#B8B8B8]": activeTab !== i.type }
            )}
            onClick={() => setActiveTab(i.type)}
          >
            {i.text}
          </li>
        ))}
      </ul> */}

      <div className="my-[80px] w-full max-w-[768px]">
        {activeTab !== "many" ? (
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
            <div>
              <div className="w-full ">
                <p className="text-[24px] font-medium">Buyer</p>
                <div className="pb-[40px] pt-[20px]">
                  <Input
                    label="Email"
                    required
                    value={form?.email || ""}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, email: e.target.value }));
                    }}
                  />
                </div>
              </div>
            </div>
            {form?.regular?.length > 0 && (
              <div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[24px] font-medium">Regular</p>
                </div>
                <ul>
                  {handleNumArray("regular").map((content, idx) => (
                    <li className="py-[40px]" key={content.id}>
                      <div className=" w-full flex flex-col gap-[24px]">
                        <Input
                          label="Email"
                          required
                          value={form?.regular[idx]?.email || ""}
                          onChange={(e) =>
                            handleInputUpdateState(
                              "regular",
                              idx,
                              "email",
                              e.target.value
                            )
                          }
                        />
                        <Input
                          label="Phone Number"
                          value={form?.regular[idx]?.phoneNo || ""}
                          type="number"
                          required
                          onChange={(e) =>
                            handleInputUpdateState(
                              "regular",
                              idx,
                              "phoneNo",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {form?.table?.length > 0 && (
              <div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[24px] font-medium">Table</p>
                </div>
                <ul>
                  {handleNumArray("table").map((content, idx) => (
                    <li className="py-[40px]" key={content.id}>
                      <div className=" w-full flex flex-col gap-[24px]">
                        <Input
                          label="Email"
                          value={form?.table[idx]?.email || ""}
                          required
                          onChange={(e) =>
                            handleInputUpdateState(
                              "table",
                              idx,
                              "email",
                              e.target.value
                            )
                          }
                        />
                        <Input
                          label="Phone Number"
                          value={form?.table[idx]?.phoneNo || ""}
                          type="number"
                          required
                          onChange={(e) =>
                            handleInputUpdateState(
                              "table",
                              idx,
                              "phoneNo",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {form?.vip?.length > 0 && (
              <div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[24px] font-medium">VIP</p>
                </div>
                <ul>
                  {handleNumArray("vip").map((content, idx) => (
                    <li className="py-[40px]" key={content.id}>
                      <div className=" w-full flex flex-col gap-[24px]">
                        <Input
                          label="Email"
                          required
                          value={form?.vip[idx]?.email || ""}
                          onChange={(e) =>
                            handleInputUpdateState(
                              "vip",
                              idx,
                              "email",
                              e.target.value
                            )
                          }
                        />
                        <Input
                          label="Phone Number"
                          value={form?.vip[idx]?.phoneNo || ""}
                          type="number"
                          required
                          onChange={(e) =>
                            handleInputUpdateState(
                              "vip",
                              idx,
                              "phoneNo",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
      <ul className="flex w-full flex-col gap-[20px]">
        {ticketCount.regular / data?.regular > 0 && (
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
        {ticketCount.table / data?.table > 0 && (
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
        {ticketCount.vip / data?.vip > 0 && (
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
        <Button text="Continue" loading={makePaymentData?.loading} />
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

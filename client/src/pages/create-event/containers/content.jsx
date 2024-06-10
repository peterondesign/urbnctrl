import { useMemo, useState } from "react";
import Input from "../../../components/input";
import Radio from "../../../components/radio";
import Textarea from "../../../components/textarea";
import Button from "../../../components/button";
import DateInput from "../components/dateInput";
import UploadMedia from "../components/uploadMedia";
import EventDropdown from "../components/dropdown";
import useEvent from "../../../hooks/api/event";
import useUpload from "../../../hooks/api/upload";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    description: "",
    url: "",
    address: "",
    eventType: "paid",
    startDay: new Date(),
    startTime: new Date(),
    endDay: new Date(),
    endTime: new Date(),
    frequency: "",
    regular: "",
    vip: "",
    table: "",
    img: null,
  });

  const handleChange = (key, value) => {
    setValue((prev) => ({ ...prev, [key]: value }));
  };
  const { handleCreateEvent, createEventData } = useEvent();
  const { handleUpload, getUploadedData } = useUpload();
  const navigate = useNavigate();

  const notValid = useMemo(() => {
    const requiredFields = [
      "name",
      "email",
      "description",
      "url",
      "address",
      "eventType",
      "startDay",
      "startTime",
      "endDay",
      "endTime",
      "frequency",
      "img",
    ];

    for (const field of requiredFields) {
      if (!value[field]) {
        return true;
      }
    }
    return false;
  }, [value]);

  const handleCreate = async (e) => {
    e?.preventDefault();

    const handleSuccess = (msg) => {
      toast.success(msg);
      navigate("/socials", { replace: true });
    };
    if (!notValid) {
      const formdata = new FormData();
      formdata.append("img", value.img?.file);
      const uploadRes = await handleUpload(formdata);
      const image = uploadRes?.data[0];
      const copyValue = { ...value, img: image };
      if (copyValue?.eventType !== "paid") {
        const res = await handleCreateEvent({
          ...copyValue,
          regular: 0,
          vip: 0,
          table: 0,
        });
        handleSuccess(res?.data);
        return;
      }
      const res = await handleCreateEvent(copyValue);
      handleSuccess(res?.data);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-0 sm:px-[24px] lg:px-[80px] w-full">
      <form
        className="py-[40px] lg:py-[70px] px-[24px] lg:px-[100px] rounded-[20px] bg-white text-dark"
        onSubmit={handleCreate}
      >
        <h2 className="text-3xl font-bold">Create Event</h2>
        <div className="w-full max-w-[788px] ">
          <div className="mt-10 w-full flex flex-col gap-8">
            <Input
              required
              label="Name of Event"
              placeholder="Ensure your event name is concise and catchy..."
              value={value.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <Input
              label="Email Address"
              required
              type="email"
              value={value.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <fieldset id="payment-type" className="flex w-full justify-between">
              <Radio
                label="Paid"
                name="payment-type"
                value="paid"
                checked={value?.eventType === "paid"}
                onChange={(e) => handleChange("eventType", e.target.value)}
              />
              <Radio
                label="Free"
                name="payment-type"
                value="free"
                checked={value?.eventType === "free"}
                onChange={(e) => handleChange("eventType", e.target.value)}
              />
              {/* <Radio
                label="RSVP"
                name="payment-type"
                value="rsvp"
                checked={value?.type === "rsvp"}
                onChange={(e) => handleChange("type", e.target.value)}
              /> */}
              <div className="invisible">s</div>
            </fieldset>
            <Textarea
              label="Event Description"
              required
              placeholder="Tell us about your event in 240 characters!"
              maxLength={240}
              value={value.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <Input
              label="Address"
              required
              value={value.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
            <Input
              label="Google map URL"
              required
              value={value.url}
              onChange={(e) => handleChange("url", e.target.value)}
            />
            <div>
              <p className="text-[20px] leading-[20px] mb-3">
                Start date and time
              </p>
              <DateInput
                className="w-[480px]"
                minDate={new Date()}
                selected={value.startDay}
                onChange={(date) => {
                  handleChange("startDay", date);
                  handleChange("startime", date);
                }}
              />
            </div>
            <div>
              <p className="text-[20px] leading-[20px] mb-3">
                End date and time
              </p>
              <DateInput
                className="w-[480px]"
                minDate={value?.startDay}
                selected={value?.endDay}
                onChange={(date) => {
                  handleChange("endDay", date);
                  handleChange("endTime", date);
                }}
              />
            </div>
            <div className="">
              <EventDropdown onChange={(v) => handleChange("frequency", v)} />
            </div>
            <div className="pt-5">
              <p className="text-[20px] leading-[20px] mb-5">Image Upload</p>
              <UploadMedia
                onChange={(v) => {
                  handleChange("img", v);
                }}
              />
            </div>

            {value?.eventType === "paid" && (
              <div className="flex flex-col w-full lg:w-[600px] mt-10">
                <div className="flex-1 grid grid-cols-2 ">
                  <p className="text-xl font-semibold mb-9">Category</p>{" "}
                  <p className="text-xl font-semibold mb-9 text-center">
                    Price
                  </p>
                </div>
                <div className="flex-1">
                  <div className="[&>p]:leading-[63px] flex flex-col gap-[24px] ">
                    <div className="items-center grid grid-rows-2 lg:grid-cols-2 [&>p]:text-[20px] [&>p]:font-medium ">
                      <p>Regular</p>
                      <div className="flex flex-col gap-[24px] [&>input]:h-[63px] [&>input]:border [&>input]:border-[#4E4E4E] [&>input]:outline-none [&>input]:px-[16px] [&>input]:text-[20px]">
                        <input
                          type="number"
                          required
                          value={value?.regular}
                          onChange={(e) => {
                            const { value } = e.target;
                            if (value === "" || /^[0-9]+$/.test(value)) {
                              const numericValue = value?.replace(
                                /[^0-9]/g,
                                "",
                              );
                              handleChange("regular", numericValue);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="items-center grid grid-rows-2 lg:grid-cols-2 [&>p]:text-[20px] [&>p]:font-medium ">
                      <p>VIP</p>
                      <div className="flex flex-col gap-[24px] [&>input]:h-[63px] [&>input]:border [&>input]:border-[#4E4E4E] [&>input]:outline-none [&>input]:px-[16px] [&>input]:text-[20px]">
                        <input
                          type="number"
                          required
                          value={value?.vip}
                          onChange={(e) => {
                            const { value } = e.target;
                            if (value === "" || /^[0-9]+$/.test(value)) {
                              const numericValue = value?.replace(
                                /[^0-9]/g,
                                "",
                              );
                              handleChange("vip", numericValue);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="items-center grid grid-rows-2 lg:grid-cols-2 [&>p]:text-[20px] [&>p]:font-medium  ">
                      <p>Table</p>
                      <div className="flex flex-col gap-[24px] [&>input]:h-[63px] [&>input]:border [&>input]:border-[#4E4E4E] [&>input]:outline-none [&>input]:px-[16px] [&>input]:text-[20px]">
                        <input
                          type="number"
                          required
                          value={value?.vip}
                          onChange={(e) => {
                            const { value } = e.target;
                            if (value === "" || /^[0-9]+$/.test(value)) {
                              const numericValue = value?.replace(
                                /[^0-9]/g,
                                "",
                              );
                              handleChange("table", numericValue);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      required
                      value={value?.table}
                      onChange={(e) => {
                        const { value } = e.target;
                        if (value === "" || /^[0-9]+$/.test(value)) {
                          const numericValue = value?.replace(/[^0-9]/g, "");
                          handleChange("table", numericValue);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end pt-10">
          {notValid ? (
            <Button text="Upload Details" disabled />
          ) : (
            <Button
              text="Upload Details"
              onClick={handleCreate}
              loading={createEventData?.loading || getUploadedData?.loading}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Content;

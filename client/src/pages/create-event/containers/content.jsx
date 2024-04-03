import { useState } from "react";
import Input from "../../../components/input";
import Radio from "../../../components/radio";
import Textarea from "../../../components/textarea";
import Button from "../../../components/button";
import DateInput from "../components/dateInput";
import UploadMedia from "../components/uploadMedia";

const Content = () => {
  const [value, setValue] = useState({
    type: "paid",
    stateDate: new Date(),
    endDate: new Date(),
  });

  const handleChange = (key, value) => {
    setValue((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="max-w-[1440px] mx-auto px-0 sm:px-[24px] lg:px-[80px] w-full">
      <div className="py-[40px] lg:py-[70px] px-[24px] lg:px-[100px] rounded-[20px] bg-white text-dark ">
        <h2 className="text-3xl font-bold">Create Event</h2>
        <div className="w-full max-w-[788px] ">
          <div className="mt-10 w-full flex flex-col gap-8">
            <Input
              label="Name of Event"
              placeholder="Ensure your event name is concise and catchy..."
            />
            <Input label="Email Address" type="email" />
            <fieldset id="payment-type" className="flex w-full justify-between">
              <Radio
                label="Paid"
                name="payment-type"
                value="paid"
                checked={value?.type === "paid"}
                onChange={(e) => handleChange("type", e.target.value)}
              />
              <Radio
                label="Free"
                name="payment-type"
                value="free"
                checked={value?.type === "free"}
                onChange={(e) => handleChange("type", e.target.value)}
              />
              <Radio
                label="RSVP"
                name="payment-type"
                value="rsvp"
                checked={value?.type === "rsvp"}
                onChange={(e) => handleChange("type", e.target.value)}
              />
            </fieldset>
            <Textarea
              label="Event Description"
              placeholder="Tell us about your event in 240 characters!"
            />
            <Input label="Address" />
            <Input label="Google map URL" />
            <div>
              <p className="text-[20px] leading-[20px] mb-3">
                Start date and time
              </p>
              <DateInput
                className="w-[480px]"
                selected={value.stateDate}
                onChange={(date) => handleChange("stateDate", date)}
              />
            </div>
            <div>
              <p className="text-[20px] leading-[20px] mb-3">
                End date and time
              </p>
              <DateInput
                className="w-[480px]"
                minDate={value?.stateDate}
                selected={value.endDate}
                onChange={(date) => handleChange("endDate", date)}
              />
            </div>
            <div className="pt-5">
              <p className="text-[20px] leading-[20px] mb-5">Image Upload</p>
              <UploadMedia />
            </div>

            {value?.type === "paid" && (
              <div className="flex w-[600px] mt-10">
                <div className="flex-1">
                  <p className="text-xl font-semibold mb-9">Category</p>
                  <div className="[&>p]:leading-[63px] flex flex-col gap-[24px] [&>p]:text-[20px] [&>p]:font-medium ">
                    <p>Regular</p>
                    <p>VIP</p>
                    <p>Table</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold mb-9 text-center">
                    Price
                  </p>
                  <div className="flex flex-col gap-[24px] [&>input]:h-[63px] [&>input]:border [&>input]:border-[#4E4E4E] [&>input]:outline-none [&>input]:px-[16px] [&>input]:text-[20px]">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end pt-10">
          <Button text="Create" />
        </div>
      </div>
    </div>
  );
};

export default Content;

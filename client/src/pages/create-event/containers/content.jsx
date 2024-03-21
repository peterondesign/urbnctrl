import { useState } from "react";
import Input from "../../../components/input";
import Radio from "../../../components/radio";
import Textarea from "../../../components/textarea";
import Button from "../../../components/button";

const Content = () => {
  const [value, setValue] = useState({
    type: "paid",
  });

  const handleChange = (key, value) => {
    setValue((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="py-[70px] px-[100px] rounded-[20px] bg-white text-dark">
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
        </div>
      </div>
      <div className="w-full flex justify-end pt-10">
        <Button text="Create" />
      </div>
    </div>
  );
};

export default Content;

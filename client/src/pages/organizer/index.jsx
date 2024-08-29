import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import useOrganizer from "../../hooks/api/organizer";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Organizer = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { handleVerifyEvent, verifyEventData } = useOrganizer();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await handleVerifyEvent({ code });
      toast.success(res?.data?.message);
      const token = res?.data?.token;
      Cookies.set("token", token, { expires: 1 });
      navigate("validate-ticlet");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <div className=" w-full lg:min-h-[450px] grid place-items-center ">
        <div className="w-full max-w-[600px] flex flex-col items-center">
          <h2 className="font-bold text-[24px] mb-[56px]">EVENT VALIDATION</h2>
          <p className="font-medium text-[16px] lg:text-[18px] mb-[24px] text-center">
            Please enter the event code sent to your email address.
          </p>
          <form
            className="w-full gap-[24px] flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <Input
              value={code}
              onChange={(e) => {
                setCode(e?.target?.value);
              }}
            />
            <Button text="Continue" loading={verifyEventData?.loading} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Organizer;

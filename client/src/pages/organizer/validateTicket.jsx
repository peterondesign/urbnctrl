import Input from "../../components/input";
import Button from "../../components/button";
import CheckMarkIcon from "../../assets/svgs/checkMark";
import { useEffect, useState } from "react";
import useOrganizer from "../../hooks/api/organizer";
import ModalContainer from "../../components/modalContainer";
import Loader from "../../components/loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import FailModal from "./components/failModal";
import SuccessModal from "./components/successModal";

const ValidateTicket = () => {
  const [ticketCode, setTicketCode] = useState("");
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const { handleGetEvent, getEventData, handleVerifyTicket, verifyTicketData } =
    useOrganizer();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetEvent().catch((err) => {
      const errData = err?.response?.data;
      toast.error(errData?.message);
      if (errData) {
        navigate("/organizer", { replace: true });
      }
    });
  }, []);

  const event = getEventData?.data?.results;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await handleVerifyTicket({ ticketCode });
      setSuccess(res?.data?.results);
    } catch (error) {
      setFailed(true);
    }
  };
  return (
    <>
      {getEventData?.loading && (
        <ModalContainer open>
          <Loader />
        </ModalContainer>
      )}
      {success && (
        <SuccessModal
          data={{ ...success, code: ticketCode }}
          onClose={setSuccess}
        />
      )}
      {failed && <FailModal onClose={setFailed} />}
      <div className=" w-full lg:min-h-[450px] grid place-items-center ">
        <div className="w-full max-w-[900px] flex flex-col items-center">
          <h2 className="font-bold text-[24px] mb-[56px]">EVENT VALIDATION</h2>

          {event && (
            <div className="bg-[#F5F5F5] py-[32px] px-[24px] w-full rounded-[24px] mb-[56px]">
              <div className="max-w-[568px] w-fit text-[#235B0F] bg-[#D2E5CB] px-[16px] flex gap-[8px] justify-between items-center py-[4px] rounded-[40px] mb-[24px]">
                <p className="text-[18px]">
                  Your event <span className="font-bold">{event?.name}</span> is
                  active
                </p>
                <CheckMarkIcon />
              </div>
              <div className="w-full h-[274px] flex gap-[40px]">
                <div className="max-w-[275px] flex-1 bg-dark flex-shrink-0">
                  <img
                    src={event?.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="text-[16px] flex-1 flex flex-col gap-[16px]">
                  <li className="flex gap-[24px]">
                    <p className="w-[70px] flex-shrink-0 font-bold">Date:</p>
                    <p>
                      {moment(event?.startDay).format("dddd, Do MMMM YYYY")}
                    </p>
                  </li>
                  <li className="flex gap-[24px]">
                    <p className="w-[70px] flex-shrink-0 font-bold">Time:</p>
                    <p>{moment(event?.startDay).format("h:mm A")}</p>
                  </li>
                  <li className="flex gap-[24px]">
                    <p className="w-[70px] flex-shrink-0 font-bold">Details:</p>
                    <p>{event?.description}</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <p className="font-medium text-[16px] lg:text-[18px] mb-[24px] text-center">
            Enter ticket code to validate ticket.
          </p>

          <div className="max-w-[600px] mx-auto w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full gap-[24px] flex flex-col items-center"
            >
              <Input
                value={ticketCode}
                onChange={(e) => {
                  setTicketCode(e?.target?.value);
                }}
              />
              <Button text="Validate" loading={verifyTicketData?.loading} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidateTicket;

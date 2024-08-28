import Input from "../../components/input";
import Button from "../../components/button";
import CheckMarkIcon from "../../assets/svgs/checkMark";
import { speaker } from "../../assets/images";
// import FailModal from "./components/failModal";
// import SuccessModal from "./components/successModal";

const ValidateTicket = () => {
  return (
    <>
      {/* <SuccessModal /> */}
      {/* <FailModal /> */}
      <div className=" w-full lg:min-h-[450px] grid place-items-center ">
        <div className="w-full max-w-[900px] flex flex-col items-center">
          <h2 className="font-bold text-[24px] mb-[56px]">EVENT VALIDATION</h2>

          <div className="bg-[#F5F5F5] py-[32px] px-[24px] w-full rounded-[24px] mb-[56px]">
            <div className="max-w-[568px] w-full text-[#235B0F] bg-[#D2E5CB] px-[16px] flex gap-[8px] justify-between items-center py-[4px] rounded-[40px] mb-[24px]">
              <p className="text-[18px]">
                Your event{" "}
                <span className="font-bold">OMAHLAY UNPLUGGED 2023</span> is
                active
              </p>
              <CheckMarkIcon />
            </div>
            <div className="w-full min-h-[274px] flex gap-[40px]">
              <div className="max-w-[275px] flex-1 bg-dark flex-shrink-0">
                <img
                  src={speaker}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="text-[16px] flex-1 flex flex-col gap-[16px]">
                <li className="flex gap-[24px]">
                  <p className="w-[70px] flex-shrink-0 font-bold">Date:</p>
                  <p>Tuesday, 20th December 2023</p>
                </li>
                <li className="flex gap-[24px]">
                  <p className="w-[70px] flex-shrink-0 font-bold">Time:</p>
                  <p>11;00PM (WAT)</p>
                </li>
                <li className="flex gap-[24px]">
                  <p className="w-[70px] flex-shrink-0 font-bold">Details:</p>
                  <p>
                    Savage Rave is more than just a party; it&lsquo;s an
                    embodiment of confidence, liberty, and fearless fun Set
                    against the backdrop of the shimmering Wave Beach.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <p className="font-medium text-[16px] lg:text-[18px] mb-[24px] text-center">
            Enter ticket code to validate ticket.
          </p>

          <div className="max-w-[600px] mx-auto w-full">
            <form
              action=""
              className="w-full gap-[24px] flex flex-col items-center"
            >
              <Input />
              <Button text="Validate" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidateTicket;

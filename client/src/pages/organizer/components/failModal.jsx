import { fail } from "../../../assets/images";
import ModalContainer from "../../../components/modalContainer";
import PropTypes from "prop-types";

const FailModal = ({ onClose }) => {
  return (
    <ModalContainer open close={onClose}>
      <div className="bg-[#FFFFFF] w-full max-w-[700px] py-[32px] px-[24px] lg:px-[56px] rounded-[40px] flex flex-col gap-[48px] ">
        <h2 className="text-center text-[18px] lg:text-[24px] font-bold">
          INVALID TICKET
        </h2>
        <div className="flex w-full flex-col-reverse lg:flex-row items-center gap-[32px] justify-center">
          <div className="w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px] flex-shrink-0">
            <img src={fail} alt="" className="w-full h-full" />
          </div>
        </div>
        <p className="font-bold text-[10px] lg:text-[14px] text-center italic text-[#F91616]">
          NOTE: This ticket admits only one person and is valid for one entrance{" "}
        </p>
      </div>
    </ModalContainer>
  );
};

FailModal.propTypes = {
  onClose: PropTypes.func,
};

export default FailModal;

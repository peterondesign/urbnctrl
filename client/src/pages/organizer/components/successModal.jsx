import moment from "moment";
import { success } from "../../../assets/images";
import ModalContainer from "../../../components/modalContainer";
import PropTypes from "prop-types";

const SuccessModal = ({ onClose, data }) => {
  console.log(data);
  return (
    <ModalContainer open close={onClose}>
      <div className="bg-[#FFFFFF] w-full max-w-[700px] py-[32px] px-[24px] lg:px-[56px] rounded-[40px] flex flex-col gap-[48px] ">
        <h2 className="text-center text-[18px] lg:text-[24px] font-bold">
          Valid Ticket
        </h2>
        <div className="flex w-full flex-col-reverse lg:flex-row items-center gap-[32px] justify-between">
          <ul className="w-full text-[12px] lg:text-[15px] flex flex-col gap-[8px] lg:gap-[12px]">
            <li className="flex w-full">
              <p className="w-[160px] text-[#616161] font-medium uppercase">
                Purchase date:
              </p>
              <p className="flex-1 text-right font-medium">
                {moment(data?.createdAt).format("DD-MM-YYYY")}
              </p>
            </li>
            <li className="flex w-full">
              <p className="w-[160px] text-[#616161] font-medium uppercase">
                Code:
              </p>
              <p className="flex-1 text-right font-medium">{data?.code}</p>
            </li>
            <li className="flex w-full">
              <p className="w-[160px] text-[#616161] font-medium uppercase">
                EMAIL ADDRESS:
              </p>
              <p className="flex-1 text-right font-medium">{data?.email}</p>
            </li>
          </ul>
          <div className="w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px] flex-shrink-0">
            <img src={success} alt="" className="w-full h-full" />
          </div>
        </div>
        <p className="font-bold text-[10px] lg:text-[14px] text-center italic">
          NOTE: This ticket admits only one person and is valid for one entrance{" "}
        </p>
      </div>
    </ModalContainer>
  );
};

SuccessModal.propTypes = {
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default SuccessModal;

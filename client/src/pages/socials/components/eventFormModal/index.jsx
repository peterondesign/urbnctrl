import ModalContainer from "../../../../components/modalContainer";
import { CloseIcon2 } from "../../../../assets/svgs/close";
import EventCardDetails from "./sections/card";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import classNames from "classnames";
import EventSuccess from "./sections/success";
import EventInfo from "./sections/info";
import EventAddMail from "./sections/addMail";

/**
 * @param {{data: Object, open: boolean | object, onClose: Function}} props
 * @returns {JSX.Element}
 */
const EventFormModal = ({ open, onClose }) => {
  const [section, setSection] = useState("info");
  useEffect(() => {
    if (open) {
      setSection("info");
    }
  }, []);

  console.log(open);
  return (
    <ModalContainer open={Boolean(open)}>
      <div
        className={classNames(
          "w-full bg-white max-w-[1090px] rounded-[60px] py-[32px] px-[48px] text-[#000000]",
          { "max-w-[1024px": section === "card" || section === "success" }
        )}
      >
        <div className="flex w-full justify-end mb-9">
          <span
            className="cursor-pointer"
            onClick={() => onClose && onClose(null)}
          >
            <CloseIcon2 />
          </span>
        </div>
        {section === "mail" ? (
          <EventAddMail onClick={() => setSection("card")} />
        ) : section === "card" ? (
          <EventCardDetails onClick={() => setSection("success")} />
        ) : section === "success" ? (
          <EventSuccess />
        ) : (
          <EventInfo data={open} onClick={() => setSection("mail")} />
        )}
      </div>
    </ModalContainer>
  );
};

EventFormModal.propTypes = {
  data: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default EventFormModal;

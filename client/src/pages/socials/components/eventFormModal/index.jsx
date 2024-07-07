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
  const [section, setSection] = useState(null);
  const [sectionData, setSectionData] = useState({
    info: null,
    details: null,
  });
  useEffect(() => {
    if (open) {
      setSection(null);
      setSectionData({
        info: null,
        mail: null,
      });
    }
  }, []);

  console.log(open);
  console.log(sectionData);
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
          <EventAddMail
            onClick={(v) => {
              setSection("card");

              setSectionData((p) => ({ ...p, mail: v }));
            }}
            sectionData={sectionData}
            data={open}
          />
        ) : section === "card" ? (
          <EventCardDetails onClick={() => setSection("success")} />
        ) : section === "success" ? (
          <EventSuccess />
        ) : (
          <EventInfo
            data={open}
            onClick={(v) => {
              setSection("mail");
              setSectionData((p) => ({ ...p, info: v }));
            }}
          />
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

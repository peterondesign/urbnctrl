import { useState } from "react";
import OutsideAlerter from "../../../components/outsideAlerter";

const TableDropdown = ({ onEdit, onDelete }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <OutsideAlerter handleClick={() => setToggle(false)}>
      <div className="relative w-fit">
        <span className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          <Icon />
        </span>
        {toggle && (
          <ul className="w-[180px] p-[4px]  rounded-[14px] drop-shadow-md bg-white flex flex-col gap-[4px] z-10 absolute left-1/2 -translate-x-1/2">
            <li
              onClick={onEdit}
              className="w-full flex items-center h-[40px] px-[8px] gap-[14px] hover:bg-[#F3F3F3] rounded-[12px] cursor-pointer text-[14px] text-[#231F20] font-medium"
            >
              <Pencil />
              <span>Edit</span>
            </li>
            <li
              className="w-full flex items-center h-[40px] px-[8px] gap-[14px] hover:bg-[#F3F3F3] rounded-[12px] cursor-pointer text-[14px] text-[#EF3826] font-medium"
              onClick={onDelete}
            >
              <Edit />
              <span>Remove admin</span>
            </li>
          </ul>
        )}
      </div>
    </OutsideAlerter>
  );
};

const Icon = () => (
  <svg
    width="10"
    height="36"
    viewBox="0 0 10 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="5" r="5" fill="#9A9999" />
    <circle cx="5" cy="18" r="5" fill="#9A9999" />
    <circle cx="5" cy="31" r="5" fill="#9A9999" />
  </svg>
);

const Pencil = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95338C17.8762 2.8324 17.8027 2.72251 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
      fill="#85A1E9"
    />
  </svg>
);

const Edit = () => (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
      fill="#EF3826"
    />
  </svg>
);
export default TableDropdown;

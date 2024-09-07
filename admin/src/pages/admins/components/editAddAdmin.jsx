import { useState } from "react";
import TextField from "../../../components/textField";
import OutsideAlerter from "../../../components/outsideAlerter";
import Button from "../../../components/button";
import { toast } from "react-toastify";

const EditAddAdmin = ({
  onClose,
  isEdit,
  handleCreate,
  defaultValue,
  handleUpdate,
}) => {
  const [form, setForm] = useState(defaultValue);

  const createAdmin = async () => {
    try {
      const res = await handleCreate(form);
      toast.success(res?.data?.message);
      onClose && onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const updateAdmin = async () => {
    try {
      if (!form?.password) {
        const res = await handleUpdate(form?.id, {
          ...form,
          password: undefined,
          id: undefined,
        });
        toast.success(res?.data?.message);
      } else {
        const res = await handleUpdate(form?.id, { ...form, id: undefined });
        toast.success(res?.data?.message);
      }
      onClose && onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  console.log(form);
  return (
    <div className="inset-0 z-20 fixed bg-[#00000057] flex justify-end py-[15px]">
      <div className="flex-1 bg-white max-w-[500px] rounded-l-[20px] px-[32px] py-[54px]">
        <h2 className="text-[18px] font-semibold">
          {isEdit ? "Edit" : "Add New"}
        </h2>
        <form
          className="flex flex-col w-full gap-[20px] py-[64px]"
          onSubmit={(e) => {
            e?.preventDefault();
            if (!isEdit) {
              createAdmin();
            } else {
              updateAdmin();
            }
          }}
        >
          <TextField
            label="Admin Name*"
            required
            value={form?.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e?.target?.value }))
            }
          />
          <TextField
            label="Email Address*"
            type="email"
            required
            value={form?.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e?.target?.value }))
            }
          />
          {isEdit ? (
            <TextField
              label="Password"
              type="password"
              value={form?.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e?.target?.value }))
              }
            />
          ) : (
            <TextField
              label="Password*"
              type="password"
              required
              value={form?.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e?.target?.value }))
              }
            />
          )}
          <DropDown
            select={form?.role}
            setSelect={(v) => setForm((prev) => ({ ...prev, role: v }))}
          />

          <div className="w-full flex justify-end gap-[24px] pt-[24px]">
            <button
              type="button"
              className="w-[130px] cursor-pointer"
              onClick={() => {
                onClose && onClose(false);
              }}
            >
              Cancel
            </button>
            <Button text="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

const DropDown = ({ select, setSelect }) => {
  const [toggle, setToggle] = useState(false);
  const list = ["blog", "events"];
  return (
    <OutsideAlerter handleClick={() => setToggle(false)}>
      <div className="relative w-full max-w-[386px]">
        <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          <p className="mb-[8px] text-[15px]">Role*</p>
          <div className="h-[40px] border border-[#988E8E] w-full  px-[16px] outline-none rounded-[6px] flex gap-[16px] justify-between items-center">
            <p className="text-[#4E4E4E] capitalize">{select}</p>
            <Icon />
          </div>
        </div>
        {toggle && (
          <ul className="absolute  rounded-[6px] left-0 right-0 flex flex-col border border-[#988E8E] z-10 bg-white">
            {list?.map((i, idx) => (
              <li
                key={idx}
                className="cursor-pointer w-full px-[16px] h-[36px] flex items-center capitalize"
                onClick={() => setSelect(i)}
              >
                {i}
              </li>
            ))}
          </ul>
        )}
      </div>
    </OutsideAlerter>
  );
};

const Icon = () => (
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.0307 1.53104L9.53068 9.03104C9.46102 9.10077 9.3783 9.15609 9.28726 9.19384C9.19621 9.23158 9.09861 9.25101 9.00005 9.25101C8.90149 9.25101 8.80389 9.23158 8.71285 9.19384C8.6218 9.15609 8.53908 9.10077 8.46943 9.03104L0.969426 1.53104C0.828695 1.39031 0.749634 1.19944 0.749634 1.00042C0.749634 0.801394 0.828695 0.610522 0.969426 0.469792C1.11016 0.329061 1.30103 0.25 1.50005 0.25C1.69907 0.25 1.88995 0.329061 2.03068 0.469792L9.00005 7.4401L15.9694 0.469792C16.0391 0.400109 16.1218 0.344834 16.2129 0.307122C16.3039 0.26941 16.4015 0.25 16.5001 0.25C16.5986 0.25 16.6962 0.26941 16.7872 0.307122C16.8783 0.344834 16.961 0.400109 17.0307 0.469792C17.1004 0.539474 17.1556 0.6222 17.1933 0.713245C17.2311 0.804289 17.2505 0.901871 17.2505 1.00042C17.2505 1.09896 17.2311 1.19654 17.1933 1.28759C17.1556 1.37863 17.1004 1.46136 17.0307 1.53104Z"
      fill="#141313"
    />
  </svg>
);

export default EditAddAdmin;

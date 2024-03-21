import PropTypes from "prop-types";

/**
 * Button component.
 * @param {{ label: string} & React.TextareaHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */
const Textarea = ({ label, ...restProps }) => {
  return (
    <>
      <label className="block w-full">
        {label && <p className="text-[20px] leading-[20px] mb-3">{label}</p>}
        <textarea
          {...restProps}
          className="w-full min-h-[105px] border border-solid border-[#ABABAB] outline-none p-[20px] resize-none"
        ></textarea>
      </label>
    </>
  );
};
Textarea.propTypes = {
  label: PropTypes.string,
};

export default Textarea;

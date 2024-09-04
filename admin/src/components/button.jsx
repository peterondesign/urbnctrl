import classnames from "classnames";

const Button = ({ text = "text", type = "submit", onClick, fill }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames("bg-[#FFBB4C] h-[48px] rounded px-[24px]", {
        "w-full": fill,
        "w-fit": !fill,
      })}
    >
      {text}
    </button>
  );
};

export default Button;

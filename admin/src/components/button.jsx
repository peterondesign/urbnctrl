import classnames from "classnames";

const Button = ({
  text = "text",
  type = "submit",
  onClick,
  fill,
  icon,
  disabled,
  style,
}) => {
  return (
    <button
      style={style}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classnames("bg-[#FFBB4C] h-[48px] rounded px-[24px]", {
        "w-full": fill,
        "w-fit": !fill,
        "flex gap-[16px] items-center": Boolean(icon),
        "opacity-60": disabled,
      })}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;

import AuthWrapper from "./components/authWrapper";
import Button from "./components/button";

const ForgottenPassword = () => {
  const label_cn = "text-base mb-2";
  const input_cn =
    "w-full h-9 rounded-lg border-[#988E8E] border-solid border outline-0 px-3";

  return (
    <AuthWrapper>
      <h1 className="text-4xl mb-7 font-playfail">Change Password</h1>
      <form className="flex w-full gap-5 flex-col">
        <label>
          <p className={label_cn}>Change Password</p>
          <input type="password" required className={input_cn} />
        </label>
        <label>
          <p className={label_cn}>New Password</p>
          <input type="password" required className={input_cn} />
        </label>
        <Button text="Change Password" />
      </form>
    </AuthWrapper>
  );
};

export default ForgottenPassword;

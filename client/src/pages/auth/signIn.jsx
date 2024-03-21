import { Link } from "react-router-dom";
import AuthWrapper from "./components/authWrapper";
import Button from "./components/button";

const SignIn = () => {
  const label_cn = "text-base mb-2";
  const input_cn =
    "w-full h-9 rounded-lg border-[#988E8E] border-solid border outline-0 px-3";
  return (
    <AuthWrapper>
      <h1 className="text-4xl mb-7 font-playfail">Sign In</h1>
      <Button text="Sign in with Gmail" type="gmail" />
      <div className="grid relative before:w-[92px]  after:w-[92px] after:content-normal  before:content-normal after:absolute before:absolute after:right-0 after:h-[1px] before:left-0 before:h-[1px] place-items-center before:bg-[#988E8E] after:bg-[#988E8E] h-[30px] my-7">
        <span>Or</span>
      </div>
      <form className="flex w-full gap-5 flex-col">
        <label>
          <p className={label_cn}>Email</p>
          <input type="email" required className={input_cn} />
        </label>
        <label>
          <div className="flex w-full justify-between">
            <p className={label_cn}>Password</p>
            <Link to="/auth/forgotten-password" className={label_cn}>
              Forgot password?
            </Link>
          </div>
          <input type="password" required className={input_cn} />
        </label>
        <Button text="Sign In" />
      </form>
      <p className="py-5 text-xs font-semibold [&>a]:text-primary flex justify-center gap-2">
        Not Urban? <Link to="/auth/sign-up">Sign up</Link>
      </p>
      <p className="text-xs [&>span]:font-semibold">
        By continuing, you agree to Urban Central’s{" "}
        <span>Terms of service</span> and
        <span> Privacy Policy</span>.
      </p>
    </AuthWrapper>
  );
};

export default SignIn;

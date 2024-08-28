import Logo from "../../../client/src/assets/svgs/logo";
import { useState } from "react";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const label_cn = "text-base mb-2";
  const input_cn = "w-full h-9 rounded-lg border-[#988E8E] border-solid border outline-0 px-3";

  return (
    <div className="p-8 justify-center items-center min-h-screen">
      <div className="w-full logo-dark">
        <Logo />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-md w-full max-w-sm">
          <h2 className="text-xl font-bold text-center mb-6 ">
            Sigin to Admin Dashboard
          </h2>
          <form>
            <div className="mb-4">
              <label>
                <p className={label_cn}>Email</p>
                <input
                  type="email"
                  required
                  value={form?.email}
                  className={input_cn}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e?.target?.value }))
                  }
                />
              </label>
            </div>
            <label>
              <p className={label_cn}>Password</p>
              <input
                type="password"
                required
                className={input_cn}
                value={form?.password}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e?.target?.value }))
                }
              />
            </label>
            <button className="h-[45px] w-full bg-primary font-medium text-light-dark capitalize rounded-[10px] flex items-center justify-center gap-4 mt-6">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

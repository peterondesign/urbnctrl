import { useState } from "react";
import { Link } from "react-router-dom";
import AuthWrapper from "../../components/authWrapper";
import Button from "../../components/button";
import TextField from "../../components/textField";

import { toast } from "react-toastify";
import useAuth from "../../hooks/api/auth";
import Loader from "../../components/loader";

const Setup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { handleSetup, setupData } = useAuth();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const res = await handleSetup(form);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <AuthWrapper>
      {setupData?.loading && <Loader />}
      <div className="w-[280px]">
        <h2 className="text-[18px] font-bold pb-[24px]">
          Setup Admin Dashboard
        </h2>
        <form
          className="w-full flex flex-col gap-[20px]"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            type="email"
            required
            value={form?.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e?.target?.value }))
            }
          />
          <TextField
            label="Password"
            type="password"
            required
            value={form?.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e?.target?.value }))
            }
          />
          <div className="pt-[10px]">
            <Button fill text="Setup" />
          </div>
        </form>

        <p className="mt-[32px]">
          Go to{" "}
          <Link className="font-bold text-[#e9b65d] underline" to="/">
            login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Setup;

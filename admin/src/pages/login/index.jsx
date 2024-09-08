import { useState } from "react";
import AuthWrapper from "../../components/authWrapper";
import Button from "../../components/button";
import Loader from "../../components/loader";
import TextField from "../../components/textField";
import useAuth from "../../hooks/api/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { handleLogin, loginData } = useAuth();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const res = await handleLogin(form);
      console.log(res?.data);
      toast.success(res?.data?.message);
      const token = res?.data?.token;
      Cookies.set("token", token, { expires: 1 });
      if (res?.data?.role === "super") {
        navigate("admin");
      } else {
        navigate(`/admin/${res?.data?.role}`);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AuthWrapper>
      {loginData?.loading && <Loader />}
      <div className="w-[280px]">
        <h2 className="text-[18px] font-bold pb-[24px]">
          Login to Admin Dashboard
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
            <Button fill text="Sign in" />
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Login;

import { useState } from 'react';
import useAuth from '../../hooks/api/auth';
import AuthWrapper from './components/authWrapper';
import Button from './components/button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { handleSigningUp, signingUpData } = useAuth();
  const navigate = useNavigate();

  const label_cn = 'text-base mb-2';
  const input_cn =
    'w-full h-9 rounded-lg border-[#988E8E] border-solid border outline-0 px-3';

  return (
    <AuthWrapper>
      <h1 className="text-4xl mb-7 font-playfail">Sign Up</h1>
      <Button text="Sign Up with Gmail" type="gmail" />
      <div className="grid relative before:w-[92px]  after:w-[92px] after:content-normal  before:content-normal after:absolute before:absolute after:right-0 after:h-[1px] before:left-0 before:h-[1px] place-items-center before:bg-[#988E8E] after:bg-[#988E8E] h-[30px] my-7">
        <span>Or</span>
      </div>
      <form
        className="flex w-full gap-5 flex-col"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const res = await handleSigningUp();
            if (res?.data) {
              toast.success('Account was created successfully');
              navigate('/auth/sign-in');
            }
          } catch (error) {
            toast.error(error?.response?.data);
          }
        }}
      >
        <label>
          <p className={label_cn}>Email</p>
          <input
            type="email"
            required
            className={input_cn}
            value={form?.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e?.target?.value }))
            }
          />
        </label>
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
        <Button text="Sign Up" loading={signingUpData?.loading} />
      </form>
      <p className="text-xs [&>span]:font-semibold mt-5">
        By continuing, you agree to Urban Central’s{' '}
        <span>Terms of service</span> and
        <span> Privacy Policy</span>.
      </p>
    </AuthWrapper>
  );
};

export default SignUp;

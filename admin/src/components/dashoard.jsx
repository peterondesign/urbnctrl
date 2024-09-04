import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SheildIcon from "../assets/svgs/sheild";
import TaskIcon from "../assets/svgs/task";
import TrophyIcon from "../assets/svgs/trophy";
import classnames from "classnames";
import ExitIcon from "../assets/svgs/exit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import ProfileIcon from "../assets/svgs/profile";
import { useEffect } from "react";
import useAuth from "../hooks/api/auth";
import Loader from "./loader";

const Dashoard = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const { handleMe, meData } = useAuth();

  const deleteToken = () => {
    const token = Cookies.get("token");
    if (token) {
      Cookies.remove("token");
    }
  };

  const handleLogout = () => {
    deleteToken();
    toast.success("Successfully logged out");
    navigate("/");
  };

  useEffect(() => {
    const getMe = async () => {
      try {
        await handleMe();
      } catch (error) {
        if (error?.response?.data) {
          toast.error(error?.response?.data?.message);
          deleteToken();
          navigate("/", { replace: true });
        }
      }
    };

    getMe();
  }, []);

  const admin = meData?.data?.results;

  const links = [
    {
      text: "Admins",
      role: "owner",
      icon: SheildIcon,
      active: path === "/admin",
      disabled: admin?.role === "events" || admin?.role === "blog",
      path: "/admin",
    },
    {
      text: "Events",
      role: "events",
      icon: TrophyIcon,
      active: path.includes("events"),
      disabled: admin?.role === "blog",
      path: "/admin/events",
    },
    {
      text: "Blog",
      role: "blog",
      icon: TaskIcon,
      active: path.includes("blog"),
      disabled: admin?.role === "events",
      path: "/admin/blog",
    },
  ];

  return (
    <>
      {meData?.loading && <Loader />}
      {meData?.data && !meData?.loading && (
        <div>
          <aside className="w-[240px] border-r border-[#E2E2E2] fixed z-10  left-0 bottom-0 top-0 flex flex-col bg-white">
            <div className="h-[100px] px-[32px] flex items-center">
              <p className="font-bold text-[18px]">URBANCENTRAL</p>
            </div>
            <div className="flex-1 pt-[50px] pb-[80px] flex flex-col justify-between">
              <ul className="flex flex-col gap-[16px] ">
                {links?.map((l) => (
                  <li
                    key={l?.role}
                    onClick={() => navigate(l?.path)}
                    className={classnames(
                      "flex items-center gap-[10px] [&_svg]:w-[18px] text-[18px] h-[40px] px-[40px]",
                      {
                        "bg-[#F5ECDF] border-r-[3px] border-[#FFBB4C]":
                          l?.active && !l.disabled,
                      },
                      { "cursor-pointer": !l.disabled },
                      {
                        "cursor-not-allowed text-[#E1DFDF] opacity-70":
                          l.disabled,
                      }
                    )}
                  >
                    <l.icon fill={!l.disabled && l.active && "#727272"} />
                    <span>{l?.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className="flex items-center justify-center gap-[18px] text-[20px] font-medium cursor-pointer"
                onClick={handleLogout}
              >
                <ExitIcon />
                Logout
              </button>
            </div>
          </aside>
          <nav className="fixed top-0 left-[240px] right-0 h-[100px] bg-white border-b border-[#E2E2E2]  z-10 flex justify-end px-[32px]">
            <div className="flex items-center gap-[16px] min-w-[240px]">
              <div className="[&_svg]:w-[28x] [&_svg]:h-[28px] bg-[#D9D9D9] rounded-full w-[60px] h-[60px] grid place-items-center">
                <ProfileIcon />
              </div>
              <div>
                <h1 className="font-medium text-[18px]">{admin?.name}</h1>
                <p className="capitalize text-[14px]">{admin?.role}</p>
              </div>
            </div>
          </nav>
          <div className="pl-[280px] pt-[140px]  pr-[40px] pb-[40px]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashoard;

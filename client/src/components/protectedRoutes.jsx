import { Outlet, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
// import { useEffect } from 'react';
// import useAuth from '../../hooks/api/auth';
import Loader from "./loader";

/**
 * @param {object} props
 * @param {"blog"} props.type - Children element
 * @returns {JSX.Element}
 */
const ProtectedRoutes = ({ type }) => {
  //   const { handleLGetMe, getMeData } = useAuth();

  //   useEffect(() => {
  //     handleLGetMe();
  //   }, []);
  const getMeData = {
    data: { isAdmin: false },
  };

  return (
    <>
      {getMeData?.loading && (
        <div className="w-full h-[100dvh] grid place-items-center">
          <Loader size="50" />
        </div>
      )}
      {getMeData?.data?.isAdmin && <Outlet />}
      {getMeData?.data?.isAdmin === false && (
        <Navigate to={type === "blog" ? "/community" : "/"} replace />
      )}
    </>
  );
};

ProtectedRoutes.propTypes = {
  type: PropTypes.string,
};

export default ProtectedRoutes;

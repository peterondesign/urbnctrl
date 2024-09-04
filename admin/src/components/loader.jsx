import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="inset-0 z-30 fixed grid place-items-center bg-[#00000057]">
      <Bars
        height={80}
        width={80}
        color={"#FFBB4C"}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

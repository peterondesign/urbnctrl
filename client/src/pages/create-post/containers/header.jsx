import AboutText from "../../../assets/svgs/aboutText";

const Header = () => {
  return (
    <header>
      <div className="h-[300px] relative">
        <div className="h-[420px]  absolute top-[-120px] left-0 right-0 pt-[120px] pb-[110px] grid place-items-center [&>svg]:w-[447px] ">
          <AboutText />
          <h1 className="text-[50px] font-bold absolute top-[calc(50%+65px)] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
            Community
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

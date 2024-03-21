import AboutText from "../../../assets/svgs/aboutText";

const Header = () => {
  return (
    <header className="h-[500px] relative">
      <div className="h-[620px]  absolute top-[-120px] left-0 right-0 pt-[120px] pb-[110px] grid place-items-center">
        <AboutText />
        <h1 className="text-[50px] font-bold absolute top-[calc(50%+25px)] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
          Community
        </h1>
      </div>
    </header>
  );
};

export default Header;

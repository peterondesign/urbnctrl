const AuthWrapper = ({ children }) => {
  return (
    <div className="w-full px-[32px]">
      <header className="h-[100px] flex items-center">
        <h1 className="font-bold text-[18px]">URBANCENTRAL</h1>
      </header>
      <div className="h-[calc(100dvh-100px)]  pb-[100px] grid place-items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;

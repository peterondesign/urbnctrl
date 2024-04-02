import Button from "../../../components/button";

const NewLetterSection = () => {
  return (
    <div className="py-[40px] lg:px-[16px]">
      <div className="rounded-[20px] bg-white p-9 sm:p-12 text-dark">
        <h2 className="text-2xl leading-[28px] sm:text-5xl sm:leading-[48px] font-bold">
          Big Updates Coming
        </h2>
        <form className="mt-3 sm:mt-6">
          <p className="text-sm mb-4">Stay up to date with us</p>
          <label>
            <p className="text-sm font-bold mb-4">Enter your email address* </p>
            <input
              type="email"
              required
              placeholder="Email"
              className="border border-solid  border-[#DAD9D9] w-full py-[18px] px-[21px]  focus:outline-primary"
            />
          </label>
          <Button text="Subscribe" className="mt-[40px]" />
        </form>
      </div>
    </div>
  );
};

export default NewLetterSection;

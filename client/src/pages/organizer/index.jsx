import Input from "../../components/input";
import Button from "../../components/button";

const Organizer = () => {
  return (
    <div className=" w-full lg:min-h-[450px] grid place-items-center ">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <h2 className="font-bold text-[24px] mb-[56px]">EVENT VALIDATION</h2>
        <p className="font-medium text-[16px] lg:text-[18px] mb-[24px] text-center">
          Please enter the event code sent to your email address.
        </p>
        <form
          action=""
          className="w-full gap-[24px] flex flex-col items-center"
        >
          <Input />
          <Button text="Continue" />
        </form>
      </div>
    </div>
  );
};

export default Organizer;

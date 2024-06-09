import PropTypes from "prop-types";
import Input from "../../../../../components/input";
import Button from "../../../../../components/button";

/**
 * @param {{onClick: Function}} props
 * @returns {JSX.Element}
 */
const EventCardDetails = ({ onClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <div>
      <h2 className="text-[40px] font-bold">Card Detail</h2>
      <p className="text-[#5B5656] text-[24px] leading-[28px] mb-[64px]">
        Please note in accordance with laws and regulations, we will not save
        not save any card details provided by customers on this website.
      </p>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="max-w-[788px] w-full flex flex-col gap-[40px]">
          <div>
            <div className="mb-3">
              <p className="text-[20px] font-bold text-[#4E4E4E]">
                CARD NUMBER
              </p>
              <p className="text-[#5B5656] font-medium text-[18px]">
                Enter the 16-digit number on your card
              </p>
            </div>
            <Input required type="number" />
          </div>
          <div className="flex gap-[40px] items-center">
            <div className="max-w-[248px] w-full flex-shrink-0">
              <p className="text-[20px] font-bold text-[#4E4E4E]">
                Expiry Date
              </p>
              <p className="text-[#5B5656] font-medium text-[18px]">
                Enter your card expiry date
              </p>
            </div>
            <div className="flex flex-1 gap-[28px]">
              <Input
                required
                type="number"
                placeholder="YYYY"
                className="text-center"
              />
              <Input
                required
                type="number"
                placeholder="MM"
                className="text-center"
              />
            </div>
          </div>
          <div className="flex gap-[40px] items-center">
            <div className="max-w-[248px] w-full flex-shrink-0">
              <p className="text-[20px] font-bold text-[#4E4E4E]">
                CV3 Details
              </p>
              <p className="text-[#5B5656] font-medium text-[18px] leading-[20px]">
                Enter the 3 digits number on the back of the card
              </p>
            </div>

            <div className="w-full max-w-[228px] ">
              <Input
                required
                type="number"
                placeholder="CV3"
                className="text-center"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mt-[50px] mb-[20px]">
          <Button text="Make Payment" />
        </div>
      </form>
    </div>
  );
};

EventCardDetails.propTypes = {
  onClick: PropTypes.func,
};

export default EventCardDetails;

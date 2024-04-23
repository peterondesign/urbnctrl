import { Link, useNavigate } from 'react-router-dom';
import { girlWithGultar, girlWithPhone } from '../../../assets/images';
import Button from '../../../components/button';

const FeekbackSection = () => {
  const navigate = useNavigate();
  return (
    <div className="text-[#F1F0F0] [&>h3]:text-white ">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col items-center lg:items-start sm:flex-row-reverse pb-[50px] lg:py-[44px] w-full gap-[32px]">
          <img
            src={girlWithPhone}
            alt=""
            loading="lazy"
            className="w-full sm:w-[340px] h-[400px] lg:w-[520px] lg:h-[470px] object-cover rounded-[36px]"
          />
          <div className="flex flex-col flex-1 gap-4">
            <h3 className="text-[28px] lg:text-[48px] lg:leading-[56px]  font-bold max-w-[600px]">
              Community Group Membership:
            </h3>
            <div className="text-[16px] lg:text-[18px] leading-[200%] flex w-full flex-col gap-2 lg:gap-3">
              <p>
                Thank you for your interest in becoming a part of our
                music-listening community at UrbanCentral. By joining us, you
                become a part of our mission which is to contribute to the
                expansion of Nigerian music.
              </p>

              <p>
                Your input will tailor our music listening experience and ensure
                we provide professional and efficient feedback, consultation
                through digital solutions to our clients respectively.
              </p>
              <p>
                You also have the opportunity to network and develop music and
                career interests. This community serves as a unit representation
                of the music market to also help artists who need to understand
                and predict the commercial success before, during and after
                release.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center lg:items-start py-[20px] lg:py-[44px] w-full gap-[32px]">
          <img
            src={girlWithGultar}
            alt=""
            loading="lazy"
            className="w-full sm:w-[340px] h-[400px] lg:w-[520px] lg:h-[470px] object-cover rounded-[36px]"
          />
          <div className="flex flex-col flex-1 gap-4">
            <h3 className="text-[28px] lg:text-[48px] lg:leading-[56px] font-bold">
              Artists:
            </h3>
            <div className="text-[16px] lg:text-[18px] leading-[200%] flex w-full flex-col gap-2 lg:gap-3">
              <p>
                As part of our commitment to supporting musicians and
                independent artists, we have implemented a free publishing
                policy for new releases. Take advantage of our free publishing
                policy today (musicians only). Send us an email;
                weareurbancentral@gmail.com today or fill this form and one of
                our representatives will reach out within 24 hours.
              </p>
              <p className="[&>a]:text-[#99BBFE]">
                If you require services beyond free publishing, we are more than
                happy to assist you. Please let us know how we can be of service
                by filling out the <Link to="/">form</Link> provided.
              </p>

              <p>
                Your input will help us understand your specific needs and
                tailor our services accordingly. We look forward to working with
                you and supporting your musical journey
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start sm:flex-row-reverse pt-[50px] lg:py-[44px] w-full gap-[32px]">
          <img
            src={girlWithPhone}
            alt=""
            loading="lazy"
            className="w-full sm:w-[340px] h-[400px] lg:w-[520px] lg:h-[470px] object-cover rounded-[36px]"
          />
          <div className="flex flex-col flex-1 gap-4">
            <h3 className="text-[28px] lg:text-[48px] lg:leading-[56px]  font-bold max-w-[600px]">
              Event Organizers:
            </h3>
            <div className="text-[16px] lg:text-[18px] leading-[200%] flex w-full flex-col gap-2 lg:gap-3">
              <div>
                Dear Event Organizers,
                <p>
                  By leveraging our user-friendly interface and robust features,
                  you can effectively manage and sell tickets to your events
                  while accessing valuable attendee information.
                  <br />
                  Here’s how:
                </p>
                <ul className="list-disc pl-[16px]">
                  <li>Admin Access</li>
                  <li>Ticket Sales</li>
                  <li>Confirmation Feature</li>
                  <li>Attendee Insights</li>
                  <li>Promotion Tools</li>
                  <li>24/7 Support</li>
                </ul>
                <p>
                  Maximize the success of your events by leveraging Urban
                  Central’s powerful platform for ticket sales and attendee
                  management. Join our community of event organizers today and
                  revolutionize the way you plan and execute events.
                </p>
                <Button
                  text="Create Event"
                  onClick={() => navigate('/socials/create-event')}
                  className="h-[52px] w-full max-w-[400px] mt-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeekbackSection;

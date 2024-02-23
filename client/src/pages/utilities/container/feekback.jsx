import { Link } from "react-router-dom";
import { girlWithGultar, girlWithPhone } from "../../../assets/images";

const FeekbackSection = () => {
  return (
    <div>
      <h2 className="max-w-[520px] text-[60px] leading-[66px] font-bold">
        Feedback is Prioritized
      </h2>
      <div className="flex flex-col w-full items-center">
        <div className="flex py-[44px] w-full gap-[32px]">
          <img
            src={girlWithGultar}
            alt=""
            loading="lazy"
            className="w-[520px] h-[470px] object-cover rounded-[36px]"
          />
          <div className="flex flex-col flex-1  gap-4">
            <h3 className="text-[48px] leading-[56px] font-bold">Artists:</h3>
            <div className="text-base leading-[200%] flex w-full flex-col gap-3">
              <p>
                As part of our commitment to supporting musicians and
                independent artistes, we have implemented a free publishing
                policy for new releases.
              </p>
              <p>
                Take advantage of our free publishing policy today (terms and
                conditions apply) and become a member of our clientele as we
                journey through to the life cycle development of every
                independent artist
              </p>
              <p className="[&>a]:text-green">
                Send us an email; <Link to="/">admin@urbnctrl.com</Link> today
                or <Link to="/">fill this form</Link> so we can know you better.
              </p>
              <p>
                We run a 24/7 service with an open-door system because your
                interests as an artist is ours also.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse py-[44px] w-full gap-[32px]">
          <img
            src={girlWithPhone}
            alt=""
            loading="lazy"
            className="w-[520px] h-[470px] object-cover rounded-[36px]"
          />
          <div className="flex flex-col flex-1  gap-4">
            <h3 className="text-[48px] leading-[56px] font-bold max-w-[600px]">
              Listening Group Membership:
            </h3>
            <div className="text-base leading-[200%] flex w-full flex-col gap-3">
              <p>
                By joining us, you become a part of our mission which is to
                contribute to the expansion of Nigerian music.
              </p>

              <p className="[&>a]:text-green">
                Membership is Free and Voluntary.{" "}
                <Link to="/">Fill this form</Link> you become a part of an
                interest group that is focused on music development and pop
                culture in Africa.
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
      </div>
    </div>
  );
};

export default FeekbackSection;

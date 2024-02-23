import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <div className="py-8 ">
      <p className="text-[16px] leading-[200%] [&>a]:text-green">
        Urban Central is a fun and interactive platform that offers a
        comprehensive service to guide & ensure the life cycle of an average
        independent musician is fulfilled. We bridge the gap between creatives
        and their various target audiences. Our goal is to provide a{" "}
        <Link to="/">community</Link>
        of passionate music heads, enthusiasts and professionals for mentorship
        and consultation; operating with a user friendly and an open-door
        process where independent artists and music addicts connect.{" "}
        <Link to="/">Join us.</Link>
      </p>
    </div>
  );
};

export default IntroductionSection;

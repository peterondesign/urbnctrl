import { Link } from 'react-router-dom';

const IntroductionSection = () => {
  return (
    <div className="pb-4 lg:py-8 ">
      <p className="text-[16px] lg:text-[20px] leading-[200%] [&>a]:text-[#99BBFE] text-[#F1F0F0]">
        UrbanCentral is a groundbreaking platform that bridges the gap between
        artists and music enthusiasts by providing honest and professional
        feedback on music. With a <Link to="/community">community</Link> of
        passionate music heads and enthusiasts, UrbanCentral offers a
        comprehensive service that delivers unbiased and insightful feedback,
        observations, and recommendations to artists seeking to enhance their
        music commercially. The platform operates on a user-friendly and
        efficient process where artists can easily submit their songs for
        review.
      </p>
    </div>
  );
};

export default IntroductionSection;

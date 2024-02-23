import Footer from "../../components/footer";
import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import BlogsSection from "./containers/blogs";
import HeroSection from "./containers/hero";
import NewLetterSection from "./containers/newLetter";
import TalentSection from "./containers/talent";
// import VideoSection from "./containers/video";

const Home = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-8 w-full">
        <MaxContainer>
          <HeroSection />
        </MaxContainer>
        {/* <VideoSection /> */}
        <MaxContainer>
          <TalentSection />
        </MaxContainer>
        <MaxContainer>
          <NewLetterSection />
        </MaxContainer>
        <MaxContainer>
          <BlogsSection />
        </MaxContainer>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Home;

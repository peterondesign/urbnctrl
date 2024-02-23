import Footer from "../../components/footer";
import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import Content from "./containers/content";
import Header from "./containers/header";

const AboutUs = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-8 w-full">
        <MaxContainer>
          <Header />
        </MaxContainer>
        <MaxContainer>
          <Content />
        </MaxContainer>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default AboutUs;

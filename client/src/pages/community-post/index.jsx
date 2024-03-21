import Footer from "../../components/footer";
import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import Content from "./containers/content";
import Header from "./containers/header";

const CommunityPost = () => {
  return (
    <PageWrapper>
      <Header />
      <MaxContainer>
        <Content />
      </MaxContainer>
      <Footer />
    </PageWrapper>
  );
};

export default CommunityPost;

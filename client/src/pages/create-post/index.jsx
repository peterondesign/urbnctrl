import Footer from "../../components/footer";
import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import Content from "./containers/content";
import Header from "./containers/header";

const CreatePost = () => {
  return (
    <PageWrapper>
      <MaxContainer>
        <Header />
      </MaxContainer>
      <MaxContainer>
        <Content />
      </MaxContainer>
      <Footer />
    </PageWrapper>
  );
};

export default CreatePost;

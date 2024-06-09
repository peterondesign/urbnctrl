import Footer from "../../components/footer";
import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import Content from "./containers/contents";
import Header from "./containers/header";

const Socials = () => {
  return (
    <PageWrapper>
      <MaxContainer>
        <Header />
      </MaxContainer>
      <Content />
      <Footer />
    </PageWrapper>
  );
};

export default Socials;

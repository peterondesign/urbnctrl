import Footer from "../../components/footer";
import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import Blogs from "./containers/blogs";
import Header from "./containers/header";

const Community = () => {
  return (
    <PageWrapper>
      <div className="flwx flex-col w-full gap-8">
        <MaxContainer>
          <Header />
        </MaxContainer>
        <MaxContainer>
          <Blogs />
        </MaxContainer>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Community;

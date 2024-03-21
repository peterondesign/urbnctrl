import MaxContainer from "../../components/maxContainer";
import PageWrapper from "../../components/pageWrapper";
import Content from "./containers/content";
import Header from "./containers/header";

const CreateEvent = () => {
  return (
    <PageWrapper>
      <MaxContainer>
        <Header />
      </MaxContainer>
      <MaxContainer>
        <Content />
      </MaxContainer>
    </PageWrapper>
  );
};

export default CreateEvent;

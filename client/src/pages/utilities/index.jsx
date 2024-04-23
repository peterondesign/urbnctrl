import Footer from '../../components/footer';
import MaxContainer from '../../components/maxContainer';
import PageWrapper from '../../components/pageWrapper';
import FeekbackSection from './container/feekback';
import HeaderSection from './container/header';
import IntroductionSection from './container/introduction';

const Utilities = () => {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col gap-5 lg:gap-[32px]">
        <HeaderSection />
        <MaxContainer>
          <IntroductionSection />
        </MaxContainer>
        <MaxContainer>
          <FeekbackSection />
        </MaxContainer>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Utilities;

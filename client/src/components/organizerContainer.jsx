import { Outlet } from "react-router-dom";
import Footer from "./footer";
import MaxContainer from "./maxContainer";
import PageWrapper from "./pageWrapper";

const OrganizerContainer = () => {
  return (
    <PageWrapper>
      <div>
        <MaxContainer>
          <h1 className="text-center font-bold text-[24px] lg:text-[32px] pt-[24px] pb-[40px]">
            Events Organizers
          </h1>
        </MaxContainer>
        <div className="bg-white py-[64px]">
          <MaxContainer>
            <div className="text-dark">
              <Outlet />
            </div>
          </MaxContainer>
        </div>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default OrganizerContainer;

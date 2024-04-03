import PageWrapper from "../../components/pageWrapper";
import Footer from "../../components/footer";
import { announcementComingSoon } from "../../assets/images";

const Announcement = () => {
  return (
    <PageWrapper>
      <div>
        <img
          src={announcementComingSoon}
          alt=""
          className="w-full"
          loading="lazy"
        />
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Announcement;

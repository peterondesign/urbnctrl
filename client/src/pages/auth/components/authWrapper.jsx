import PropTypes from "prop-types";
import { authBg } from "../../../assets/images";
import Footer from "../../../components/footer";
import PageWrapper from "../../../components/pageWrapper";
import MaxContainer from "../../../components/maxContainer";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Children element
 * @returns {JSX.Element}
 */
const AuthWrapper = ({ children }) => {
  return (
    <PageWrapper>
      <div className="h-[calc(916px-120px)] relative flex-shrink">
        <div className="h-[916px] bg-[#0845F7] absolute top-[-120px] left-0 right-0 overflow-hidden flex">
          <img src={authBg} alt="" className="w-full h-[1250px] object-cover" />
        </div>
        <MaxContainer>
          <div className="flex items-center justify-end w-full relative z-10 flex-1 py-[54px]">
            <div className="text-dark w-[352px] py-[40px] px-[42px] bg-white rounded-[10px]">
              {children}
            </div>
          </div>
        </MaxContainer>
      </div>

      <Footer />
    </PageWrapper>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.node,
};

export default AuthWrapper;

import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import moment from "moment";
import Loader from "../../../components/loader";

/**
 *
 * @param {{data: Object, loading: boolean}} props
 * @returns {JSX.Element}
 */
const Content = ({ data, loading }) => {
  const [height, setHeight] = useState(0);
  const bodyEl = useRef();

  useEffect(() => {
    if (bodyEl?.current) {
      const elementHeight = bodyEl.current.clientHeight;
      setHeight(elementHeight);
    }
  }, [data]);

  return (
    <>
      <div>
        {loading && (
          <div className="grid place-items-center">
            <Loader size="50" />
          </div>
        )}
        {data && !loading && (
          <div style={{ height: `${height - 120}px` }} className={`relative`}>
            <div
              ref={bodyEl}
              className="py-[20px] absolute left-0 top-[-120px] h-fit right-0 bottom-0 "
            >
              <div className="bg-white pt-[40px] sm:pt-[80px] lg:pt-[120px] pb-[120px] px-[24px] sm:px-[56px] rounded-3xl text-dark ">
                <div className="mb-6 lg:mb-10">
                  <h2 className="text-xl lg:text-[24px] font-bold ">
                    {data?.title}
                  </h2>
                  <div className="text-[14px] lg:text-base italic mt-4 lg:mt-10 flex flex-col sm:flex-row gap-2 sm:gap-10">
                    <p>Article by {data?.author}</p>
                    <p>{moment(Date.now()).format("MMMM DD, YYYY")}</p>
                    <p>{data?.category}</p>
                  </div>
                </div>
                <div className="flex w-full gap-4 lg:gap-6 text-[16px] leading-6 lg:leading-8 lg:text-xl flex-col [&>img]:h-[350px] [&>img]:w-full [&>img]:object-contain [&>img]:rounded-md parse-content ">
                  {parse(data?.content)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Content.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default Content;

import { useRef, useEffect, useState } from "react";
import { speaker } from "../../../assets/images";

const Content = () => {
  const [height, setHeight] = useState(0);
  const bodyEl = useRef();

  useEffect(() => {
    if (bodyEl.current) {
      const elementHeight = bodyEl.current.clientHeight;
      setHeight(elementHeight);
    }
  }, [bodyEl.current]);

  return (
    <div style={{ height: `${height - 120}px` }} className={`relative`}>
      <div
        ref={bodyEl}
        className="py-[20px] absolute left-0 top-[-120px] h-fit right-0 bottom-0 "
      >
        <div className="bg-white pt-[40px] sm:pt-[80px] lg:pt-[120px] pb-[120px] px-[24px] sm:px-[56px] rounded-3xl text-dark ">
          <div className="mb-6 lg:mb-10">
            <h2 className="text-xl lg:text-[24px] font-bold ">
              Blogpost Title
            </h2>
            <div className="text-[14px] lg:text-base italic mt-6 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-10">
              <p>Article by Michael Cardoso</p>
              <p>February 6, 2024</p>
              <p>Lifestyle and Entertainment </p>
            </div>
          </div>
          <div className="flex w-full gap-4 lg:gap-6 text-[16px] lg:text-xl flex-col [&>img]:h-[250px] [&>img]:w-full [&>img]:object-cover [&>img]:rounded-md  ">
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur. Mi neque ipsum ut tortor
              tincidunt laoreet. Maecenas quis condimentum nec enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing
              vulputate ultrices sem. Sagittis euismod eget ullamcorper magna
              risus ut amet. Arcu neque quam est molestie. Duis turpis blandit
              faucibus tellus et pulvinar. Venenatis cursus lacus mauris viverra
              pellentesque lobortis a. Bibendum duis sed ultricies suspendisse.
              Aliquet massa purus neque amet. Orci facilisi enim nec lobortis
              varius vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing
              vulputate ultrices sem. Sagittis euismod eget ullamcorper magna
              risus ut amet. Arcu neque quam est molestie. Duis turpis blandit
              faucibus tellus et pulvinar. Venenatis cursus lacus mauris viverra
              pellentesque lobortis a. Bibendum duis sed ultricies suspendisse.
              Aliquet massa purus neque amet. Orci facilisi enim nec lobortis
              varius vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing
              vulputate ultrices sem. Sagittis euismod eget ullamcorper magna
              risus ut amet. Arcu neque quam est molestie. Duis turpis blandit
              faucibus tellus et pulvinar. Venenatis cursus lacus mauris viverra
              pellentesque lobortis a. Bibendum duis sed ultricies suspendisse.
              Aliquet massa purus neque amet. Orci facilisi enim nec lobortis
              varius vel.
            </p>
            <img src={speaker} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing
              vulputate ultrices sem. Sagittis euismod eget ullamcorper magna
              risus ut amet. Arcu neque quam est molestie. Duis turpis blandit
              faucibus tellus et pulvinar. Venenatis cursus lacus mauris viverra
              pellentesque lobortis a. Bibendum duis sed ultricies suspendisse.
              Aliquet massa purus neque amet. Orci facilisi enim nec lobortis
              varius vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

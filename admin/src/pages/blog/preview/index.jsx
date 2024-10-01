import moment from "moment";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import BackIcon from "../../../assets/svgs/back";
import Button from "../../../components/button";
import { toast } from "react-toastify";
import useUpload from "../../../hooks/api/upload";
import useBlog from "../../../hooks/api/useBLog";
import Loader from "../../../components/loader";

const Preview = () => {
  const data = useLocation()?.state;
  const { handleUpload, getUploadedData } = useUpload();
  const { handleCreateBlog, createBlogData } = useBlog();

  const navigate = useNavigate();

  if (!data) {
    return <Navigate to="/admin/blog" replace />;
  }

  const disableAction =
    !data.author || !data.category || !data.content || !data.title || !data.img;

  const handleCreate = async () => {
    try {
      if (disableAction) {
        toast.error("Please fill in the fields");
      } else {
        const copyForm = { ...data };
        const formData = new FormData();
        formData.append("img", data.img?.file);
        const imgRes = await handleUpload(formData);
        const image = imgRes?.data[0];
        if (image) {
          const newForm = { ...copyForm, img: image };
          const res = await handleCreateBlog(newForm);
          if (res?.data) {
            toast.success("Blog was created successfully");
            navigate("/admin/blog", {
              state: {
                title: "",
                category: "",
                author: "",
                content: "",
                img: null,
              },
            });
          }
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      {(createBlogData?.loading || getUploadedData?.loading) && <Loader />}

      <div>
        <div className="flex items-center w-full justify-between mb-[80px]">
          <p
            onClick={() => navigate("/admin/blog", { state: data })}
            className=" w-fit [&>svg]:w-[24px] cursor-pointer flex items-center gap-[8px] text-[24px] font-semibold "
          >
            <BackIcon /> Back
          </p>
          <Button
            onClick={handleCreate}
            text="Publish"
            style={{ width: "140px" }}
            disabled={disableAction}
          />
        </div>
        <div>
          <img
            src={data?.img?.url}
            alt="blog cover image"
            loading="lazy"
            className="h-[390px] w-full object-cover"
          />
          <div className={`relative`}>
            <div className="h-fit">
              <div className="bg-white pt-[40px]  pb-[120px] px-[24px] sm:px-[56px] rounded-3xl text-dark ">
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
        </div>
      </div>
    </>
  );
};

export default Preview;

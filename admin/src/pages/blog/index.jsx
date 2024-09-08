import { useEffect, useState } from "react";
import EyeIcon from "../../assets/svgs/eye";
import useUpload from "../../hooks/api/upload";
import useBlog from "../../hooks/api/useBLog";
import { toast } from "react-toastify";
import UploadCoverMedia from "./components/uploadCoverMedia";
import Editor from "./components/Editor";
import Button from "../../components/button";
import Loader from "../../components/loader";
import { useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    content: "",
    img: null,
  });

  const navigate = useNavigate();
  const data = useLocation()?.state;

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, []);

  const { handleUpload, getUploadedData } = useUpload();
  const { handleCreateBlog, createBlogData } = useBlog();

  const handleForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreate = async () => {
    try {
      if (disableAction) {
        toast.error("Please fill in the fields");
      } else {
        const copyForm = { ...form };
        const formData = new FormData();
        formData.append("img", form.img?.file);
        const imgRes = await handleUpload(formData);
        const image = imgRes?.data[0];
        if (image) {
          const newForm = { ...copyForm, img: image };
          const res = await handleCreateBlog(newForm);
          if (res?.data) {
            toast.success("Blog was created successfully");
            setForm({
              title: "",
              category: "",
              author: "",
              content: "",
              img: null,
            });
          }
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const disableAction =
    !form.author || !form.category || !form.content || !form.title || !form.img;

  const handlePreview = () => {
    navigate("preview", { state: form });
  };

  return (
    <>
      {(createBlogData?.loading || getUploadedData?.loading) && <Loader />}
      <div className="pr-[72px]">
        <div className="mb-[40px]">
          <h1 className="text-[20px] font-bold">Blog</h1>
          <div className="flex w-full items-center justify-between">
            <p className="text-[20px]">Create and publish blogposts</p>
            <div className="flex items-center gap-[32px]">
              <Button
                onClick={handleCreate}
                text="Pulish"
                style={{ width: "140px" }}
                disabled={disableAction}
              />
              <button
                className="flex items-center gap-[16px] border border-[#ECE9E9] h-[48px] rounded-[4px] px-[16px]"
                onClick={handlePreview}
              >
                <EyeIcon />
                <span>Preview Post</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-white  rounded-[20px] text-dark">
            <label className="mb-3 lg:mb-7 block">
              <p className="text-[18px]">Title</p>
              <input
                autoFocus
                value={form.title}
                onChange={(e) => handleForm("title", e.target.value)}
                type="text"
                className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
              />
            </label>
            <div className="flex w-full flex-col sm:flex-row gap-3 lg:gap-7">
              <label className="lg:mb-7 block w-full">
                <p className="text-[18px]">Author</p>
                <input
                  value={form.author}
                  onChange={(e) => handleForm("author", e.target.value)}
                  type="text"
                  className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
                />
              </label>

              <label className="mb-3 lg:mb-7 block w-full">
                <p className="text-[18px]">Category</p>
                <input
                  value={form.category}
                  onChange={(e) => handleForm("category", e.target.value)}
                  type="text"
                  className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
                />
              </label>
            </div>
            <UploadCoverMedia
              preview={form?.img?.url}
              onChange={(value) => handleForm("img", value)}
            />
            <div className="mt-7">
              <Editor
                value={form?.content}
                onChange={(value) => handleForm("content", value)}
                defaultValue={form?.content}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

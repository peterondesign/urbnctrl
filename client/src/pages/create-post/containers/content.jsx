import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import EyesIcon from '../../../assets/svgs/eyesIcon';
import Button from '../../../components/button';
import Editor from '../components/Editor';
import UploadCoverMedia from '../components/uploadCoverMedia';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import useBlog from '../../../hooks/api/blog';
import useUpload from '../../../hooks/api/upload';

const Content = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    author: '',
    content: '',
    img: null,
  });
  const navigate = useNavigate();
  const { handleBlog, createBlogData } = useBlog();
  const { handleUpload, getUploadedData } = useUpload();

  /**
   * @param {"title" | "category" | "author" | "content"| "img"} key
   * @param {*} value
   */
  const handleForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const disableAction =
    !form.author || !form.category || !form.content || !form.title || !form.img;

  const handleCreate = async () => {
    if (disableAction) {
      toast.error('Please fill in the fields');
    } else {
      const copyForm = { ...form };
      const formData = new FormData();
      formData.append('img', form.img?.file);
      const imgRes = await handleUpload(formData);
      const image = imgRes?.data[0];
      if (image) {
        const newForm = { ...copyForm, img: image };
        const res = await handleBlog(newForm);
        if (res?.data) {
          toast.success('Blog was created successfully');
          navigate('/community');
        }
      }
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto px-0 sm:px-[24px] lg:px-[80px] w-full">
      <div className="w-full bg-white py-[60px] px-[24px] lg:px-[40px] rounded-[20px] text-dark">
        <label className="mb-3 lg:mb-7 block">
          <p className="text-[18px]">Title</p>
          <input
            value={form.title}
            onChange={(e) => handleForm('title', e.target.value)}
            type="text"
            className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
          />
        </label>
        <div className="flex w-full flex-col sm:flex-row gap-3 lg:gap-7">
          <label className="lg:mb-7 block w-full">
            <p className="text-[18px]">Author</p>
            <input
              value={form.author}
              onChange={(e) => handleForm('author', e.target.value)}
              type="text"
              className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
            />
          </label>

          <label className="mb-3 lg:mb-7 block w-full">
            <p className="text-[18px]">Category</p>
            <input
              value={form.category}
              onChange={(e) => handleForm('category', e.target.value)}
              type="text"
              className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
            />
          </label>
        </div>
        <UploadCoverMedia onChange={(value) => handleForm('img', value)} />
        <div className="mt-7">
          <Editor
            onChange={(value) => handleForm('content', value)}
            defaultValue={form?.content}
          />
        </div>
        <div className="w-full flex  flex-col sm:flex-row justify-end mt-8 items-center gap-7">
          <button
            className="flex items-center gap-5 border border-[#ECE9E9] border-solid px-[20px] h-[52px]"
            onClick={() => {
              if (disableAction) {
                toast.error('Please fill in the fields');
              } else {
                navigate('preview', { state: form });
              }
            }}
          >
            <EyesIcon />
            Preview Post
          </button>
          <Button
            text="Publish"
            onClick={handleCreate}
            loading={createBlogData?.loading || getUploadedData?.loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

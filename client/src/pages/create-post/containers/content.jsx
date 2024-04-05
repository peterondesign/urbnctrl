import { useState } from 'react';
import EyesIcon from '../../../assets/svgs/eyesIcon';
import Button from '../../../components/button';
import Editor from '../components/Editor';
import UploadCoverMedia from '../components/uploadCoverMedia';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';

const Content = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    author: '',
    content: null,
    img: null,
  });

  /**
   * @param {"title" | "category" | "author" | "content"| "img"} key
   * @param {*} value
   */
  const handleForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full bg-white py-[60px] px-[40px] rounded-[20px] text-dark">
      <label className="mb-7 block">
        <p className="text-[18px]">Title</p>
        <input
          value={form.title}
          onChange={(e) => handleForm('title', e.target.value)}
          type="text"
          className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
        />
      </label>
      <div className="flex w-full gap-7">
        <label className="mb-7 block w-full">
          <p className="text-[18px]">Author</p>
          <input
            value={form.author}
            onChange={(e) => handleForm('author', e.target.value)}
            type="text"
            className="h-[50px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
          />
        </label>

        <label className="mb-7 block w-full">
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
        <Editor onChange={(value) => handleForm('content', value)} />
      </div>
      <div className="w-full flex justify-end mt-8 items-center gap-7">
        <button className="flex items-center gap-5 border border-[#ECE9E9] border-solid px-[20px] h-[52px] ">
          <EyesIcon />
          Preview Post
        </button>
        <Button text="Publish" />
      </div>
    </div>
  );
};

export default Content;

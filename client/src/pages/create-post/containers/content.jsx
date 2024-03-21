import EyesIcon from "../../../assets/svgs/eyesIcon";
import Button from "../../../components/button";
import Editor from "../components/Editor";

const Content = () => {
  return (
    <div className="w-full bg-white py-[60px] px-[40px] rounded-[20px] text-dark">
      <label className="mb-7 block">
        <p className="text-xl">Title</p>
        <input
          type="text"
          className="h-[60px] bg-[#F8F7F7] rounded-lg w-full padding px-[15px] outline-none"
        />
      </label>
      <Editor />
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

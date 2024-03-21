import { useRef, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export const Editor = () => {
  const [value, setValue] = useState({ value: null });
  const [images, setImages] = useState([]);
  const quillRef = useRef(null);
  const handleChange = (value) => {
    setValue(value);
  };

  const imageHandler = () => {
    const quillObj = quillRef?.current?.getEditor();
    const range = quillObj?.getSelection();

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const imageUrl = e.target.result; // For debugging
          setImages((prev) => {
            const copy = [...prev];
            copy.push({ data: imageUrl, file });
            return copy;
          });
          quillObj.editor.insertEmbed(range.index, "image", imageUrl);
        };
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );
  return (
    <div className="text-editor">
      <ReactQuill
        className="bg-[#F8F7F7]"
        theme="snow"
        ref={quillRef}
        value={value}
        onChange={handleChange}
        placeholder={"Create Blog..."}
        modules={modules}
      />
    </div>
  );
};

export default Editor;

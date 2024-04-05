import { useRef, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import useUpload from '../../../../hooks/api/upload';

Quill.register('modules/imageUploader', ImageUploader);

/**
 * @param {{onChange: Function}} props
 * @returns {JSX.Element}
 */
export const Editor = ({ onChange }) => {
  const [html, setHtml] = useState('');
  const quillRef = useRef(null);
  const { handleUpload, getUploadedData } = useUpload();

  const handleChange = (value) => {
    setHtml(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['image'],
        ],

        // handlers: {
        //   image: imageHandler,
        // },
      },
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('image', file);
            handleUpload(formData).then((result) => {
              console.log(result);
            });
            setTimeout(() => {
              resolve(
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png',
              );
            }, 3500);
          });
        },
      },
    }),
    [],
  );

  useEffect(() => {
    if (onChange) {
      onChange(html);
    }
  }, [html]);

  return (
    <div className="text-editor">
      <ReactQuill
        className="bg-[#F8F7F7]"
        theme="snow"
        ref={quillRef}
        value={html}
        defaultValue={html}
        onChange={handleChange}
        placeholder={'Create Blog...'}
        modules={modules}
      />
    </div>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func,
};

export default Editor;

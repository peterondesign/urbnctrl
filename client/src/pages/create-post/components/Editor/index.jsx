import { useRef, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import useUpload from '../../../../hooks/api/upload';

Quill.register('modules/imageUploader', ImageUploader);

/**
 * @param {{onChange: Function, defaultValue: string}} props
 * @returns {JSX.Element}
 */
export const Editor = ({ defaultValue, onChange }) => {
  const [html, setHtml] = useState('');
  const quillRef = useRef(null);
  const { handleUpload, cancelUpload } = useUpload();

  const handleChange = (value) => {
    setHtml(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image'],
        ],
      },
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('img', file);
            handleUpload(formData)
              .then((result) => {
                const url = result?.data[0];
                console.log(result);
                resolve(url);
              })
              .catch(() => {
                reject('Upload failed');
                cancelUpload();
              });
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
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={'Create Blog...'}
        modules={modules}
      />
    </div>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default Editor;

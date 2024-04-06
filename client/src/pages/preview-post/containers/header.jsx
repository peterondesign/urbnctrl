// import AboutText from "../../../assets/svgs/aboutText";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/button';
import MaxContainer from '../../../components/maxContainer';
import PropTypes from 'prop-types';
import useUpload from '../../../hooks/api/upload';
import useBlog from '../../../hooks/api/blog';

/**
 *
 * @param {{data: Object}} props
 * @returns {JSX.Element}
 */
const Header = ({ data }) => {
  const navigate = useNavigate();
  const { handleBlog, createBlogData } = useBlog();
  const { handleUpload, getUploadedData } = useUpload();
  const disableAction =
    !data?.author ||
    !data?.category ||
    !data?.content ||
    !data?.title ||
    !data?.img;

  const handleCreate = async () => {
    if (disableAction) {
      toast.error('Please fill in the fields');
    } else {
      const copyForm = { ...data };
      const formData = new FormData();
      formData.append('img', data.img?.file);
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
    <>
      <header>
        <div className="h-[200px] sm:h-[220px] lg:h-[300px] relative">
          <div className="h-[300px] lg:h-[420px] absolute top-[-180px] lg:top-[-120px] left-0 right-0 pt-[120px] pb-[110px] grid place-items-center [&>svg]:w-[280px]  sm:[&>svg]:w-[447px] ">
            {/* <AboutText /> */}
            <h1 className="text-[28px] sm:text-[50px] font-bold absolute top-[calc(50%+120px)]  sm:top-[calc(50%+130px)] lg:top-[calc(50%+65px)] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-primary">
              Preview
            </h1>
          </div>
        </div>
        <MaxContainer>
          <div className="flex w-full justify-end mb-6 lg:mb-8">
            <Button
              text="Publish"
              onClick={handleCreate}
              loading={createBlogData?.loading || getUploadedData?.loading}
            />
          </div>
        </MaxContainer>
        <img
          src={data?.img?.url}
          alt="blog cover image"
          loading="lazy"
          className="h-[390px] lg:h-[508px] w-full object-cover"
        />
      </header>
    </>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};
export default Header;

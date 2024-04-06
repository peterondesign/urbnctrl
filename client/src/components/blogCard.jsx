import { FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

/**
 * Blog card
 * @param {{data: Object}} props
 * @returns {JSX.Element}
 */
const BlogCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[400px] sm:h-[440px] rounded-[20px] bg-white flex flex-col overflow-hidden cursor-pointer"
      onClick={() => navigate(`/community/${data?.id}`)}
    >
      <div className="h-[248px]">
        <img
          src={data?.img}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 text-dark p-6 flex flex-col justify-between">
        <h3 className="blog_header text-[1.15rem] leading-[1.4rem] font-semibold">
          {data?.title}
        </h3>
        <div className="flex items-center gap-2">
          <FaCalendarAlt color="#aab0bc" size={15} />
          <p className="text-xs text-[#aab0bc] font-medium">
            {moment(data?.createdAt).format('MMMM DD, YYYY -  h:mmA')}
          </p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  data: PropTypes.object,
};
export default BlogCard;

import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button';
import LastestBlogs from '../../../components/lastestBlogs';

const Blogs = () => {
  const navigate = useNavigate();
  const isAdmin = false;
  return (
    <div>
      <div className="h-[60px] mb-6 flex w-full justify-between items-center">
        <h2 className="text-[32px] font-bold ">Latest posts</h2>
        {isAdmin && (
          <Button
            text="Create Post"
            onClick={() => navigate('/community/create-post')}
          />
        )}
      </div>
      <LastestBlogs />
    </div>
  );
};

export default Blogs;

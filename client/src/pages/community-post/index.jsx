import { useParams } from 'react-router-dom';
import Footer from '../../components/footer';
import MaxContainer from '../../components/maxContainer';
import PageWrapper from '../../components/pageWrapper';
import Content from './containers/content';
import Header from './containers/header';
import useBlog from '../../hooks/api/blog';
import { useEffect } from 'react';

const CommunityPost = () => {
  const { postId } = useParams();
  const { getSingleBlogData, handleGetSingleBlog } = useBlog();
  useEffect(() => {
    handleGetSingleBlog(postId);
  }, []);

  const blog = getSingleBlogData?.data;

  return (
    <PageWrapper>
      <Header data={blog} loading={getSingleBlogData?.loading} />
      <MaxContainer>
        <Content data={blog} loading={getSingleBlogData?.loading} />
      </MaxContainer>
      <Footer />
    </PageWrapper>
  );
};

export default CommunityPost;

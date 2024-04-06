import { useLocation, Navigate } from 'react-router-dom';
import Footer from '../../components/footer';
import MaxContainer from '../../components/maxContainer';
import PageWrapper from '../../components/pageWrapper';
import Content from './containers/content';
import Header from './containers/header';

const PreviewPost = () => {
  const data = useLocation()?.state;

  if (!data) {
    return <Navigate to="/community/create-post" replace />;
  }

  return (
    <PageWrapper>
      <Header data={data} />
      <MaxContainer>
        <Content data={data} />
      </MaxContainer>
      <Footer />
    </PageWrapper>
  );
};

export default PreviewPost;

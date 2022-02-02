import { ErrorPage } from 'components/templates/404Template';
import { DashboardTemplate } from 'components/templates/dashboardTemplate';
import { LoadingPage } from 'components/templates/loadingTemplate';
import type { NextPage } from 'next';
import { useMovieList } from 'utils';

const Home: NextPage = () => {
  const {
    data: movieList,
    isError,
    isLoading,
  } = useMovieList('http://localhost:8000/movies');

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return <DashboardTemplate movieList={movieList} />;
};

export default Home;

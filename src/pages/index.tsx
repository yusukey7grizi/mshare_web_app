import { ErrorPage } from 'components/templates/errorTemplate';
import { DashboardTemplate } from 'components/templates/dashboardTemplate';
import { LoadingPage } from 'components/templates/loadingTemplate';
import type { NextPage } from 'next';
import { useMovieList } from 'utils';

const Home: NextPage = () => {
  const { data: movieList, isError, isLoading } = useMovieList('/movies');

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return <DashboardTemplate movieList={movieList} />;
};

export default Home;

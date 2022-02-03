import { DashboardTemplate } from 'components/templates/dashboardTemplate';
import type { NextPage } from 'next';
import { useMovieList } from 'utils';

const Home: NextPage = () => {
  const { data: movieList } = useMovieList('http://localhost:8000/movies');

  return movieList ? <DashboardTemplate movieList={movieList} /> : <></>;
};

export default Home;

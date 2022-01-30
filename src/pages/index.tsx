import { DashboardTemplate } from 'components/templates/dashboardTemplate';
import type { NextPage } from 'next';
import { useMovieList } from 'utils';

const Home: NextPage = () => {
  const { data } = useMovieList('http://localhost:8000/movies');
  return data ? <DashboardTemplate movieList={data} /> : <></>;
};

export default Home;

import { DashboardTemplate } from 'components/templates/dashboardTemplate';
import { AppContext } from 'contexts/appContext';
import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { useMovieList } from 'utils';

const Home: NextPage = () => {
  const { setMovieList, movieList } = useContext(AppContext);

  const { data } = useMovieList('http://localhost:8000/movies');
  return data ? <DashboardTemplate movieList={data} /> : <></>;
};

export default Home;

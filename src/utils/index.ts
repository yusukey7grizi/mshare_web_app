import axios from 'axios';
import useSWR from 'swr';
import { Movie } from 'types/dataTypes';

type UseMovie = {
  data: Movie;
  isLoading: boolean;
  isError: boolean;
};

type UseMovieList = {
  data: Movie[];
  isLoading: boolean;
  isError: boolean;
};

const useMovie = (url: string): UseMovie => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useMovieList = (url: string): UseMovieList => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useMovie, useMovieList };

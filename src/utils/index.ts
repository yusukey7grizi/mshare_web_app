import useSWR from 'swr';
import { Movie } from 'types/dataTypes';
import { axiosDefaultInstance } from './axiosConfig';

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

interface CallBackType {
  (url: string): void;
}

const useMovie = (url: string): UseMovie => {
  const fetcher = (url: string) =>
    axiosDefaultInstance.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useMovieList = (url: string): UseMovieList => {
  const fetcher = (url: string) =>
    axiosDefaultInstance.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useRelatedMovieList = (callback: CallBackType): UseMovieList => {
  const fetcher = (url: string) =>
    axiosDefaultInstance.get(url).then((res) => res.data);
  const { data, error } = useSWR(callback, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useMovie, useMovieList, useRelatedMovieList };

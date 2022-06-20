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

type PutMovieBody = {
  grinningScore: string;
};

type HandleSendScoreInput = {
  grinningScore: number;
  movieId: string;
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

const handleSendScore = async (data: HandleSendScoreInput) => {
  const { grinningScore, movieId } = data;
  const putBody: PutMovieBody = { grinningScore: `${grinningScore}` };
  console.log('is updating');
  try {
    await axiosDefaultInstance.put(`/movies/${movieId}`, putBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { handleSendScore, useMovie, useMovieList, useRelatedMovieList };

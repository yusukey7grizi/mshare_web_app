import React, { Dispatch, FC, SetStateAction } from 'react';
import { YouTubePlayer, YouTubeVideoDetails } from 'components/molecules';
import { MoviePlayerState } from 'components/organisms/movieDetailContent';
import { MovieInfo } from 'pages/movie/[id]';

type MovieDetailContainerProps = {
  movieInfo: MovieInfo;
  setMoviePlayerState: Dispatch<SetStateAction<MoviePlayerState>>;
};

const MovieDetailContainer: FC<MovieDetailContainerProps> = ({
  movieInfo,
  setMoviePlayerState,
}) => {
  return (
    <>
      <YouTubePlayer
        movieInfo={movieInfo}
        setMoviePlayerState={setMoviePlayerState}
      />
      <YouTubeVideoDetails movieInfo={movieInfo} />
    </>
  );
};

export { MovieDetailContainer };

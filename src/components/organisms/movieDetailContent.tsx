import React, { FC, useState } from "react";
import {
  MovieDetailContainer,
  OtherMoviesContainer,
  FacialExpressionRatingContainer,
} from "components/organisms";
import { MovieInfo } from "pages/movie/[id]";

export type MoviePlayerState = {
  playerState: YT.PlayerState;
  //       UNSTARTED = -1,
  //       ENDED = 0,
  //       PLAYING = 1,
  //       PAUSED = 2,
  //       BUFFERING = 3,
  //       CUED = 5
  currentTime: number;
  duration: number;
};

type MovieDetailContentProps = {
  movieInfo: MovieInfo;
};

const MovieDetailContent: FC<MovieDetailContentProps> = ({ movieInfo }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  });

  return (
    <div>
      <MovieDetailContainer
        movieInfo={movieInfo}
        setMoviePlayerState={setMoviePlayerState}
      />
      <OtherMoviesContainer movieInfo={movieInfo} />
      <FacialExpressionRatingContainer moviePlayerState={moviePlayerState} />
    </div>
  );
};

export { MovieDetailContent };

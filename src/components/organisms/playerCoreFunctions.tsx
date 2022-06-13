import React, { FC } from 'react';
import { FaceRecognition, YouTubePlayer } from 'components/molecules';
import { Movie } from 'types/dataTypes';
import { CoreFucntionsProvider } from 'contexts/coreFunctionsContext';

type CoreFunctionProps = {
  movie: Movie;
  movieDetailRef: React.RefObject<HTMLDivElement>;
};

const PlayerCoreFunctions: FC<CoreFunctionProps> = ({
  movie,
  movieDetailRef,
}) => {
  return (
    <CoreFucntionsProvider>
      <YouTubePlayer movie={movie} />
      <FaceRecognition movieDetailRef={movieDetailRef} movie={movie} />
    </CoreFucntionsProvider>
  );
};

export { PlayerCoreFunctions };

import React, { FC, memo } from 'react';
import { FaceRecognition, YouTubePlayer } from 'components/molecules';
import { Movie } from 'types/dataTypes';
import { CoreFucntionsProvider } from 'contexts/coreFunctionsContext';

type CoreFunctionProps = {
  movie: Movie;
  movieDetailRef: React.RefObject<HTMLDivElement>;
};

// eslint-disable-next-line react/display-name
const PlayerCoreFunctions: FC<CoreFunctionProps> = memo(
  ({ movie, movieDetailRef }) => {
    return (
      <CoreFucntionsProvider>
        <YouTubePlayer movie={movie} />
        <FaceRecognition movieDetailRef={movieDetailRef} movie={movie} />
      </CoreFucntionsProvider>
    );
  }
);

export { PlayerCoreFunctions };

import React, { FC, useState } from 'react';
import { FaceRecognitionToggle, FaceRecognition } from 'components/molecules';
import { MoviePlayerState } from 'components/organisms/movieDetailContent';

type FacialExpressionRatingContainerProps = {
  moviePlayerState: MoviePlayerState;
};

const FacialExpressionRatingContainer: FC<FacialExpressionRatingContainerProps> =
  ({ moviePlayerState }) => {
    const [recognition, setRecognition] = useState(true);

    return (
      <>
        <FaceRecognition
          moviePlayerState={moviePlayerState}
          recognition={recognition}
        />
        <FaceRecognitionToggle
          recognition={recognition}
          setRecognition={setRecognition}
        />
      </>
    );
  };

export { FacialExpressionRatingContainer };

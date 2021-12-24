import React, { FC, useState } from "react";
import { FaceRecognitionToggle, FaceRecognition } from "components/molecules";
import { MoviePlayerState } from "components/organisms/movieDetailContent";

type FacialExpressionRatingContainerProps = {
  moviePlayerState: MoviePlayerState;
};

const FacialExpressionRatingContainer: FC<FacialExpressionRatingContainerProps> =
  ({ moviePlayerState }) => {
    const [recognition, setRecognition] = useState(true);

    return (
      <div>
        <FaceRecognition
          moviePlayerState={moviePlayerState}
          recognition={recognition}
          setRecognition={setRecognition}
        />
        <FaceRecognitionToggle
          recognition={recognition}
          setRecognition={setRecognition}
        />
      </div>
    );
  };

export { FacialExpressionRatingContainer };

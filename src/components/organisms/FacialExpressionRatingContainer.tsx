import React, { FC } from "react";
import { FaceRecognitionToggle, FaceRecognition } from "components/molecules";

const FacialExpressionRatingContainer: FC = () => {
  return (
    <div>
      <FaceRecognition />
      <FaceRecognitionToggle />
    </div>
  );
};

export { FacialExpressionRatingContainer };

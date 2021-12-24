import React, { Dispatch, FC, SetStateAction } from "react";

type FaceRecognitionToggleProps = {
  recognition: boolean;
  setRecognition: Dispatch<SetStateAction<boolean>>;
};

const FaceRecognitionToggle: FC<FaceRecognitionToggleProps> = ({
  recognition,
  setRecognition,
}) => {
  return <div></div>;
};

export { FaceRecognitionToggle };

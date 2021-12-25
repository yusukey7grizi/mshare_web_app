import React, { Dispatch, FC, SetStateAction } from 'react';

type FaceRecognitionToggleProps = {
  isRecognitionOn: boolean;
  setisRecognitionOn: Dispatch<SetStateAction<boolean>>;
};

const FaceRecognitionToggle: FC<FaceRecognitionToggleProps> = ({
  isRecognitionOn,
  setisRecognitionOn,
}) => {
  return <div></div>;
};

export { FaceRecognitionToggle };

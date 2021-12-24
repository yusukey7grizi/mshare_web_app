import React, {
  FC,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import * as faceapi from "face-api.js";
import {
  detectSingleFace,
  FaceExpressions,
  FACE_EXPRESSION_LABELS,
  TinyFaceDetectorOptions,
  TNetInput,
} from "face-api.js";
import { MoviePlayerState } from "components/organisms/movieDetailContent";
import useInterval from "use-interval";

type FaceRecognitionProps = {
  moviePlayerState: MoviePlayerState;
  recognition: boolean;
  setRecognition: Dispatch<SetStateAction<boolean>>;
};

// recognition threshold for determining expression
const THRESHOLD = 0.5;

const FaceRecognition: FC<FaceRecognitionProps> = ({
  moviePlayerState,
  recognition,
  setRecognition,
}) => {
  const webcamRef = useRef<HTMLVideoElement>(null);
  // state for displaying the latest face recognition score
  const [modelReady, setModelReady] = useState<boolean>(false);
  const [webcamReady, setWebcamReady] = useState<boolean>(false);
  const [expressionScore, setExpressionScore] = useState<FaceExpressions>(
    new FaceExpressions([0, 0, 0, 0, 0, 0, 0])
  );

  useInterval(async () => {
    console.log(expressionScore);
    if (modelReady && webcamReady) {
      switch (moviePlayerState.playerState) {
        case YT.PlayerState.PLAYING:
          const detectionsWithExpressions = await detectSingleFace(
            webcamRef.current as TNetInput,
            new TinyFaceDetectorOptions()
          ).withFaceExpressions();
      }
    }
    if (moviePlayerState.playerState === YT.PlayerState.PLAYING) {
      // if (
      //   detectionsWithExpressions &&
      //   detectionsWithExpressions.expressions.happy > THRESHOLD
      // ) {
      //   setHappyFrame(happyFrame + 1);
      //   console.log(
      //     "score updated",
      // detectionsWithExpressions.expressions.happy,
      //     happyFrame
      //   );
      // }
      // setTotalFrame(totalFrame + 1);
    }
  }, 300);

  // Loading models for face detection
  const loadModels = async () => {
    try {
      await faceapi.loadTinyFaceDetectorModel("/models");
      await faceapi.loadFaceExpressionModel("/models");
      setModelReady(true);
      console.log("Models loaded successfully");
    } catch (error) {
      console.error(error);
    }
  };
  // start webcam
  const startWebcam = async () => {
    if (webcamRef.current) {
      const webcam = webcamRef.current;
      try {
        // ask for usermedia
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            width: webcam.videoWidth,
            height: webcam.videoHeight,
          },
        });
        webcam.srcObject = await stream;
        setWebcamReady(true);
        console.log("webcam initiated");
      } catch (error) {
        console.error(error);
      }
    }
  };

  // run face detection on a frame, this is called in a interval after video starts playing
  // const runFaceDetection = () => {
  //   const video = webcamRef.current as TNetInput;
  //   setInterval;
  // };

  // On load, start face detection
  useEffect(() => {
    // setup face detection
    const setUpFaceDetection = async () => {
      await loadModels();
      await startWebcam();
    };
    if (recognition) setUpFaceDetection();
  }, [recognition]);

  return (
    <div>
      <video ref={webcamRef} autoPlay muted hidden />

      <h1>{moviePlayerState.playerState}</h1>
    </div>
  );
};

export { FaceRecognition };

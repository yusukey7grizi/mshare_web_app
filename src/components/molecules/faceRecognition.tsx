import React, { FC, useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import {
  detectSingleFace,
  TinyFaceDetectorOptions,
  TNetInput,
} from "face-api.js";
import { MoviePlayerState } from "components/organisms/movieDetailContent";
import useInterval from "use-interval";

type FaceRecognitionProps = {
  moviePlayerState: MoviePlayerState;
  recognition: boolean;
};

// string keys consumed in ExpressionScore object type
type FaceExpressions =
  | "neutral"
  | "happy"
  | "sad"
  | "angry"
  | "fearful"
  | "disgusted"
  | "surprised";

// type to hold the detection score, has keys defined in FaceExpressions
type FaceExpressionScores = { [key in FaceExpressions]: number };

// recognition threshold for determining expression
const THRESHOLD = 0.5;

const FaceRecognition: FC<FaceRecognitionProps> = ({
  moviePlayerState,
  recognition,
}) => {
  // ref for grabbing the webcam video element
  const webcamRef = useRef<HTMLVideoElement>(null);
  // model loading status, true if completed
  const [modelReady, setModelReady] = useState<boolean>(false);
  // webcam status, true if allowed by user and started
  const [webcamReady, setWebcamReady] = useState<boolean>(false);
  // total number of face recognition frames
  const [totalFrame, setTotalFrame] = useState<number>(0);
  // keepiung track of number of frames with each face expressions
  const [expressionScore, setExpressionScore] = useState<FaceExpressionScores>({
    neutral: 0,
    happy: 0,
    sad: 0,
    angry: 0,
    fearful: 0,
    disgusted: 0,
    surprised: 0,
  });

  // This interval is used to run face recognition,
  // it runs face detection if all the conditions are met
  useInterval(async () => {
    console.log(expressionScore);
    if (modelReady && webcamReady) {
      // switch statement to check the player state
      switch (moviePlayerState.playerState) {
        // when the video is playing
        case YT.PlayerState.PLAYING:
          // run the face detection
          const detectionsWithExpressions = await detectSingleFace(
            webcamRef.current as TNetInput,
            new TinyFaceDetectorOptions()
          ).withFaceExpressions();
          // imcrementing the score of the detected expression
          for (const [key, value] of Object.entries(
            detectionsWithExpressions?.expressions as FaceExpressionScores
          )) {
            if (value > THRESHOLD) {
              const updatedState = expressionScore;
              updatedState[key as FaceExpressions] += 1;
              setExpressionScore({
                ...updatedState,
              });
            }
          }
          // incrementing the total number of recognitions
          setTotalFrame(totalFrame + 1);
          break;
        // when the video ends
        case YT.PlayerState.ENDED:
          // calculate the score for the video and call PUT movie
          break;
        // default case CUE, PAUSED, BUFFERING
        default:
          break;
      }
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

  // On load, start face detection
  useEffect(() => {
    // setup face detection
    const setUpFaceDetection = async () => {
      await loadModels();
      await startWebcam();
    };
    // if recognition is allowed, start setting up face detection
    if (recognition) setUpFaceDetection();
  }, [recognition]);

  return (
    <div>
      <video ref={webcamRef} autoPlay muted hidden />

      {/* <h1>{moviePlayerState.playerState}</h1> */}
      <h1>happy: {expressionScore.happy}</h1>
      <h1>neutral: {expressionScore.neutral}</h1>
      <h1>angry: {expressionScore.angry}</h1>
      <h1>sad: {expressionScore.sad}</h1>
      <h1>disgusted: {expressionScore.disgusted}</h1>
      <h1>surprised: {expressionScore.surprised}</h1>
      <h1>fearful: {expressionScore.fearful}</h1>
      <h1>total: {totalFrame}</h1>
    </div>
  );
};

export { FaceRecognition };

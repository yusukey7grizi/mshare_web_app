import React, { FC, useState, useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import {
  detectSingleFace,
  TinyFaceDetectorOptions,
  TNetInput,
} from 'face-api.js';
import useInterval from 'use-interval';
import { MoviePlayerState } from 'types';
import { Movie } from 'types/dataTypes';
import { Typography } from '@mui/material';

type FaceRecognitionProps = {
  moviePlayerState: MoviePlayerState;
  isRecognitionOn: boolean;
  movie: Movie;
  grinningScore: number;
  setGrinningScore: (input: number) => void;
};

// string keys consumed in ExpressionScore object type
type FaceExpressions =
  | 'neutral'
  | 'happy'
  | 'sad'
  | 'angry'
  | 'fearful'
  | 'disgusted'
  | 'surprised';

// type to hold the detection score, has keys defined in FaceExpressions
type FaceExpressionScores = { [key in FaceExpressions]: number };

type putMovieBody = {
  grinningScore: number;
};

// recognition threshold for determining expression
const THRESHOLD = 0.5;

const FaceRecognition: FC<FaceRecognitionProps> = ({
  moviePlayerState,
  isRecognitionOn,
  movie,
  grinningScore,
  setGrinningScore,
}) => {
  // ref for grabbing the webcam video element
  const webcamRef = useRef<HTMLVideoElement>(null);
  // model loading status, true if completed
  const [isModelReady, setIsModelReady] = useState<boolean>(false);
  // webcam status, true if allowed by user and started
  const [isWebcamReady, setIsWebcamReady] = useState<boolean>(false);
  const [isScoreUpdated, setIsScoreUpdated] = useState<boolean>(false);
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
    // console.log(moviePlayerState.playerState);
    if (isModelReady && isWebcamReady) {
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
          if (detectionsWithExpressions?.expressions) {
            for (const [key, value] of Object.entries(
              detectionsWithExpressions?.expressions as FaceExpressionScores
            )) {
              if (value > THRESHOLD) {
                const updatedState = expressionScore;
                updatedState[key as FaceExpressions] += 1;
                setExpressionScore({
                  ...updatedState,
                });
                if (key == 'happy') setGrinningScore(grinningScore + 1);
              }
            }
          }
          // incrementing the total number of recognitions
          setTotalFrame(totalFrame + 1);
          break;
        // when the video ends
        case YT.PlayerState.ENDED:
          if (isScoreUpdated) break;
          try {
            const putBody: putMovieBody = {
              grinningScore: grinningScore,
            };
            const res = await fetch(
              `http://localhost:8000/movies/${movie.id}`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(putBody),
              }
            );
            if (res.ok) {
              console.log('score updated successfully');
              setIsScoreUpdated(true);
            }
          } catch (error) {
            console.error(error);
          }
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
      await faceapi.loadTinyFaceDetectorModel('/models');
      await faceapi.loadFaceExpressionModel('/models');
      setIsModelReady(true);
      console.log('Models loaded successfully');
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
            width: { min: 1280 },
            height: { min: 720 },
          },
        });
        webcam.srcObject = await stream;
        setIsWebcamReady(true);
        console.log('webcam initiated');
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

    const sendScore = async () => {
      if (isScoreUpdated) return;
      const putBody: putMovieBody = { grinningScore: expressionScore.happy };
      try {
        const res = await fetch(`http://localhost:8000/movies/${movie.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(putBody),
        });
        if (res.ok) {
          console.log('put success', res);
        }
      } catch (error) {
        console.error;
      }
    };

    // if recognition is allowed, start setting up face detection
    if (isRecognitionOn) setUpFaceDetection();

    // clean up function before unmount
    const cleanup = () => {
      sendScore();
    };
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecognitionOn]);

  return (
    <>
      {isRecognitionOn ? (
        <>
          <Typography
            variant='h5'
            fontWeight='bold'
            textAlign='center'
            gutterBottom
          >
            現在のあなたのニヤッと回数 : {expressionScore.happy}
          </Typography>
          <video ref={webcamRef} width='800' height='450' autoPlay muted />
        </>
      ) : (
        <video ref={webcamRef} autoPlay muted hidden />
      )}

      {/* <h1>neutral: {expressionScore.neutral}</h1>
      <h1>angry: {expressionScore.angry}</h1>
      <h1>sad: {expressionScore.sad}</h1>
      <h1>disgusted: {expressionScore.disgusted}</h1>
      <h1>surprised: {expressionScore.surprised}</h1>
      <h1>fearful: {expressionScore.fearful}</h1>
      <h1>total: {totalFrame}</h1> */}
    </>
  );
};

export { FaceRecognition };

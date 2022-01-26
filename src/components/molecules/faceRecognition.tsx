import React, { FC, useState, useEffect, useRef, RefObject } from 'react';
import * as faceapi from 'face-api.js';
import {
  detectSingleFace,
  TinyFaceDetectorOptions,
  TNetInput,
} from 'face-api.js';
import useInterval from 'use-interval';
import { MoviePlayerState } from 'types';
import { Movie } from 'types/dataTypes';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { MinScreenSize } from 'components/constants';

type FaceRecognitionProps = {
  moviePlayerState: MoviePlayerState;
  movie: Movie;
  grinningScore: number;
  setGrinningScore: (input: number) => void;
  movieDetailRef: any;
};

type putMovieBody = {
  grinningScore: number;
};

// recognition threshold for determining expression
const THRESHOLD = 0.5;

const FaceRecognition: FC<FaceRecognitionProps> = ({
  moviePlayerState,
  movie,
  grinningScore,
  movieDetailRef,
  setGrinningScore,
}) => {
  const [isRecognitionOn, setIsRecognitionOn] = useState<boolean>(true);
  const webcamRef = useRef<HTMLVideoElement>(null);
  const [isModelReady, setIsModelReady] = useState<boolean>(false);
  const [isWebcamReady, setIsWebcamReady] = useState<boolean>(false);
  const [isScoreUpdated, setIsScoreUpdated] = useState<boolean>(false);
  const [totalFrame, setTotalFrame] = useState<number>(0);
  const [individualGrinningScore, setIndividualGrinningScore] =
    useState<number>(0);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const isLargeScreen = useMediaQuery(MinScreenSize['l']);
  const cameraSize = isLargeScreen ? '5rem' : '3rem';

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
              detectionsWithExpressions?.expressions
            )) {
              if (value > THRESHOLD && key == 'happy') {
                setGrinningScore(grinningScore + 1);
                setIndividualGrinningScore(individualGrinningScore + 1);
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
          video: { width: 100, height: 100 },
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
      const putBody: putMovieBody = { grinningScore: individualGrinningScore };
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

  const handleSetX = () => {
    const currentWidth = webcamRef?.current?.getBoundingClientRect().x;
    const halfScreenWidth = window.innerWidth / 2;
    const leftX = isLargeScreen
      ? window.innerWidth - 100
      : window.innerWidth - 65;

    if (currentWidth && currentWidth > halfScreenWidth) {
      return leftX;
    } else {
      return 2;
    }
  };

  return isRecognitionOn ? (
    <motion.video
      animate={{ x: isDragging ? 0 : handleSetX() }}
      drag
      ref={webcamRef}
      autoPlay
      whileTap={{ scale: 1.2 }}
      dragConstraints={movieDetailRef}
      style={{
        width: cameraSize,
        height: cameraSize,
        borderRadius: '50%',
        zIndex: 100,
        position: 'fixed',
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      transition={{ duration: 0.5 }}
    />
  ) : (
    <></>
  );
};

export { FaceRecognition };

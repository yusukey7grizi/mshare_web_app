import React, { FC, useState, useEffect, useRef, useContext } from 'react';
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
import { ScreenSize } from 'components/constants';
import { CoreFunctionsContext } from 'contexts/coreFunctionsContext';

type FaceRecognitionProps = {
  movie: Movie;
  movieDetailRef: any;
};

// recognition threshold for determining expression
const THRESHOLD = 0.5;

const FaceRecognition: FC<FaceRecognitionProps> = ({ movieDetailRef }) => {
  const { grinningScore, setGrinningScore, moviePlayerState } =
    useContext(CoreFunctionsContext);

  const webcamRef = useRef<HTMLVideoElement>(null);
  const [isModelReady, setIsModelReady] = useState<boolean>(false);
  const [isWebcamReady, setIsWebcamReady] = useState<boolean>(false);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const cameraSize = isLargerThanIpad ? '5rem' : '3rem';
  let mediaStream: MediaStream;

  useInterval(async () => {
    if (
      isModelReady &&
      isWebcamReady &&
      moviePlayerState.playerState === YT.PlayerState.PLAYING
    ) {
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
          }
        }
      }
    }
  }, 300);

  const handleLoadModels = async () => {
    await faceapi.loadTinyFaceDetectorModel('/models');
    await faceapi.loadFaceExpressionModel('/models');
    setIsModelReady(true);
  };

  const handleStartWebcam = async () => {
    if (webcamRef.current) {
      const webcam = webcamRef.current;
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: 100, height: 100 },
      });

      webcam.srcObject = mediaStream;
      setIsWebcamReady(true);
    }
  };

  const handleSetX = () => {
    const currentX = webcamRef?.current?.getBoundingClientRect().x;
    const halfScreenWidth = window.innerWidth / 2;
    const newX = isLargerThanIpad
      ? window.innerWidth - 100
      : window.innerWidth - 65;

    if (currentX && currentX > halfScreenWidth) {
      return newX;
    } else {
      return 2;
    }
  };

  useEffect(() => {
    const handleSetUpFaceDetection = async () => {
      await handleLoadModels();
      await handleStartWebcam();
    };

    handleSetUpFaceDetection();

    return () => {
      mediaStream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <motion.video
      animate={{ x: isDragging ? 0 : handleSetX() }}
      drag
      ref={webcamRef}
      autoPlay
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.2 }}
      dragConstraints={movieDetailRef}
      style={{
        width: cameraSize,
        height: cameraSize,
        borderRadius: '50%',
        zIndex: 100,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      transition={{ duration: 0.5 }}
    />
  );
};

export { FaceRecognition };

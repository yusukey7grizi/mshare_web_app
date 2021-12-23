import React, { FC, useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import {
  detectSingleFace,
  MtcnnOptions,
  TinyFaceDetectorOptions,
  TNetInput,
} from "face-api.js";
// import Webcam from "react-webcam";

const FaceRecognition: FC = () => {
  const webcamRef = useRef<HTMLVideoElement>(null);
  // state for displaying the latest face recognition score
  const [score, setScore] = useState<number | undefined>(0);

  // Loading models for face detection
  const loadModels = async () => {
    try {
      await faceapi.loadTinyFaceDetectorModel("/models");
      await faceapi.loadFaceExpressionModel("/models");
      console.log("Models loaded successfully");
    } catch (error) {
      console.error(error);
    }
  };
  // start webcam
  const startWebcam = async () => {
    if (webcamRef.current) {
      const webcam = webcamRef.current;

      // ask for usermedia
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: webcam.videoWidth,
          height: webcam.videoHeight,
        },
      });
      webcam.srcObject = await stream;

      console.log("webcam initiated");
    }
  };

  // run face detection on a frame, this is called in a interval after video starts playing
  const runFaceDetection = () => {
    const video = webcamRef.current as TNetInput;
    setInterval(async () => {
      const detectionsWithExpressions = await detectSingleFace(
        video,
        new TinyFaceDetectorOptions()
      ).withFaceExpressions();
      setScore(detectionsWithExpressions?.expressions.happy);
    }, 300);
  };

  // On load, start face detection
  useEffect(() => {
    // setup face detection
    const setUpFaceDetection = async () => {
      await loadModels();
      await startWebcam();
      console.log("set up complete");
    };
    setUpFaceDetection();
  }, []);

  return (
    <div>
      <video ref={webcamRef} autoPlay muted onPlay={runFaceDetection} />
      <h1>{score}</h1>
    </div>
  );
};

export { FaceRecognition };

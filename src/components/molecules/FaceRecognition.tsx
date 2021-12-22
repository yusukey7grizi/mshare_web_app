import React, { FC, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { detectAllFaces, MtcnnOptions, TNetInput } from "face-api.js";
import { MtcnnResult } from "face-api.js/build/commonjs/mtcnn/types";
import Webcam from "react-webcam";

const FaceRecognition: FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Run face detection
  const runFaceDetection = async () => {
    await loadModels();
    await getUserMedia();
  };

  // Loading models for face detection
  const loadModels = async () => {
    try {
      await faceapi.loadMtcnnModel("/models");
      await faceapi.loadFaceDetectionModel("/models");
      await faceapi.loadFaceExpressionModel("/models");
      console.log("Models loaded successfully");
    } catch (error) {
      console.error(error);
    }
  };
  // start face detection
  const getUserMedia = async () => {
    if (webcamRef.current && canvasRef.current) {
      const webcam = webcamRef.current.video as HTMLVideoElement;
      const canvas = canvasRef.current;
      webcam.width = webcam.videoWidth;
      webcam.height = webcam.videoHeight;
      canvas.width = webcam.videoWidth;
      canvas.height = webcam.videoHeight;
      const video = webcamRef.current.video as TNetInput;
      const detectionsWithExpressions = await faceapi
        .detectAllFaces(
          video,
          new MtcnnOptions({
            maxNumScales: 10,
            scaleFactor: 0.709,
            scoreThresholds: [0.6, 0.7, 0.7],
            minFaceSize: 20,
          })
        )
        .withFaceExpressions();
      console.log(detectionsWithExpressions);
    }
  };

  // On load, start face detection
  useEffect(() => {
    runFaceDetection();
  });
  return (
    <div>
      <Webcam audio={false} ref={webcamRef} />
      <canvas ref={canvasRef} />
    </div>
  );
};

export { FaceRecognition };

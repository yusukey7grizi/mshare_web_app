import React, { FC, useEffect } from 'react'
import faceapi from 'face-api.js'

const FaceRecognition:FC = () => {
    useEffect(() => {
        loadModels()
    }, [])
    return (
        <div>
            <video id="inputVideo"></video>
            <canvas id="overlay" />
        </div>
    )
}

export { FaceRecognition }

const loadModels = async () => {
    try {
        await faceapi.loadMtcnnModel('/models')
        await faceapi.loadFaceDetectionModel('/models')
        await faceapi.loadFaceExpressionModel('/models')
        console.log("Models loaded successfully")
    } catch (error) {
        console.error(error)
    }
}
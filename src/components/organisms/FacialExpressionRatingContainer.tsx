import React, { FC } from 'react'
import { FaceRecognitionToggle, FaceRecognition } from '../molecules'

const FacialExpressionRatingContainer:FC = () => {
    return (
        <div>
            <FaceRecognition />
            <FaceRecognitionToggle />
        </div>
    )
}

export { FacialExpressionRatingContainer }

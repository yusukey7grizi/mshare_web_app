import React, { FC, useState } from 'react'
import { FaceRecognitionToggle, FaceRecognition } from 'components/molecules'
import { MoviePlayerState } from 'components/templates/movieDetailTemplate'

type FacialExpressionRatingContainerProps = {
  moviePlayerState: MoviePlayerState
}

const FacialExpressionRatingContainer: FC<FacialExpressionRatingContainerProps> = ({
  moviePlayerState,
}) => {
  const [isRecognitionOn, setIsRecognitionOn] = useState<boolean>(true)

  return (
    <>
      <FaceRecognition
        moviePlayerState={moviePlayerState}
        isRecognitionOn={isRecognitionOn}
      />
      <FaceRecognitionToggle
        isRecognitionOn={isRecognitionOn}
        setisRecognitionOn={setIsRecognitionOn}
      />
    </>
  )
}

export { FacialExpressionRatingContainer }

import React, { FC, useState } from 'react'
import { FaceRecognitionToggle, FaceRecognition } from 'components/molecules'
import { MoviePlayerState } from 'types'
import { Movie } from 'types/dataTypes'

type FacialExpressionRatingContainerProps = {
  moviePlayerState: MoviePlayerState
  movie: Movie
}

const FacialExpressionRatingContainer: FC<FacialExpressionRatingContainerProps> =
  ({ moviePlayerState, movie }) => {
    const [isRecognitionOn, setIsRecognitionOn] = useState<boolean>(true)

    return (
      <>
        <FaceRecognition
          moviePlayerState={moviePlayerState}
          isRecognitionOn={isRecognitionOn}
          movie={movie}
        />
        <FaceRecognitionToggle
          isRecognitionOn={isRecognitionOn}
          setisRecognitionOn={setIsRecognitionOn}
        />
      </>
    )
  }

export { FacialExpressionRatingContainer }

import React, { FC, useState } from 'react'
import { FaceRecognitionToggle, FaceRecognition } from 'components/molecules'
import { MoviePlayerState } from 'types'
import { Movie } from 'types/dataTypes'

type FacialExpressionRatingContainerProps = {
  moviePlayerState: MoviePlayerState
  movie: Movie
  grinningScore: number
  setGrinningScore: (input: number) => void
}

const FacialExpressionRatingContainer: FC<FacialExpressionRatingContainerProps> =
  ({ moviePlayerState, movie, grinningScore, setGrinningScore }) => {
    const [isRecognitionOn, setIsRecognitionOn] = useState<boolean>(true)

    return (
      <>
        <FaceRecognition
          moviePlayerState={moviePlayerState}
          isRecognitionOn={isRecognitionOn}
          movie={movie}
          grinningScore={grinningScore}
          setGrinningScore={setGrinningScore}
        />
        <FaceRecognitionToggle
          isRecognitionOn={isRecognitionOn}
          setisRecognitionOn={setIsRecognitionOn}
        />
      </>
    )
  }

export { FacialExpressionRatingContainer }

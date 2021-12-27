import React, { FC, useState } from 'react'
import { YouTubePlayer, YouTubeVideoDetails } from 'components/molecules'
import { Box } from '@mui/material'
import { MoviePlayerState } from 'types'
import { Movie } from 'types/dataTypes'
import { FacialExpressionRatingContainer } from '.'

type MovieDetailContainerProps = {
  movie: Movie
}

const MovieDetailContent: FC<MovieDetailContainerProps> = ({ movie }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })
  return (
    <Box
      component='div'
      sx={{ width: '800px', margin: 'auto', textAlign: 'left' }}
    >
      <YouTubePlayer movie={movie} setMoviePlayerState={setMoviePlayerState} />
      <YouTubeVideoDetails movie={movie} />
      <FacialExpressionRatingContainer
        moviePlayerState={moviePlayerState}
        movie={movie}
      />
    </Box>
  )
}

export { MovieDetailContent }

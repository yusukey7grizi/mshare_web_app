import React, { Dispatch, FC, SetStateAction } from 'react'
import { YouTubePlayer, YouTubeVideoDetails } from 'components/molecules'
import { Box } from '@mui/material'
import { MoviePlayerState } from 'types'
import { Movie } from 'types/dataTypes'

type MovieDetailContainerProps = {
  movie: Movie
  setMoviePlayerState: Dispatch<SetStateAction<MoviePlayerState>>
}

const MovieDetailContent: FC<MovieDetailContainerProps> = ({
  movie,
  setMoviePlayerState,
}) => {
  return (
    <Box
      component="div"
      sx={{ width: '800px', margin: 'auto', textAlign: 'left' }}
    >
      <YouTubePlayer movie={movie} setMoviePlayerState={setMoviePlayerState} />
      <YouTubeVideoDetails movie={movie} />
    </Box>
  )
}

export { MovieDetailContent }

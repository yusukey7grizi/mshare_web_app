import React, { Dispatch, FC, SetStateAction } from 'react'
import { YouTubePlayer, YouTubeVideoDetails } from 'components/molecules'
import { MovieInfo } from 'pages/movie/[id]'
import { MoviePlayerState } from 'components/templates/movieDetailTemplate'
import { Box } from '@mui/material'

type MovieDetailContainerProps = {
  movieInfo: MovieInfo
  setMoviePlayerState: Dispatch<SetStateAction<MoviePlayerState>>
}

const MovieDetailContent: FC<MovieDetailContainerProps> = ({
  movieInfo,
  setMoviePlayerState,
}) => {
  return (
    <Box
      component="div"
      sx={{ width: '800px', margin: 'auto', textAlign: 'left' }}
    >
      <YouTubePlayer
        movieInfo={movieInfo}
        setMoviePlayerState={setMoviePlayerState}
      />
      <YouTubeVideoDetails movieInfo={movieInfo} />
    </Box>
  )
}

export { MovieDetailContent }

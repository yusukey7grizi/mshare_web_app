import React, { FC, useState } from 'react'
import { MovieInfo } from 'pages/movie/[id]'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList } from 'components/organisms/searchedMovieList'
import { MuiDivider } from 'components/atoms/divider'
import { OtherMoviesTitle } from 'components/atoms/texts'

type MovieDetailsProps = {
  movieInfo: MovieInfo
}
export type MoviePlayerState = {
  playerState: YT.PlayerState
  //       UNSTARTED = -1,
  //       ENDED = 0,
  //       PLAYING = 1,
  //       PAUSED = 2,
  //       BUFFERING = 3,
  //       CUED = 5
  currentTime: number
  duration: number
}

const MovieDetailTemplate: FC<MovieDetailsProps> = ({ movieInfo }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })

  const name = 'シネマトゥデイ'

  return (
    <Bar>
      <MovieDetailContent
        movieInfo={movieInfo}
        setMoviePlayerState={setMoviePlayerState}
      />
      <OtherMoviesTitle name={name} />
      <MuiDivider />
      <SearchedMovieList />
    </Bar>
  )
}

export { MovieDetailTemplate }

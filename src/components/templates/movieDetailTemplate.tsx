import React, { FC, useState } from 'react'
import { MovieInfo } from 'pages/movie/[id]'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import { MuiDivider } from 'components/atoms/divider'
import { MovieListTitle } from 'components/atoms/texts'
import { MoviePlayerState } from 'types'

type MovieDetailsProps = {
  movieInfo: MovieInfo
}

const MovieDetailTemplate: FC<MovieDetailsProps> = ({ movieInfo }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })

  const username = 'シネマトゥデイ'

  const movie = {
    id: 1,
    userId: 'string',
    title: 'string',
    overview: 'string',
    genre: 'アクション映画',
    youtubeTitleId: 'ttybTRn0D3E',
    grinningScore: 1,
    username: 'string',
    createdAt: 'string',
  }

  return (
    <Bar>
      <MovieDetailContent
        movie={movie}
        setMoviePlayerState={setMoviePlayerState}
      />
      <MovieListTitle username={username} />
      <MuiDivider />
      <MovieList />
    </Bar>
  )
}

export { MovieDetailTemplate }

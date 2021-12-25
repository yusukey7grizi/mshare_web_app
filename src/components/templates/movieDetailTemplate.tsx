import React, { FC, useState } from 'react'
import { MovieInfo } from 'pages/movie/[id]'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList } from 'components/organisms/searchedMovieList'
import { MuiDivider } from 'components/atoms/divider'
import { OtherMoviesTitle } from 'components/atoms/texts'
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

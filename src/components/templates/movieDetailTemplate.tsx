import React, { FC, useState } from 'react'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import { MuiDivider } from 'components/atoms/divider'
import { MovieListTitle } from 'components/atoms/texts'
import { MoviePlayerState } from 'types'
import { Movie } from 'types/dataTypes'

type MovieDetailsProps = {
  movie: Movie
}

const MovieDetailTemplate: FC<MovieDetailsProps> = ({ movie }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })

  return (
    <Bar>
      <MovieDetailContent
        movie={movie}
        setMoviePlayerState={setMoviePlayerState}
      />
      <MovieListTitle username={movie.userId} />
      <MuiDivider />
      <MovieList />
    </Bar>
  )
}

export { MovieDetailTemplate }

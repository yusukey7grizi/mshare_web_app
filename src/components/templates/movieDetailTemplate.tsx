import React, { FC, useState } from 'react'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import { MuiDivider } from 'components/atoms/divider'
import { MovieListTitle } from 'components/atoms/texts'
import { Movie } from 'types/dataTypes'

type MovieDetailsProps = {
  movie: Movie
  relatedMovieList: Movie[]
}

const MovieDetailTemplate: FC<MovieDetailsProps> = ({
  movie,
  relatedMovieList,
}) => {
  return (
    <Bar>
      <MovieDetailContent movie={movie} />
      <MovieListTitle userName={movie.userName} />
      <MuiDivider />
      <MovieList movieList={relatedMovieList} />
    </Bar>
  )
}

export { MovieDetailTemplate }

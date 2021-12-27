import { Bar } from 'components/organisms'
import { SearchedMovieList } from 'components/organisms/searchedMovieList'
import React, { FC } from 'react'
import { Movie } from 'types/dataTypes'

type Props = {
  searchedMovieList: Movie[]
}

const SearchTemplate: FC<Props> = ({ searchedMovieList }) => {
  return (
    <Bar>
      <SearchedMovieList movieList={searchedMovieList} />
    </Bar>
  )
}

export { SearchTemplate }

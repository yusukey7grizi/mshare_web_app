import { Bar } from 'components/organisms'
import { SearchedMovieList } from 'components/organisms/searchedMovieList'
import React, { FC } from 'react'

const SearchTemplate: FC = () => {
  return (
    <Bar>
      <SearchedMovieList />
    </Bar>
  )
}

export { SearchTemplate }

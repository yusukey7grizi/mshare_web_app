import { Box } from '@mui/material'
import { MovieItem } from 'components/molecules'
import { AppContext } from 'contexts/appContext'
import React, { FC, useContext } from 'react'

const SearchedMovieList: FC = () => {
  const { searchedMovieList } = useContext(AppContext)
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {searchedMovieList.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />
      })}
    </Box>
  )
}

export { SearchedMovieList }

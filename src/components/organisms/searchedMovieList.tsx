import { Box } from '@mui/material'
import { MovieItem } from 'components/molecules'
import { AppContext } from 'contexts/appContext'
import React, { FC, useContext } from 'react'

const SearchedMovieList: FC = () => {
  const { searchedMovieList } = useContext(AppContext)
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {searchedMovieList.map(({ id, youtubeTitleId, username, title }) => {
        return (
          <MovieItem
            id={id}
            key={id}
            youtubeTitleId={youtubeTitleId}
            username={username}
            title={title}
          />
        )
      })}
    </Box>
  )
}

export { SearchedMovieList }

import { Box } from '@mui/material'
import { MuiDivider } from 'components/atoms/divider'
import { EmailText, MovieListTitle, UsernameText } from 'components/atoms/texts'
import { Bar } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import React, { useState, FC } from 'react'
import { MoviePlayerState } from 'types'
import { Movie } from 'types/dataTypes'

type Props = {
  movieList: Movie[]
  userName: string
  email: string
}
const ProfileTemplate: FC<Props> = ({ movieList, userName, email }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })

  return (
    <Bar>
      <Box sx={{ width: '50rem', margin: 'auto' }}>
        <UsernameText userName={userName} />
        <EmailText email={email} />
      </Box>
      <MovieListTitle />
      <MuiDivider />
      <MovieList movieList={movieList} />
    </Bar>
  )
}

export { ProfileTemplate }

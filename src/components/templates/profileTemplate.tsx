import { MuiDivider } from 'components/atoms/divider'
import { EmailText, MovieListTitle, UsernameText } from 'components/atoms/texts'
import { Bar } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import React, { useState } from 'react'
import { MoviePlayerState } from 'types'

const ProfileTemplate = () => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })

  const userName = 'Hiroki'
  const email = 'hirokihanada@gmail.com'

  return (
    <Bar>
      <UsernameText userName={userName} />
      <EmailText email={email} />
      <MovieListTitle />
      <MuiDivider />
      <MovieList />
    </Bar>
  )
}

export { ProfileTemplate }

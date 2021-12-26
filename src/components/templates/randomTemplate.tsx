import { Box } from '@mui/material'
import { FormSubmitButton } from 'components/atoms/buttons'
import { MuiDivider } from 'components/atoms/divider'
import { MovieListTitle } from 'components/atoms/texts'
import { GenreField } from 'components/molecules'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import React, { FC, useState } from 'react'
import {
  MoviePlayerState,
  MuiAutoCompleteOnChangeEvent,
  MuiOnClickEvent,
} from 'types'
import { Movie } from 'types/dataTypes'

type Props = {
  onSubmit: (e: MuiOnClickEvent) => void
  movie: Movie | null
}
const RandomTemplate: FC<Props> = ({ onSubmit, movie }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })
  const [genre, setGenre] = useState('')

  const handleOnChangeGenre = (
    event: MuiAutoCompleteOnChangeEvent,
    value: string | null,
  ) => {
    if (value) {
      setGenre(value)
    } else {
      setGenre('')
    }
  }

  return (
    <Bar>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={onSubmit}
      >
        <GenreField onChange={handleOnChangeGenre} />
        <FormSubmitButton text="ガチャる！" />
      </Box>
      <MuiDivider />
      {movie && (
        <>
          <MovieDetailContent
            movie={movie}
            setMoviePlayerState={setMoviePlayerState}
          />
          <MovieListTitle username={movie.username} />
          <MuiDivider />
          <MovieList />
        </>
      )}
    </Bar>
  )
}

export { RandomTemplate }

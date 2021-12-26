import { Box } from '@mui/material'
import { RandomButton } from 'components/atoms/buttons'
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
import { motion } from 'framer-motion'
import { RandomTitle } from 'components/atoms/titles'

type Props = {
  onSubmit: (e: MuiOnClickEvent) => void
  movie: Movie | null
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void
}

const RandomTemplate: FC<Props> = ({ onSubmit, movie, onChange }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  })

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
        <RandomTitle />
        <GenreField onChange={onChange} />
        <RandomButton />
      </Box>
      <MuiDivider />
      <Box sx={{ height: '65rem', overflow: 'visible' }}>
        {movie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <MovieDetailContent
              movie={movie}
              setMoviePlayerState={setMoviePlayerState}
            />
            <MovieListTitle userName={movie.userName} />
            <MuiDivider />
            <MovieList />
          </motion.div>
        )}
      </Box>
    </Bar>
  )
}

export { RandomTemplate }

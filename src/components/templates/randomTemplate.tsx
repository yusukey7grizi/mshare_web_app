import { Box } from '@mui/material'
import { RandomButton } from 'components/atoms/buttons'
import { MuiDivider } from 'components/atoms/divider'
import { MovieListTitle } from 'components/atoms/texts'
import { GenreField } from 'components/molecules'
import { Bar, MovieDetailContent } from 'components/organisms'
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList'
import React, { FC } from 'react'
import {
  MuiAutoCompleteOnChangeEvent,
  MuiOnClickEvent,
} from 'types'
import { Movie } from 'types/dataTypes'
import { motion } from 'framer-motion'
import { RandomTitle } from 'components/atoms/titles'

type Props = {
  relatedMovieList: Movie[]
  onSubmit: (e: MuiOnClickEvent) => void
  movie: Movie | null
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void
}

const RandomTemplate: FC<Props> = ({
  onSubmit,
  movie,
  onChange,
  relatedMovieList,
}) => {

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

      {movie && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <MovieDetailContent
            movie={movie}
          />
          <MovieListTitle userName={movie.userName} />
          <MuiDivider />
          <MovieList movieList={relatedMovieList} />
        </motion.div>
      )}
    </Bar>
  )
}

export { RandomTemplate }

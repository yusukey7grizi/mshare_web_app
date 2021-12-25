import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Bar } from 'components/organisms'
import { MovieForm } from 'components/organisms/movieForm'

const PostMovieTemplate: FC = () => {
  return (
    <Bar>
      <Typography sx={{ p: 5 }} variant="h4">
        自分だけのオリジナル映画を共有しよう
      </Typography>
      <MovieForm />
    </Bar>
  )
}

export { PostMovieTemplate }

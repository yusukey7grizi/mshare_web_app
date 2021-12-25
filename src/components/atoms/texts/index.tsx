import { Typography } from '@mui/material'
import React, { FC } from 'react'

type OtherMoviesTitleProps = { name: string }

const OtherMoviesTitle: FC<OtherMoviesTitleProps> = ({ name }) => {
  return (
    <Typography
      sx={{ pt: '10rem', textAlign: 'center' }}
      variant="h4"
    >{`${name} さんのその他の作品`}</Typography>
  )
}

export { OtherMoviesTitle }

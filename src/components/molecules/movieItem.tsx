import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React, { FC, Fragment } from 'react'

type MovieItemProps = {
  key: string
  id: string
  img: string
  username: string
  title: string
}

const MovieItem: FC<MovieItemProps> = ({ id, img, username, title }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Card component={Fragment}>
        <CardActionArea
          sx={{ width: '16rem', height: '12.8rem' }}
          href={`/movie/${id}`}
        >
          <CardMedia component="img" image={img} />
          <CardContent>
            <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Typography sx={{ fontSize: '0.5rem' }}>{username}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export { MovieItem }
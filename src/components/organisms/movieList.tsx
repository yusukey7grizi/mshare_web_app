import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { MovieItem } from 'components/molecules'
import React, { FC, Fragment } from 'react'

const MovieList: FC = () => {
  const data = [
    {
      id: '1',
      img:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg',
      username: 'username 1',
      title: 'title 1',
    },
    {
      id: '2',
      img:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg',
      username: 'username 2',
      title: 'title 2',
    },
    {
      id: '3',
      img:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg',
      username: 'username 3',
      title: 'title 3',
    },
    {
      id: '4',
      img:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg',
      username: 'username 4',
      title: 'title 4',
    },
    {
      id: '5',
      img:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg',
      username: 'username 5',
      title: 'title 5',
    },
  ]
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      }}
    >
      {data.map(({ id, img, username, title }) => {
        return (
          <MovieItem
            id={id}
            key={id}
            img={img}
            username={username}
            title={title}
          />
        )
      })}
    </Box>
  )
}

export { MovieList }

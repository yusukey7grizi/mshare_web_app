import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { ShowMoreButton } from 'components/atoms/buttons'
import { Movie } from 'types/dataTypes'

type YouTubeVideoDetailsProps = {
  movie: Movie
}

const YouTubeVideoDetails: FC<YouTubeVideoDetailsProps> = ({ movie }) => {
  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false)
  const { overview, title, createdAt, username } = movie

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 'bold', pt: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {username}
      </Typography>
      <Typography
        gutterBottom
        variant="subtitle2"
      >{`${createdAt}    ニヤッと度: 50%`}</Typography>
      {isDetailOpened && (
        <Typography variant="subtitle2">{`概要： ${overview}`}</Typography>
      )}
      <ShowMoreButton
        onClick={() => {
          setIsDetailOpened(!isDetailOpened)
        }}
        isDetailOpened={isDetailOpened}
      />
    </>
  )
}

export { YouTubeVideoDetails }

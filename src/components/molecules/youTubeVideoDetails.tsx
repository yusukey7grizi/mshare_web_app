import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { ShowMoreButton } from 'components/atoms/buttons'
import { Movie } from 'types/dataTypes'

type YouTubeVideoDetailsProps = {
  movie: Movie
}

const YouTubeVideoDetails: FC<YouTubeVideoDetailsProps> = ({ movie }) => {
  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false)
  const { overview, title, createdAt, userName, grinningScore } = movie

  const today = new Date(createdAt)
  const date = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  const createdDate = `${year}年${month}月${date}日 `

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 'bold', pt: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {userName}
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        {createdDate}
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        ニヤッと回数：
        {grinningScore ? `${grinningScore} 回` : '0回'}
      </Typography>
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

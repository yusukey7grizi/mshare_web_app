import React, { FC, useState } from 'react'
import { MovieInfo } from 'pages/movie/[id]'
import { Box, Typography } from '@mui/material'
import { ShowMoreButton } from 'components/atoms/buttons'

type YouTubeVideoDetailsProps = {
  movieInfo: MovieInfo
}

const YouTubeVideoDetails: FC<YouTubeVideoDetailsProps> = ({ movieInfo }) => {
  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false)
  const { description, title, uploadDate, uploadedBy } = movieInfo

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 'bold', pt: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {uploadedBy}
      </Typography>
      <Typography
        gutterBottom
        variant="subtitle2"
      >{`${uploadDate}    ニヤッと度: 50%`}</Typography>
      {isDetailOpened && (
        <Typography variant="subtitle2">{`概要： ${description}`}</Typography>
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

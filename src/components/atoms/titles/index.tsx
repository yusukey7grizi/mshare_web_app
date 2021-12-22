import { Typography } from '@mui/material'
import React, { FC } from 'react'

// const Index = () => {
//   return <div></div>
// }

type SubtitleProps = {
  text: string
}

const Subtitle: FC<SubtitleProps>= ({text}) => {
  return (
    <Typography 
      variant='h3'>
      { text }
    </Typography>
  )
}

export {  Subtitle }
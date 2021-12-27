import { Typography } from '@mui/material'
import React, { FC } from 'react'

type SubtitleProps = {
  text: string
}

const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <Typography variant="h3">{text}</Typography>
}

const SideBarTitle: FC = () => {
  return (
    <Typography
      sx={{ marginTop: '20px', fontWeight: 'bold' }}
      align="center"
      variant="h4"
    >
      MShare
    </Typography>
  )
}

const AuthTitle: FC = () => {
  return (
    <Typography sx={{ marginTop: '50px' }} align="center" variant="h2">
      MShare へようこそ
    </Typography>
  )
}

const RandomTitle: FC = () => {
  return (
    <Typography
      sx={{ pt: '50px', pb: '7rem', fontWeight: 'bold' }}
      align="center"
      variant="h5"
    >
      ランダムガチャ検索で新しい映画と出会おう！
    </Typography>
  )
}

export { Subtitle, SideBarTitle, AuthTitle, RandomTitle }

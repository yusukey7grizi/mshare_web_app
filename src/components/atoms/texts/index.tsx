import { Typography } from '@mui/material'
import React, { FC } from 'react'

type MovieListTitleProps = { userName?: string }
type UsernameTextProps = { userName: string }
type EmailTextProps = { email: string }

const MovieListTitle: FC<MovieListTitleProps> = ({ userName }) => {
  return (
    <Typography sx={{ pt: '10rem', textAlign: 'center' }} variant="h4">
      {userName ? `${userName} さんのその他の作品` : `投稿した映画一覧`}
    </Typography>
  )
}

const UsernameText: FC<UsernameTextProps> = ({ userName }) => {
  return (
    <Typography sx={{ pl: '8rem', fontWeight: 'bold' }} variant="h4">
      ユーザーネーム: {userName}
    </Typography>
  )
}

const EmailText: FC<EmailTextProps> = ({ email }) => {
  return (
    <Typography sx={{ pl: '9rem' }} variant="subtitle1">
      メールアドレス: {email}
    </Typography>
  )
}

export { MovieListTitle, UsernameText, EmailText }

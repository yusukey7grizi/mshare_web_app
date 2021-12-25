import { Typography } from '@mui/material'
import React, { FC } from 'react'

type MovieListTitleProps = { username?: string }
type UsernameTextProps = { username: string }
type EmailTextProps = { email: string }

const MovieListTitle: FC<MovieListTitleProps> = ({ username }) => {
  return (
    <Typography sx={{ pt: '10rem', textAlign: 'center' }} variant="h4">
      {username ? `${username} さんのその他の作品` : `投稿した映画一覧`}
    </Typography>
  )
}

const UsernameText: FC<UsernameTextProps> = ({ username }) => {
  return (
    <Typography
      sx={{ textAlign: 'left', pl: '8rem', fontWeight: 'bold' }}
      variant="h1"
    >
      {username}
    </Typography>
  )
}

const EmailText: FC<EmailTextProps> = ({ email }) => {
  return (
    <Typography sx={{ textAlign: 'left', pl: '9rem' }} variant="subtitle1">
      {email}
    </Typography>
  )
}

export { MovieListTitle, UsernameText, EmailText }

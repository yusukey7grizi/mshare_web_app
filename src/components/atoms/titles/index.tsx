import { Typography } from '@mui/material'
import { FC } from 'react'

const SideBarTitle: FC = () => {
  return (
    <Typography sx={{ marginTop: '20px' }} align="center" variant="h4">
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

export { SideBarTitle, AuthTitle }

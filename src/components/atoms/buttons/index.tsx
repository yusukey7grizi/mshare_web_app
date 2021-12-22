import React, { FC } from 'react'
import { Link, Button, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

const LogOutButton: FC = () => {
  return (
    <Link component={Button} underline="none">
      <LogoutIcon />
      <Typography>ログアウト</Typography>
    </Link>
  )
}

export { LogOutButton }

import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MuiDivider } from 'components/atoms/divider'
import { Bar } from 'components/organisms'
import { MovieList } from 'components/organisms/movieList'
import React, { FC } from 'react'

const Dashboard: FC = () => {
  return (
    <Bar>
      <Typography variant="h5">ホラー映画</Typography>
      <MovieList />
      <MuiDivider />
      <Typography variant="h5">アクション映画</Typography>
      <MovieList />
      <MuiDivider />
      <Typography variant="h5">恋愛映画</Typography>
      <MovieList />
      <MuiDivider />
      <Typography variant="h5">ミステリー映画</Typography>
      <MovieList />
      <MuiDivider />
      <Typography variant="h5">ファンタジー映画</Typography>
      <MovieList />
      <MuiDivider />
      <Typography variant="h5">アドベンチャー映画</Typography>
      <MovieList />
      <MuiDivider />
      <Typography variant="h5">その他</Typography>
      <MovieList />
    </Bar>
  )
}

export { Dashboard }

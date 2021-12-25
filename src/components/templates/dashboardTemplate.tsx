import { Typography } from '@mui/material'
import { MuiDivider } from 'components/atoms/divider'
import { Bar } from 'components/organisms'
import { HomeMovieList } from 'components/organisms/movieList'
import React, { FC } from 'react'

const DashboardTemplate: FC = () => {
  return (
    <Bar>
      <Typography variant="h5">アクション映画</Typography>
      <HomeMovieList />
      <MuiDivider />
      <Typography variant="h5">ホラー映画</Typography>
      <HomeMovieList />
      <MuiDivider />
      <Typography variant="h5">ファンタジー映画</Typography>
      <HomeMovieList />
      <MuiDivider />
      <Typography variant="h5">アドベンチャー映画</Typography>
      <HomeMovieList />
      <MuiDivider />
      <Typography variant="h5">ミステリー映画</Typography>
      <HomeMovieList />
      <MuiDivider />
      <Typography variant="h5">恋愛映画</Typography>
      <HomeMovieList />
      <MuiDivider />
      <Typography variant="h5">その他</Typography>
      <HomeMovieList />
    </Bar>
  )
}

export { DashboardTemplate }

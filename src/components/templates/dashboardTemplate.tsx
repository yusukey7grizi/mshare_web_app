import { Typography } from '@mui/material'
import { MuiDivider } from 'components/atoms/divider'
import { Bar } from 'components/organisms'
import { HomeMovieList } from 'components/organisms/movieList'
import { AppContext } from 'contexts/appContext'
import React, { FC, useContext } from 'react'

const DashboardTemplate: FC = () => {
  const { movieList } = useContext(AppContext)

  const actionMovieList = movieList.filter(({ genre }) => {
    return genre === 'アクション映画'
  })

  const horrorMovieList = movieList.filter(({ genre }) => {
    return genre === 'ホラー映画'
  })

  const fantasyMovieList = movieList.filter(({ genre }) => {
    return genre === 'ファンタジー映画'
  })

  const adventureMovieList = movieList.filter(({ genre }) => {
    return genre === 'アドベンチャー映画'
  })

  const mysteryMovieList = movieList.filter(({ genre }) => {
    return genre === 'ミステリー映画'
  })

  const romanceMovieList = movieList.filter(({ genre }) => {
    return genre === '恋愛映画'
  })

  const otherMovieList = movieList.filter(({ genre }) => {
    return genre === 'その他'
  })

  return (
    <Bar>
      <Typography variant="h5">アクション映画</Typography>
      <HomeMovieList movieList={actionMovieList} />
      <MuiDivider />
      <Typography variant="h5">ホラー映画</Typography>
      <HomeMovieList movieList={horrorMovieList} />
      <MuiDivider />
      <Typography variant="h5">ファンタジー映画</Typography>
      <HomeMovieList movieList={fantasyMovieList} />
      <MuiDivider />
      <Typography variant="h5">アドベンチャー映画</Typography>
      <HomeMovieList movieList={adventureMovieList} />
      <MuiDivider />
      <Typography variant="h5">ミステリー映画</Typography>
      <HomeMovieList movieList={mysteryMovieList} />
      <MuiDivider />
      <Typography variant="h5">恋愛映画</Typography>
      <HomeMovieList movieList={romanceMovieList} />
      <MuiDivider />
      <Typography variant="h5">その他</Typography>
      <HomeMovieList movieList={otherMovieList} />
    </Bar>
  )
}

export { DashboardTemplate }

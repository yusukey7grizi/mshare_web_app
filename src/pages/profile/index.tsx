import { ProfileTemplate } from 'components/templates/profileTemplate'
import { LogInCheck } from 'contexts/authContext'
import React from 'react'

const Profile = () => {
  const movieList = [
    {
      id: 10,
      userId: '20',
      title: 'sample',
      overview: 'sample',
      genre: 'ホラー映画',
      youtubeTitleId: '1vKiPwEYbyk',
      grinningScore: 12,
      userName: 'username',
      createdAt: '2021-12-27 02:52:40.603295+00',
    },
  ]

  return (
    <LogInCheck>
      <ProfileTemplate movieList={movieList} />
    </LogInCheck>
  )
}

export default Profile

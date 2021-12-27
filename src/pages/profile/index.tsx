import { ProfileTemplate } from 'components/templates/profileTemplate'
import { LogInCheck } from 'contexts/authContext'
import React from 'react'

const Profile = () => {
  return (
    <LogInCheck>
      <ProfileTemplate />
    </LogInCheck>
  )
}

export default Profile

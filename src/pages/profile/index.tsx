import { MuiCircularProgress } from 'components/atoms/circularProgress'
import { ProfileTemplate } from 'components/templates/profileTemplate'
import { useAuth } from 'contexts/authContext'
import React, { useEffect, useState } from 'react'
import { Movie } from 'types/dataTypes'

const Profile = () => {
  const auth = useAuth()

  const [movieList, setMovieList] = useState<Movie[]>([])

  useEffect(() => {
    const fetchUserMovies = async () => {
      const res = await fetch(
        `http://localhost:8000/movies?userId=${auth.user?.uid}`,
      )
      const data = await res.json()
      setMovieList(data)
    }
    if (auth.user) {
      fetchUserMovies()
    }
  })

  return (
    <ProfileTemplate
      email={auth.user?.email || ''}
      userName={auth.user?.displayName || ''}
      movieList={movieList}
    />
  )
}

export default Profile

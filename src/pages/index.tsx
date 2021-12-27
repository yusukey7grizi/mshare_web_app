// if logged in, show log in or register
// else dashboard
import { DashboardTemplate } from 'components/templates/dashboardTemplate'
import { AppContext } from 'contexts/appContext'
import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'

const Home: NextPage = () => {
  const { setMovieList, movieList } = useContext(AppContext)

  useEffect(() => {
    const fetchAllMovies = async () => {
      const res = await fetch('http://localhost:8000/movies')
      const data = await res.json()
      setMovieList(data)
    }
    if (movieList.length === 0) {
      fetchAllMovies()
    }
  }, [])

  return <DashboardTemplate />
}

export default Home

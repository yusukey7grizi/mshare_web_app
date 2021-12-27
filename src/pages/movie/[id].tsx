// show youtube video with iframe
// show video details

import React, { FC, useEffect, useState } from 'react'
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate'
import { useRouter } from 'next/router'
import { Movie } from 'types/dataTypes'

const MovieDetail: FC = () => {
  const router = useRouter()

  const [movie, setMovie] = useState<Movie>({} as Movie)

  useEffect(() => {
    const { id } = router.query
    // api fetching here
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/movies/${id}`)
        const data: Movie = await res.json()
        console.log(data)
        setMovie(data)
      } catch (error) {
        console.log(error)
      }
    }
    if (id) fetchData()
  }, [router])

  return <MovieDetailTemplate movie={movie} />
}

export default MovieDetail

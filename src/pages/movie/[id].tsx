// show youtube video with iframe
// show video details

import React, { FC, useEffect, useState } from 'react'
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate'
import { useRouter } from 'next/router'
import { Movie } from 'types/dataTypes'

const MovieDetail: FC = () => {
  const router = useRouter()

  const [movie, setMovie] = useState<Movie>({} as Movie)
  const [relatedMovieList, setRelatedMovieList] = useState<Movie[]>([])
  useEffect(() => {
    const { id } = router.query
    // api fetching here
    const fetchOneMovie = async () => {
      try {
        const res = await fetch(`http://localhost:8000/movies/${id}`)
        const data: Movie = await res.json()
        setMovie(data)
        const { userId } = data
        const relatedMoviesRes = await fetch(
          `http://localhost:8000/movies?userId=${userId}`,
        )
        const relatedMoviesData = await relatedMoviesRes.json()
        setRelatedMovieList(relatedMoviesData)
      } catch (error) {
        console.log(error)
      }
    }
    if (id) fetchOneMovie()
  }, [router])

  return (
    <MovieDetailTemplate relatedMovieList={relatedMovieList} movie={movie} />
  )
}

export default MovieDetail

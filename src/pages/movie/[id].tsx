// show youtube video with iframe
// show video details

import React, { FC, useEffect, useState } from 'react'
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate'

const MovieDetail: FC = () => {
  const movie = {
    id: 1,
    userId: 'string',
    title: 'string',
    overview: 'string',
    genre: 'アクション映画',
    youtubeTitleId: 'ttybTRn0D3E',
    grinningScore: 1,
    username: 'string',
    createdAt: 'string',
  }

  useEffect(() => {
    // api fetching here
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/movies/random')
        const data = await res.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    // dummy data
  }, [])

  return <MovieDetailTemplate movie={movie} />
}

export default MovieDetail

import { RandomTemplate } from 'components/templates/randomTemplate'
import React, { useState } from 'react'
import { Movie } from 'types/dataTypes'

const Random = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)

  const getRandomMovieHandler = async () => {
    const res = await fetch('http://localhost:8000/movies/random')
    const data = await res.json()
    setRandomMovie(data)
  }
  return (
    <RandomTemplate
      randomMovie={randomMovie}
      onSubmit={getRandomMovieHandler}
    />
  )
}

export default Random

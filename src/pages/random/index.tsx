import { RandomTemplate } from 'components/templates/randomTemplate'
import React, { useState } from 'react'
import { MuiOnClickEvent } from 'types'
import { Movie } from 'types/dataTypes'

const Random = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)

  const getRandomMovieHandler = async (e: MuiOnClickEvent) => {
    e.preventDefault()
    setRandomMovie(null)
    const res = await fetch('http://localhost:8000/movies/random')
    const data = await res.json()
    setRandomMovie(data)
  }
  return <RandomTemplate movie={randomMovie} onSubmit={getRandomMovieHandler} />
}

export default Random

import { RandomTemplate } from 'components/templates/randomTemplate'
import React, { useState } from 'react'
import { MuiAutoCompleteOnChangeEvent, MuiOnClickEvent } from 'types'
import { Movie } from 'types/dataTypes'

const Random = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const [genre, setGenre] = useState('')

  const getRandomMovieHandler = async (e: MuiOnClickEvent) => {
    e.preventDefault()
    setRandomMovie(null)
    const res = await fetch(
      `http://localhost:8000/movies/random?genre=${genre}`,
    )
    const data = await res.json()
    setRandomMovie(data)
  }

  const handleOnChangeGenre = (
    event: MuiAutoCompleteOnChangeEvent,
    value: string | null,
  ) => {
    if (value) {
      setGenre(value)
    }
  }

  return (
    <RandomTemplate
      onChange={handleOnChangeGenre}
      movie={randomMovie}
      onSubmit={getRandomMovieHandler}
    />
  )
}

export default Random

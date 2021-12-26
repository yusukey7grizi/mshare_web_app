import { SearchTemplate } from 'components/templates/searchTemplate'
import { AppContext } from 'contexts/appContext'
import { useRouter } from 'next/router'
import React, { FC, useContext, useEffect } from 'react'

const Search: FC = () => {
  const router = useRouter()
  const { setSearchedMovieList } = useContext(AppContext)
  const { input, useCase } = router.query
  const isTitle = useCase === 'title'

  useEffect(() => {
    const fetchPartialMovies = async () => {
      const url = isTitle
        ? `http://localhost:8000/movies?title=${input}`
        : `http://localhost:8000/movies?genre=${input}`

      const res = await fetch(url)
      const data = await res.json()
      setSearchedMovieList(data)
    }
    fetchPartialMovies()
  }, [input])

  return <SearchTemplate />
}

export default Search

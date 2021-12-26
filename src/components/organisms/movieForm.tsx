import React, { FC, FormEvent, useContext } from 'react'
import { Box } from '@mui/material'
import { FormSubmitButton } from 'components/atoms/buttons'
import {
  DescriptionField,
  GenreField,
  YoutubeUrlField,
} from 'components/molecules'
import { TitleField } from 'components/molecules/titleField'
import { AppContext } from 'contexts/appContext'
import {
  CreateMovieInput,
  MuiAutoCompleteOnChangeEvent,
  MuiOnChangeEvent,
} from 'types'
import { useAuth } from 'contexts/authContext'
import { useRouter } from 'next/router'

type CreateMovieFormInputTypes =
  | 'title'
  | 'overview'
  | 'youtubeLinkUrl'
  | 'genre'

interface PostMovieBody {
  title: string
  overview: string
  userId: string
  userName: string
  genre: string
  youtubeTitleId: string
}

const MovieForm: FC = () => {
  const { createMovieInput, setCreateMovieInput } = useContext(AppContext)
  const auth = useAuth()
  const router = useRouter()

  const createOnChangeHandler = (formType: CreateMovieFormInputTypes) => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      createMovieInput[formType] = value
      setCreateMovieInput(createMovieInput)
    }
  }

  const autoCompleteOnChangeHandler = (
    event: MuiAutoCompleteOnChangeEvent,
    value: string | null
  ) => {
    if (!value) {
      return
    }
    const updatedInput = createMovieInput
    updatedInput['genre'] = value
    setCreateMovieInput({ ...createMovieInput, ...updatedInput })
  }

  const moviePostHandler = async (event: FormEvent) => {
    event.preventDefault()

    const youtubeUrlParams = new URLSearchParams(
      createMovieInput.youtubeLinkUrl
    )
    const youtubeTitleId = youtubeUrlParams.get('v')

    if (!(auth.user?.uid && auth.user?.displayName && youtubeTitleId)) return

    const data: PostMovieBody = {
      title: createMovieInput.title,
      overview: createMovieInput.overview,
      userId: auth.user.uid,
      userName: auth.user.displayName,
      genre: createMovieInput.genre,
      youtubeTitleId: youtubeTitleId,
    }

    const res = await fetch('localhost:8000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      router.push('/')
    } else {
      router.push('/movie/post')
    }
  }

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={(e: FormEvent) => moviePostHandler(e)}
    >
      <TitleField onChange={createOnChangeHandler('title')} />
      <DescriptionField onChange={createOnChangeHandler('overview')} />
      <GenreField onChange={autoCompleteOnChangeHandler} />
      <YoutubeUrlField onChange={createOnChangeHandler('youtubeLinkUrl')} />
      <FormSubmitButton text='作成' />
    </Box>
  )
}

export { MovieForm }

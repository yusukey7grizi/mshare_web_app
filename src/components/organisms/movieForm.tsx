import React, { FC, useContext } from 'react'
import { Box } from '@mui/material'
import { FormSubmitButton } from 'components/atoms/buttons'
import {
  DescriptionField,
  GenreField,
  YoutubeUrlField,
} from 'components/molecules'
import { TitleField } from 'components/molecules/titleField'
import { AppContext } from 'contexts/appContext'
import { MuiAutoCompleteOnChangeEvent, MuiOnChangeEvent } from 'types'

type CreateMovieFormInputTypes =
  | 'title'
  | 'overview'
  | 'youtubeLinkUrl'
  | 'genre'

const MovieForm: FC = () => {
  const { createMovieInput, setCreateMovieInput } = useContext(AppContext)

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

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
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

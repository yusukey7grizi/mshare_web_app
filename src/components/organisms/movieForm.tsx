import React, { FC } from 'react'
import { Box } from '@mui/material'
import { FormSubmitButton } from 'components/atoms/buttons'
import {
  DescriptionField,
  GenreField,
  YoutubeUrlField,
} from 'components/molecules'
import { TitleField } from 'components/molecules/titleField'

const MovieForm: FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TitleField />
      <DescriptionField />
      <GenreField />
      <YoutubeUrlField />
      <FormSubmitButton text="作成" />
    </Box>
  )
}

export { MovieForm }

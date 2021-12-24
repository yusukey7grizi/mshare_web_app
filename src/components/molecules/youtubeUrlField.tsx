import { FormHelperText, Typography } from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import { MovieFormTextField } from 'components/atoms/textFields'
import React, { FC } from 'react'

const YoutubeUrlField: FC = () => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>YouTube URL</Typography>
      <MovieFormTextField
        type="url"
        error={false}
        placeholder="YouTube URLを入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        YouTube URLを入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

export { YoutubeUrlField }

import { FormHelperText, Typography } from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import { MovieFormTextField } from 'components/atoms/textFields'
import React, { FC } from 'react'

const TitleField: FC = () => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>タイトル</Typography>
      <MovieFormTextField
        type="text"
        error={false}
        placeholder="タイトルを入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        タイトルを入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

export { TitleField }

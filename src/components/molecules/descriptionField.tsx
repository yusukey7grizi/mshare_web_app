import { FormHelperText, Typography } from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import { MovieFormTextField } from 'components/atoms/textFields'
import React, { FC } from 'react'

const DescriptionField: FC = () => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>概要</Typography>
      <MovieFormTextField
        type="text"
        error={false}
        placeholder="概要を入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        概要を入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

export { DescriptionField }

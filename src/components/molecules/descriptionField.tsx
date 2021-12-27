import { FormHelperText, Typography } from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import { MovieFormTextField } from 'components/atoms/textFields'
import React, { FC } from 'react'
import { MuiOnChangeEvent } from 'types'

type DescriptionFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void
}

const DescriptionField: FC<DescriptionFieldProps> = ({ onChange }) => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>概要</Typography>
      <MovieFormTextField
        type="text"
        error={false}
        placeholder="概要を入力してください"
        onChange={onChange}
      />
    </FormTextFieldContainer>
  )
}

export { DescriptionField }

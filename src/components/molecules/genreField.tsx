import {
  Autocomplete,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import React, { FC } from 'react'
import { MuiAutoCompleteOnChangeEvent } from 'types'

type GenreFieldProps = {
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void
}

const GenreField: FC<GenreFieldProps> = ({ onChange }) => {
  const options = ['アクション', 'ロマンス', 'ホラー', 'キッズ']

  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>ジャンル</Typography>
      <Autocomplete
        sx={{ width: '650px' }}
        options={options}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            required
            placeholder="ジャンルを選択してください"
            {...params}
            variant="standard"
          />
        )}
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        ジャンルを選択してください
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

export { GenreField }

import { FC } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type TextFieldProps = {
  placeholder: string
  error: boolean
  type: 'text' | 'email' | 'password'
}

const SearchField: FC = () => {
  return (
    <TextField
      placeholder="映画を検索する"
      variant="filled"
      sx={{ width: '750px' }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

const AuthFormTextField: FC<TextFieldProps> = ({ placeholder, error }) => {
  return (
    <TextField
      type="te"
      error={error}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      sx={{ width: '450px' }}
      variant="standard"
    />
  )
}

export { SearchField, AuthFormTextField }

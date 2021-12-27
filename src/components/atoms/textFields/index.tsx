import { FC, KeyboardEvent } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types'

type TextFieldProps = {
  placeholder: string
  error: boolean
  type: 'text' | 'email' | 'password' | 'url'
  onChange: (input: MuiOnChangeEvent) => void
}
type SearchFieldProps = {
  onKeyPress: ({ key }: MuiKeyBoardEvent) => void
  onChange: ({ target: { value } }: MuiOnChangeEvent) => void
}

const SearchField: FC<SearchFieldProps> = ({ onKeyPress, onChange }) => {
  return (
    <TextField
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder='映画を検索する'
      variant='filled'
      sx={{ width: '750px' }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

const AuthFormTextField: FC<TextFieldProps> = ({
  placeholder,
  error,
  type,
  onChange,
}) => {
  return (
    <TextField
      required
      type={type}
      error={error}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      sx={{ width: '450px' }}
      variant='standard'
      onChange={onChange}
    />
  )
}

const MovieFormTextField: FC<TextFieldProps> = ({
  placeholder,
  error,
  type,
  onChange,
}) => {
  return (
    <TextField
      required
      type={type}
      error={error}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      sx={{ width: '650px' }}
      variant='standard'
      onChange={onChange}
    />
  )
}

export { SearchField, AuthFormTextField, MovieFormTextField }

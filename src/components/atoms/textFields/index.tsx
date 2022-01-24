import { FC } from 'react';
import { InputAdornment, TextField, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types';

type TextFieldProps = {
  placeholder: string;
  error: boolean;
  type: 'text' | 'email' | 'password' | 'url';
  onChange: (input: MuiOnChangeEvent) => void;
};

type SearchFieldProps = {
  onKeyPress: ({ key }: MuiKeyBoardEvent) => void;
  onChange: ({ target: { value } }: MuiOnChangeEvent) => void;
};

const SearchField: FC<SearchFieldProps> = ({ onKeyPress, onChange }) => {
  return (
    <TextField
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder='映画を検索する'
      variant='filled'
      sx={{ width: '40rem', pr: 2, pl: 2 }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

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
      sx={{ width: '32rem' }}
      variant='standard'
      onChange={onChange}
    />
  );
};

const MovieFormTextField: FC<TextFieldProps> = ({
  placeholder,
  error,
  type,
  onChange,
}) => {
  const isLargeScreenSize = useMediaQuery('(min-width:600px)');

  return (
    <TextField
      autoComplete='off'
      sx={isLargeScreenSize ? { width: '30rem' } : { width: '15rem' }}
      required
      type={type}
      error={error}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      variant='standard'
      onChange={onChange}
    />
  );
};

export { SearchField, AuthFormTextField, MovieFormTextField };

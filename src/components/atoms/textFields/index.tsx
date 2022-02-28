import { FC } from 'react';
import { InputAdornment, TextField, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types';
import { ScreenSize } from 'components/constants';

type TextFieldProps = {
  placeholder: string;
  error: boolean;
  type: 'text' | 'email' | 'password' | 'url';
  onChange: (input: MuiOnChangeEvent) => void;
};

type SearchFieldProps = {
  onKeyPress: ({ key }: MuiKeyBoardEvent) => void;
  onChange: ({ target: { value } }: MuiOnChangeEvent) => void;
  defaultValue: string;
};

const SearchField: FC<SearchFieldProps> = ({
  onKeyPress,
  onChange,
  defaultValue,
}) => {
  return (
    <TextField
      defaultValue={defaultValue}
      autoComplete='off'
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder='映画を検索する'
      variant='filled'
      sx={{ width: '30rem', pr: 2, pl: 2 }}
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
      fullWidth
      autoComplete='off'
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

const MovieFormTextField: FC<TextFieldProps> = ({
  placeholder,
  error,
  type,
  onChange,
}) => {
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);

  return (
    <TextField
      autoComplete='off'
      sx={isLargerThanIpad ? { width: '30rem' } : { width: '100%' }}
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

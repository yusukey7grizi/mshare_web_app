import { FC } from 'react';
import { InputAdornment, TextField, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types';
import { BasePixel, FontSize, ScreenSize } from 'components/constants';

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
  width: number;
};

const SearchField: FC<SearchFieldProps> = ({
  onKeyPress,
  onChange,
  defaultValue,
  width,
}) => {
  const styles = {
    height: BasePixel * 12,
    fontSize: FontSize['s'],
    width: width,
  } as const;

  return (
    <TextField
      defaultValue={defaultValue}
      autoComplete='off'
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder='映画を検索する'
      variant='filled'
      InputProps={{
        style: styles,
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

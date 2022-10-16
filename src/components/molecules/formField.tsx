import { Autocomplete, TextField, Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC, memo } from 'react';
import { MuiAutoCompleteOnChangeEvent, MuiOnChangeEvent } from 'types';

type DescriptionFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};
type GenreFieldProps = {
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void;
};
type TitleFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};
type YoutubeUrlFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

/* eslint-disable react/display-name */
const DescriptionField: FC<DescriptionFieldProps> = memo(({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>概要</Typography>
      <MovieFormTextField
        type='text'
        error={false}
        placeholder='概要を入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
});

const YoutubeUrlField: FC<YoutubeUrlFieldProps> = memo(({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>YouTube URL</Typography>
      <MovieFormTextField
        type='url'
        error={false}
        placeholder='YouTube URLを入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
});

const TitleField: FC<TitleFieldProps> = memo(({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>タイトル</Typography>
      <MovieFormTextField
        type='text'
        error={false}
        placeholder='タイトルを入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
});

const GenreField: FC<GenreFieldProps> = memo(({ onChange }) => {
  const options = [
    'アクション映画',
    'ホラー映画',
    'ファンタジー映画',
    'アドベンチャー映画',
    'ミステリー映画',
    '恋愛映画',
    'その他',
  ] as const;

  return (
    <FieldContainer>
      <Typography gutterBottom>ジャンル</Typography>
      <Autocomplete
        options={options}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            required
            placeholder='ジャンルを選択してください'
            {...params}
            variant='standard'
          />
        )}
      />
    </FieldContainer>
  );
});
/* eslint-enable react/display-name */

export { DescriptionField, YoutubeUrlField, TitleField, GenreField };

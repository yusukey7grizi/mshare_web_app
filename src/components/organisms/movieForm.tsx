import React, { FC, FormEvent, useContext } from 'react';
import { Box } from '@mui/material';
import {
  DescriptionField,
  GenreField,
  YoutubeUrlField,
} from 'components/molecules';
import { TitleField } from 'components/molecules/titleField';
import { AppContext } from 'contexts/appContext';
import { MuiAutoCompleteOnChangeEvent, MuiOnChangeEvent } from 'types';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { CustomSubmitButton } from 'components/atoms/buttons';
import { axiosDefaultInstance } from 'utils/axiosConfig';

type CreateMovieFormInputTypes =
  | 'title'
  | 'overview'
  | 'youtubeLinkUrl'
  | 'genre';

interface PostMovieBody {
  title: string;
  overview: string;
  userId: string;
  userName: string;
  genre: string;
  youtubeTitleId: string;
}

const MovieForm: FC = () => {
  const { createMovieInput, setCreateMovieInput } = useContext(AppContext);
  const auth = useAuth();
  const router = useRouter();

  const createOnChangeHandler = (formType: CreateMovieFormInputTypes) => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      createMovieInput[formType] = value;
      setCreateMovieInput(createMovieInput);
    };
  };

  const autoCompleteOnChangeHandler = (
    _: MuiAutoCompleteOnChangeEvent,
    value: string | null
  ) => {
    if (!value) {
      return;
    }
    const updatedInput = createMovieInput;
    updatedInput['genre'] = value;
    setCreateMovieInput({ ...createMovieInput, ...updatedInput });
  };

  const moviePostHandler = async (event: FormEvent) => {
    event.preventDefault();

    const youtubeTitleId = new URLSearchParams(
      createMovieInput.youtubeLinkUrl.split('?')[1]
    ).get('v');

    if (!(auth.user?.uid && auth.user?.displayName && youtubeTitleId)) {
      return;
    }

    const data: PostMovieBody = {
      title: createMovieInput.title,
      overview: createMovieInput.overview,
      userId: auth.user.uid,
      userName: auth.user.displayName,
      genre: createMovieInput.genre,
      youtubeTitleId: youtubeTitleId,
    };

    axiosDefaultInstance
      .post('/movies', data, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': auth.csrfToken,
        },
        withCredentials: true,
      })
      .then(() => {
        router.push('/');
      })
      .catch(() => {
        console.error;
      });
  };

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: '10rem',
      }}
      onSubmit={(e: FormEvent) => moviePostHandler(e)}
    >
      <TitleField onChange={createOnChangeHandler('title')} />
      <DescriptionField onChange={createOnChangeHandler('overview')} />
      <GenreField onChange={autoCompleteOnChangeHandler} />
      <YoutubeUrlField onChange={createOnChangeHandler('youtubeLinkUrl')} />
      <CustomSubmitButton text='作成' />
    </Box>
  );
};

export { MovieForm };

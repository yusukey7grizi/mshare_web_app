import React, { FC, FormEvent, useContext } from 'react';
import { Box } from '@mui/material';
import {
  DescriptionField,
  GenreField,
  YoutubeUrlField,
} from 'components/molecules';
import { TitleField } from 'components/molecules';
import { AppContext } from 'contexts/appContext';
import { MuiAutoCompleteOnChangeEvent, MuiOnChangeEvent } from 'types';
import { useRouter } from 'next/router';
import { CustomSubmitButton } from 'components/atoms/buttons';
import { axiosDefaultInstance } from 'utils/axiosConfig';
import { useAuth0 } from '@auth0/auth0-react';

type CreateMovieFormInputTypes =
  | 'title'
  | 'overview'
  | 'youtubeLinkUrl'
  | 'genre';

interface PostMovieBody {
  movieId: string;
  title: string;
  overview: string;
  userId: string;
  username: string;
  genre: string;
}

const MovieForm: FC = () => {
  const { createMovieInput, setCreateMovieInput } = useContext(AppContext);
  const router = useRouter();
  const { user, getAccessTokenSilently } = useAuth0();

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

    const movieId = new URLSearchParams(
      createMovieInput.youtubeLinkUrl.split('?')[1]
    ).get('v');

    if (!(user?.sub && user?.nickname && movieId)) {
      return;
    }

    const data: PostMovieBody = {
      movieId: movieId,
      title: createMovieInput.title,
      overview: createMovieInput.overview,
      userId: user.sub,
      username: user.nickname,
      genre: createMovieInput.genre,
    };
    try {
      const token = await getAccessTokenSilently({
        audience: process.env.NEXT_PUBLIC_AUTH0_JWT_AUDIENCE,
      });
      await axiosDefaultInstance.post('/movies', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      await router.push(`/movie/${movieId}`);
    } catch (error) {
      await router.push('/');
    }
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as const;

  return (
    <Box
      component='form'
      sx={styles}
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

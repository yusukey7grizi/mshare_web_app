import React, { FC, useContext } from 'react';
import { Box } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import {
  EmailText,
  MovieListTitle,
  UsernameText,
} from 'components/atoms/texts';
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList';
import { AppContext } from 'contexts/appContext';

type Props = {
  userName: string;
  email: string;
};

const ProfileTemplate: FC<Props> = ({ userName, email }) => {
  const { relatedMovieList } = useContext(AppContext);

  return (
    <>
      <Box sx={{ width: '50rem', margin: 'auto' }}>
        <UsernameText userName={userName} />
        <EmailText email={email} />
      </Box>
      <MovieListTitle />
      <MuiDivider />
      <MovieList movieList={relatedMovieList} />
    </>
  );
};

export { ProfileTemplate };

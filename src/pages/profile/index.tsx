import { ErrorPage } from 'components/templates/404Template';
import { LoadingPage } from 'components/templates/loadingTemplate';
import { ProfileTemplate } from 'components/templates/profileTemplate';
import { useAuth } from 'contexts/authContext';
import React from 'react';
import { useMovieList } from 'utils';

const Profile = () => {
  const auth = useAuth();
  const {
    data: movieList,
    isError,
    isLoading,
  } = useMovieList(`http://localhost:8000/movies?userId=${auth.user?.uid}`);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <ProfileTemplate
      email={auth.user?.email || ''}
      userName={auth.user?.displayName || ''}
      movieList={movieList}
    />
  );
};

export default Profile;

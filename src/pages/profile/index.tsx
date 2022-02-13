import { LoadingPage } from 'components/templates/loadingTemplate';
import { ErrorPage } from 'components/templates/errorTemplate';
import { ProfileTemplate } from 'components/templates/profileTemplate';
import { useAuth } from 'contexts/authContext';
import React from 'react';
import { useMovieList } from 'utils';
import { AuthCheckWrapper } from 'components/organisms';

const Profile = () => {
  const auth = useAuth();
  const {
    data: movieList,
    isError,
    isLoading,
  } = useMovieList(`/movies?userId=${auth.user?.uid}`);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <AuthCheckWrapper url='/profile'>
      <ProfileTemplate
        email={auth.user?.email || ''}
        userName={auth.user?.displayName || ''}
        movieList={movieList}
      />
    </AuthCheckWrapper>
  );
};

export default Profile;

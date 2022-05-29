import { LoadingPage } from 'components/templates/loadingTemplate';
import { ErrorPage } from 'components/templates/errorTemplate';
import { ProfileTemplate } from 'components/templates/profileTemplate';
import React from 'react';
import { useMovieList } from 'utils';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
// import { AuthCheckWrapper } from 'components/organisms'; DEPRECATED
// import { useAuth } from 'contexts/authContext'; DEPRECATED

const Profile = () => {
  // const auth = useAuth();DEPRECATED
  const { user } = useAuth0();

  const {
    data: movieList,
    isError,
    isLoading,
  } = useMovieList(`/movies?userId=${user?.sub}`);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    // <AuthCheckWrapper> DEPRECATED
    // {auth.user && (
    <ProfileTemplate
      email={user?.email || ''}
      username={user?.nickname || ''}
      movieList={movieList || []}
    />
    // )}
    // </AuthCheckWrapper> DEPRECATED
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <LoadingPage />,
});

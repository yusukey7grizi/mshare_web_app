import { ProfileTemplate } from 'components/templates/profileTemplate';
import { AppContext } from 'contexts/appContext';
import { useAuth } from 'contexts/authContext';
import React, { useContext, useEffect } from 'react';
import { useMovieList } from 'utils';

const Profile = () => {
  const auth = useAuth();
  const { setRelatedMovieList } = useContext(AppContext);
  const { data } = useMovieList(
    `http://localhost:8000/movies?userId=${auth.user?.uid}`
  );

  return (
    <ProfileTemplate
      email={auth.user?.email || ''}
      userName={auth.user?.displayName || ''}
    />
  );
};

export default Profile;

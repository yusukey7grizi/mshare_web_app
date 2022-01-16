import { ProfileTemplate } from 'components/templates/profileTemplate';
import { AppContext } from 'contexts/appContext';
import { useAuth } from 'contexts/authContext';
import React, { useContext, useEffect, useState } from 'react';
import { Movie } from 'types/dataTypes';

const Profile = () => {
  const auth = useAuth();

  const { setRelatedMovieList } = useContext(AppContext);

  useEffect(() => {
    const fetchUserMovies = async () => {
      const res = await fetch(
        `http://localhost:8000/movies?userId=${auth.user?.uid}`
      );
      const data = await res.json();
      setRelatedMovieList(data);
    };
    if (auth.user) {
      fetchUserMovies();
    }
  });

  return (
    <ProfileTemplate
      email={auth.user?.email || ''}
      userName={auth.user?.displayName || ''}
    />
  );
};

export default Profile;

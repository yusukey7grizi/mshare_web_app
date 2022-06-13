import React, { FC } from 'react';
import { PostMovieTemplate } from 'components/templates/postMovieTemplate';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { LoadingPage } from 'components/templates/loadingTemplate';

const PostMovie: FC = () => {
  return <PostMovieTemplate />;
};

export default withAuthenticationRequired(PostMovie, {
  onRedirecting: () => <LoadingPage />,
});

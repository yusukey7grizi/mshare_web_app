import React, { FC } from 'react';
import { PostMovieTemplate } from 'components/templates/postMovieTemplate';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { LoadingPage } from 'components/templates/loadingTemplate';
// import { AuthCheckWrapper } from 'components/organisms'; DEPRECATED

const PostMovie: FC = () => {
  return (
    // <AuthCheckWrapper> DEPRECATED
    <PostMovieTemplate />
    // </AuthCheckWrapper> DEPRECATED
  );
};

export default withAuthenticationRequired(PostMovie, {
  onRedirecting: () => <LoadingPage />,
});

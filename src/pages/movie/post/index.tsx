import React, { FC } from 'react';
import { PostMovieTemplate } from 'components/templates/postMovieTemplate';
import { AuthCheckWrapper } from 'components/organisms';

const PostMovie: FC = () => {
  return (
    <AuthCheckWrapper url='/movie/post'>
      <PostMovieTemplate />
    </AuthCheckWrapper>
  );
};

export default PostMovie;

import React, { FC } from 'react';
import { PostMovieTemplate } from 'components/templates/postMovieTemplate';
import { VerificationResponse } from 'types/authResponseTypes';
import { AuthCheckWrapper } from 'components/organisms';

const PostMovie: FC<VerificationResponse> = () => {
  return (
    <AuthCheckWrapper>
      <PostMovieTemplate />
    </AuthCheckWrapper>
  );
};

export default PostMovie;

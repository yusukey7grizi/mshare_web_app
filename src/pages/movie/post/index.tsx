import React, { FC } from 'react'
import { PostMovieTemplate } from 'components/templates/postMovieTemplate'
import { LogInCheck } from 'contexts/authContext'

const PostMovie: FC = () => {
  return (
    <LogInCheck>
      <PostMovieTemplate />
    </LogInCheck>
  )
}

export default PostMovie

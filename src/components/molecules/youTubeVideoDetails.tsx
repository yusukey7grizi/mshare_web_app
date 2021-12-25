import React, { FC } from 'react';
import { MovieInfo } from 'pages/movie/[id]';

type YouTubeVideoDetailsProps = {
  movieInfo: MovieInfo;
};

const YouTubeVideoDetails: FC<YouTubeVideoDetailsProps> = ({ movieInfo }) => {
  return (
    <>
      {movieInfo.title}
      {movieInfo.uploadedBy}
      {movieInfo.description}
      {movieInfo.uploadDate}
      {movieInfo.url}
    </>
  );
};

export { YouTubeVideoDetails };

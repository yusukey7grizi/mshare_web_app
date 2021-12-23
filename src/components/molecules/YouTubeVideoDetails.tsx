import React, { FC } from "react";
import { MovieDetailsProps } from "components/templates/MovieDetailContent";

const YouTubeVideoDetails: FC<MovieDetailsProps> = ({ movieInfo }) => {
  return (
    <div>
      {movieInfo.title}
      {movieInfo.uploadedBy}
      {movieInfo.description}
      {movieInfo.uploadDate}
      {movieInfo.url}
    </div>
  );
};

export { YouTubeVideoDetails };

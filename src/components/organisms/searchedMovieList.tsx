import React, { FC } from 'react';
import { MovieItem } from 'components/molecules';
import { Movie } from 'types/dataTypes';
import { BasePixel } from 'components/constants';
import { FlexBox } from 'components/atoms/layoutElement';

type Props = {
  movieList: Movie[];
};

const SearchedMovieList: FC<Props> = ({ movieList }) => {
  const styles = {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: BasePixel * 5,
  } as const;

  return (
    <FlexBox sx={styles}>
      {movieList.map((movie) => {
        return <MovieItem key={movie.movieId} movie={movie} />;
      })}
    </FlexBox>
  );
};

export { SearchedMovieList };

import React, { FC, memo } from 'react';
import { MovieItem } from 'components/molecules';
import { Movie } from 'types/dataTypes';
import { BasePixel } from 'components/constants';
import { FlexBox } from 'components/atoms/layoutElement';

type Props = {
  movieList: Movie[];
};

// eslint-disable-next-line react/display-name
const SearchedMovieList: FC<Props> = memo(({ movieList }) => {
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
});

export { SearchedMovieList };

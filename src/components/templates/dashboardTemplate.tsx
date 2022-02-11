import { Box, Typography } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import { MovieList } from 'components/organisms/movieList';
import React, { FC } from 'react';
import { Genre, Movie } from 'types/dataTypes';

type Props = {
  movieList: Movie[];
};

const DashboardTemplate: FC<Props> = ({ movieList }) => {
  const genre = {
    1: 'アクション映画',
    2: 'ホラー映画',
    3: 'ファンタジー映画',
    4: 'アドベンチャー映画',
    5: 'ミステリー映画',
    6: '恋愛映画',
    7: 'その他',
  } as const;

  const genreList = Object.entries(genre);

  const handleFilterMovieList = (genre: Genre) => {
    return movieList.filter((movie) => {
      return movie.genre === genre;
    });
  };

  return (
    <Bar>
      {genreList.map((genre) => {
        return (
          <Box component='div' key={genre[0]}>
            <Typography
              fontSize={FontSize['l']}
              sx={{
                fontFamily: 'monospace',
                pl: 2,
              }}
            >
              {genre[1]}
            </Typography>
            <MovieList movieList={handleFilterMovieList(genre[1] as Genre)} />
            {genreList.length.toString() !== genre[0] && <MuiDivider />}
          </Box>
        );
      })}
    </Bar>
  );
};

export { DashboardTemplate };

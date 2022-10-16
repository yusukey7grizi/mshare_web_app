import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { BasePixel, FontSize } from 'components/constants';
import { useRouter } from 'next/router';
import React, { FC, Fragment, memo } from 'react';
import { Movie } from 'types/dataTypes';

type MovieItemProps = {
  movie: Movie;
};

/* eslint-disable react/display-name */
const MovieItem: FC<MovieItemProps> = memo(({ movie }) => {
  const router = useRouter();

  const cardOnClickHandler = () => {
    router.push(`/movie/${movie.movieId}`);
  };

  const styles = {
    cardActionArea: {
      width: BasePixel * 80,
    },
    cardContent: { padding: 0 },
    title: {
      fontSize: FontSize['m'],
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
    },
    username: {
      fontSize: FontSize['s'],
    },
  } as const;

  const Title = memo(() => {
    return (
      <Typography noWrap sx={styles.title}>
        {movie.title}
      </Typography>
    );
  });

  const Username = memo(() => {
    return (
      <Typography noWrap sx={styles.username}>
        {movie.username}
      </Typography>
    );
  });
  /* eslint-enable react/display-name */

  return (
    <Box>
      <Card component={Fragment}>
        <CardActionArea
          sx={styles.cardActionArea}
          onClick={() => {
            setTimeout(cardOnClickHandler, 1500);
          }}
        >
          <CardMedia
            component='img'
            image={`https://i.ytimg.com/vi/${movie.movieId}/mqdefault.jpg`}
          />
          <CardContent sx={styles.cardContent}>
            <Title />
            <Username />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
});

export { MovieItem };

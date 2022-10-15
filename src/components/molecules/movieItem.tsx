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
import React, { FC, Fragment } from 'react';
import { Movie } from 'types/dataTypes';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const router = useRouter();

  const cardOnClickHandler = () => {
    router.push(`/movie/${movie.movieId}`);
  };

  const styles = {
    cardActionArea: {
      width: BasePixel * 80,
    },
    title: {
      fontSize: FontSize['s'],
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
    },
    username: {
      fontSize: FontSize['xs'],
    },
  } as const;

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
          <CardContent sx={{ padding: 0, paddingLeft: 1 }}>
            <Typography noWrap sx={styles.title}>
              {movie.title}
            </Typography>
            <Typography sx={styles.username}>{movie.username}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export { MovieItem };

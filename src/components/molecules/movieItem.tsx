import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { FontSize } from 'components/constants';
import { useRouter } from 'next/router';
import React, { FC, Fragment } from 'react';
import { Movie } from 'types/dataTypes';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const router = useRouter();

  const cardOnClickHandler = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card component={Fragment}>
        <CardActionArea
          sx={{ width: '16rem', height: '12.8rem' }}
          onClick={() => {
            setTimeout(cardOnClickHandler, 1500);
          }}
        >
          <CardMedia
            component='img'
            image={`https://i.ytimg.com/vi/${movie.youtubeTitleId}/mqdefault.jpg`}
          />
          <CardContent>
            <Typography
              noWrap
              fontSize={FontSize['s']}
              sx={{
                fontWeight: 'bold',
                textOverflow: 'ellipsis',
              }}
            >
              {movie.title}
            </Typography>
            <Typography sx={{ fontSize: '0.8rem' }}>
              {movie.userName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export { MovieItem };

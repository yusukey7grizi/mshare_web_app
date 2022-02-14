import { Box, Typography, useMediaQuery } from '@mui/material';
import { ShowMoreButton } from 'components/atoms/buttons';
import { FontSize, MinScreenSize } from 'components/constants';
import { useAuth } from 'contexts/authContext';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { MoviePlayerState } from 'types';
import { Movie } from 'types/dataTypes';
import { axiosDefaultInstance } from 'utils/axiosConfig';

type YouTubePlayerProps = {
  movie: Movie;
  setMoviePlayerState: Dispatch<SetStateAction<MoviePlayerState>>;
  grinningScore: number;
};

type PutMovieBody = {
  grinningScore: number;
};

const YouTubePlayer: FC<YouTubePlayerProps> = ({
  movie,
  setMoviePlayerState,
  grinningScore,
}) => {
  const auth = useAuth();

  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false);
  const { overview, title, createdAt, userName } = movie;

  const isLargeScreenSize = useMediaQuery(MinScreenSize['l']);
  const isMediumScreenSize = useMediaQuery(MinScreenSize['s']);
  const width = isLargeScreenSize ? '43rem' : '100%';

  const options: Options = {
    height: isLargeScreenSize ? '350' : isMediumScreenSize ? '330' : '230',
    width: isLargeScreenSize ? '700' : '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const today = new Date(createdAt);
  const date = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const createdDate = `${year}年${month}月${date}日 `;

  // call back for state update
  const playerStateUpdateHandler = ({
    data,
    target,
  }: YT.OnStateChangeEvent) => {
    setMoviePlayerState({
      playerState: data,
      currentTime: target.getCurrentTime(),
      duration: target.getDuration(),
    });
  };

  const handleSendScore = () => {
    const putBody: PutMovieBody = { grinningScore: grinningScore };

    axiosDefaultInstance
      .put(`/movies/${movie.id}`, putBody, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': auth.csrfToken,
        },
        withCredentials: true,
      })
      .catch(() => console.error);
  };

  return (
    <Box sx={{ margin: isLargeScreenSize ? 'auto' : 'unset' }}>
      <YouTube
        onPause={handleSendScore}
        videoId={movie.youtubeTitleId}
        opts={options}
        onStateChange={playerStateUpdateHandler}
      />
      <Typography
        fontSize={FontSize['m']}
        sx={{ fontWeight: 'bold', pt: '1rem', width: width }}
      >
        {title}
      </Typography>
      <Typography sx={{ width: width }} fontSize={FontSize['s']}>
        {userName}
      </Typography>
      <Typography gutterBottom fontSize={FontSize['xs']}>
        {createdDate}
      </Typography>
      <Typography sx={{ width: width }} gutterBottom fontSize={FontSize['xs']}>
        ニヤッと回数：
        {grinningScore ? `${grinningScore} 回` : '0回'}
      </Typography>
      {isDetailOpened && (
        <Typography
          sx={{ width: width }}
          fontSize={FontSize['xs']}
        >{`概要： ${overview}`}</Typography>
      )}
      <ShowMoreButton
        onClick={() => {
          setIsDetailOpened(!isDetailOpened);
        }}
        isDetailOpened={isDetailOpened}
      />
    </Box>
  );
};

export { YouTubePlayer };

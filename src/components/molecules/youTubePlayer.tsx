import { Box, Typography, useMediaQuery } from '@mui/material';
import { ShowMoreButton } from 'components/atoms/buttons';
import { FontSize } from 'components/constants';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { MoviePlayerState } from 'types';
import { Movie } from 'types/dataTypes';

type YouTubePlayerProps = {
  movie: Movie;
  setMoviePlayerState: Dispatch<SetStateAction<MoviePlayerState>>;
  grinningScore: number;
};

const YouTubePlayer: FC<YouTubePlayerProps> = ({
  movie,
  setMoviePlayerState,
  grinningScore,
}) => {
  // call back for state update
  const playerStateChangeHandler = ({
    data,
    target,
  }: YT.OnStateChangeEvent) => {
    console.log('video player state updated');
    setMoviePlayerState({
      playerState: data,
      currentTime: target.getCurrentTime(),
      duration: target.getDuration(),
    });
  };

  const isLargeScreenSize = useMediaQuery('(min-width:710px)');
  const isMediumScreenSize = useMediaQuery('(min-width:400px)');

  const options: Options = {
    height: isLargeScreenSize ? '350' : isMediumScreenSize ? '330' : '230',
    width: isLargeScreenSize ? '700' : '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false);
  const { overview, title, createdAt, userName } = movie;

  const today = new Date(createdAt);
  const date = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const createdDate = `${year}年${month}月${date}日 `;

  return (
    <Box sx={{ margin: isLargeScreenSize ? 'auto' : 'unset' }}>
      <YouTube
        videoId={movie.youtubeTitleId}
        opts={options}
        onStateChange={playerStateChangeHandler}
      />
      <Typography
        fontSize={FontSize['m']}
        sx={{ fontWeight: 'bold', pt: '1rem' }}
      >
        {title}
      </Typography>
      <Typography variant='subtitle1'>{userName}</Typography>
      <Typography gutterBottom variant='subtitle2'>
        {createdDate}
      </Typography>
      <Typography gutterBottom variant='subtitle2'>
        ニヤッと回数：
        {grinningScore ? `${grinningScore} 回` : '0回'}
      </Typography>
      {isDetailOpened && (
        <Typography variant='subtitle2'>{`概要： ${overview}`}</Typography>
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

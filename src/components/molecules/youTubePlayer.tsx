import { Box, Typography, useMediaQuery } from '@mui/material';
import { ShowMoreButton } from 'components/atoms/buttons';
import { FontSize, ScreenSize } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { CoreFunctionsContext } from 'contexts/coreFunctionsContext';
import React, { FC, useContext, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { Movie } from 'types/dataTypes';
import { handleSendScore } from 'utils';

type YouTubePlayerProps = {
  movie: Movie;
};

const YouTubePlayer: FC<YouTubePlayerProps> = ({ movie }) => {
  const { setMoviePlayerState } = useContext(CoreFunctionsContext);
  const { grinningScore } = useContext(AppContext);

  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false);
  const { overview, title, createdAt, username } = movie;

  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  const width = isLargerThanIpad ? '43rem' : '100%';

  const options: Options = {
    height: isLargerThanIpad ? '350' : isLargerThanIphone ? '330' : '230',
    width: isLargerThanIpad ? '700' : '100%',
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

  return (
    <Box sx={{ margin: isLargerThanIpad ? 'auto' : 'unset' }}>
      <YouTube
        onPause={() => {
          handleSendScore({
            grinningScore: grinningScore,
            movieId: movie.movieId,
          });
        }}
        videoId={movie.movieId}
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
        {username}
      </Typography>
      <Typography gutterBottom fontSize={FontSize['xs']}>
        {createdDate}
      </Typography>
      <Typography sx={{ width: width }} gutterBottom fontSize={FontSize['xs']}>
        あなたのニヤッと回数：
        {grinningScore ? `${grinningScore} 回` : '0回'}
      </Typography>
      <Typography sx={{ width: width }} gutterBottom fontSize={FontSize['xs']}>
        合計ニヤッと回数：
        {movie ? `${+movie.grinningScore + +grinningScore} 回` : '0回'}
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

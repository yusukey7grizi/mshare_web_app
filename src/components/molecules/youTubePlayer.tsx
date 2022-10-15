import { Box, Typography, useMediaQuery } from '@mui/material';
import { ShowMoreButton } from 'components/atoms/buttons';
import { FontSize, ScreenSize } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { CoreFunctionsContext } from 'contexts/coreFunctionsContext';
import React, { FC, useContext, useMemo, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { Movie } from 'types/dataTypes';
import { handleSendScore } from 'utils';

type YouTubePlayerProps = {
  movie: Movie;
};

const YouTubePlayer: FC<YouTubePlayerProps> = ({ movie }) => {
  const { setMoviePlayerState } = useContext(CoreFunctionsContext);
  const { grinningScore } = useContext(AppContext);

  const [isOverviewOpened, setIsOverviewOpened] = useState<boolean>(false);
  const { overview, title, createdAt, username } = movie;

  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  const options: Options = {
    height: isLargerThanIpad ? '350' : isLargerThanIphone ? '330' : '230',
    width: isLargerThanIpad ? '700' : '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const styles = {
    box: {
      margin: isLargerThanIpad ? 'auto' : 'unset',
      width: isLargerThanIpad ? '43rem' : '100%',
    },
    title: { fontWeight: 'bold', pt: '1rem' },
    username: { fontSize: FontSize['s'] },
    detail: { fontSize: FontSize['xs'] },
  } as const;

  const createdDate = useMemo(() => {
    const today = new Date(createdAt);
    const date = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${year}年${month}月${date}日 `;
  }, [createdAt]);

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
    <Box sx={styles.box}>
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
      <Typography fontSize={FontSize['m']} sx={styles.title}>
        {title}
      </Typography>
      <Typography sx={styles.username}>{username}</Typography>
      <Typography gutterBottom fontSize={FontSize['xs']}>
        {createdDate}
      </Typography>
      <Typography sx={styles.detail}>
        あなたのニヤッと回数：
        {grinningScore ? `${grinningScore} 回` : '0回'}
      </Typography>
      <Typography sx={styles.detail}>
        合計ニヤッと回数：
        {movie ? `${+movie.grinningScore + +grinningScore} 回` : '0回'}
      </Typography>
      {isOverviewOpened && (
        <Typography sx={styles.detail}>{`概要： ${overview}`}</Typography>
      )}
      <ShowMoreButton
        onClick={() => {
          setIsOverviewOpened(!isOverviewOpened);
        }}
        isDetailOpened={isOverviewOpened}
      />
    </Box>
  );
};

export { YouTubePlayer };

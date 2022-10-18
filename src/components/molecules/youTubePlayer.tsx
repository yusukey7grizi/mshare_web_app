import { Box, Typography, useMediaQuery } from '@mui/material';
import { ShowMoreButton } from 'components/atoms/buttons';
import { BasePixel, FontSize, ScreenSize } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { CoreFunctionsContext } from 'contexts/coreFunctionsContext';
import React, {
  FC,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import YouTube, { Options } from 'react-youtube';
import { Movie } from 'types/dataTypes';
import { handleSendScore } from 'utils';

type YouTubePlayerProps = {
  movie: Movie;
};
/* eslint-disable react/display-name */
const YouTubePlayer: FC<YouTubePlayerProps> = memo(({ movie }) => {
  const { setMoviePlayerState } = useContext(CoreFunctionsContext);
  const { grinningScore, grinningScoreOnPause } = useContext(AppContext);

  const [isOverviewOpened, setIsOverviewOpened] = useState<boolean>(false);
  const { overview, title, createdAt, username } = movie;

  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  // styles
  const styles = {
    box: {
      margin: isLargerThanIpad ? 'auto' : 'unset',
    },
    title: {
      fontWeight: 'bold',
      fontSize: FontSize['xl'],
      maxWidth: BasePixel * 175,
    },
    username: { fontSize: FontSize['m'], maxWidth: BasePixel * 175 },
    detail: { fontSize: FontSize['s'], maxWidth: BasePixel * 175 },
    youtube: {
      height: isLargerThanIpad ? '360' : isLargerThanIphone ? '320' : '240',
      width: isLargerThanIpad ? '700' : '100%',
    },
  } as const;

  const options: Options = {
    ...styles.youtube,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // memoized texts
  const createdDate = useMemo(() => {
    const today = new Date(createdAt);
    const date = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${year}年${month}月${date}日 `;
  }, [createdAt]);

  const grinningScoreText = useMemo(() => {
    if (grinningScore) {
      return `あなたのニヤッと回数：${grinningScore} 回`;
    }
    return 'あなたのニヤッと回数：0回';
  }, [grinningScore]);

  const totalGrinningScoreText = useMemo(() => {
    if (movie) {
      return `合計ニヤッと回数：${+movie.grinningScore + +grinningScore} 回`;
    }
    return '合計ニヤッと回数：0回';
  }, [grinningScore, movie]);

  const overviewText = useMemo(() => {
    return `概要： ${overview}`;
  }, [overview]);

  // memoized components
  const Title = memo(() => {
    return <Typography sx={styles.title}>{title}</Typography>;
  });

  const Username = memo(() => {
    return <Typography sx={styles.username}>{username}</Typography>;
  });

  const CreatedDate = memo(() => {
    return <Typography sx={styles.detail}>{createdDate}</Typography>;
  });

  const GrinningScore = memo(() => {
    return <Typography sx={styles.detail}>{grinningScoreText}</Typography>;
  });

  const TotalGrinningScore = memo(() => {
    return <Typography sx={styles.detail}>{totalGrinningScoreText}</Typography>;
  });

  const Overview = memo(() => {
    return <Typography sx={styles.detail}>{overviewText}</Typography>;
  });
  /* eslint-enable react/display-name */

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

  const handleSendScoreOnPause = useCallback(() => {
    handleSendScore({
      grinningScore: grinningScoreOnPause,
      movieId: movie.movieId,
    });
  }, [grinningScoreOnPause, movie.movieId]);

  return (
    <Box sx={styles.box}>
      <YouTube
        onPause={handleSendScoreOnPause}
        videoId={movie.movieId}
        opts={options}
        onStateChange={playerStateUpdateHandler}
      />
      <Title />
      <Username />
      <CreatedDate />
      <GrinningScore />
      <TotalGrinningScore />
      {isOverviewOpened && <Overview />}
      <ShowMoreButton
        onClick={() => {
          setIsOverviewOpened(!isOverviewOpened);
        }}
        isDetailOpened={isOverviewOpened}
      />
    </Box>
  );
});

export { YouTubePlayer };

import React, { Dispatch, FC, SetStateAction } from 'react'
import YouTube, { Options } from 'react-youtube'
import { MovieInfo } from 'pages/movie/[id]'
import { MoviePlayerState } from 'components/templates/movieDetailTemplate'

type YouTubePlayerProps = {
  movieInfo: MovieInfo
  setMoviePlayerState: Dispatch<SetStateAction<MoviePlayerState>>
}

const YouTubePlayer: FC<YouTubePlayerProps> = ({
  movieInfo,
  setMoviePlayerState,
}) => {
  // call back for state update
  const playerStateChangeHandler = ({
    data,
    target,
  }: YT.OnStateChangeEvent) => {
    console.log('video player state updated')
    setMoviePlayerState({
      playerState: data,
      currentTime: target.getCurrentTime(),
      duration: target.getDuration(),
    })
  }

  const options: Options = {
    height: '450',
    width: '800',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  return (
    <YouTube
      videoId={movieInfo.videoId}
      opts={options}
      onStateChange={playerStateChangeHandler}
    />
  )
}

export { YouTubePlayer }

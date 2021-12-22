import React, { FC } from 'react'
import YouTube, { Options } from 'react-youtube'
import { MovieDetailsProps } from '../templates/MovieDetailContent'

const YouTubePlayer: FC<MovieDetailsProps> = ({movieInfo}) => {
    const options:Options = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }
    return (
        <YouTube videoId={movieInfo.videoId} opts={options}/>
    )
}

export { YouTubePlayer }

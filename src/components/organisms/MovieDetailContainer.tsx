import React, { FC } from 'react'
import { YouTubePlayer, YouTubeVideoDetails } from '../molecules'
import { MovieDetailsProps } from '../templates/MovieDetailContent'

const MovieDetailContainer: FC<MovieDetailsProps> = ({movieInfo}) => {
    return (
        <div>
            <YouTubePlayer movieInfo={movieInfo}/>
            <YouTubeVideoDetails movieInfo={movieInfo}/>
        </div>
    )
}

export { MovieDetailContainer }

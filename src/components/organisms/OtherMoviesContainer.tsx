import React, { FC } from 'react'
import { Subtitle } from '../atoms/titles'
import { MovieDetailsProps } from '../templates/MovieDetailContent'

const OtherMoviesContainer: FC<MovieDetailsProps> = ({movieInfo}) => {
    return (
        <Subtitle text='他の動画を見る'/>
    )
}

export { OtherMoviesContainer }

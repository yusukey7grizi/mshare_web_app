import React, { FC } from 'react'
import { MovieInfo } from '../../pages/movie/[id]'
import { MovieDetailContainer, OtherMoviesContainer } from '../organisms'

export type MovieDetailsProps = {
    movieInfo: MovieInfo
}

const MovieDetailContent: FC<MovieDetailsProps> = ({movieInfo}) => {
    return (
        <div>
            <MovieDetailContainer movieInfo={movieInfo}/>
            <OtherMoviesContainer movieInfo={movieInfo}/>
        </div>
        
    )
}

export { MovieDetailContent }

// show youtube video with iframe 
// show video details

import React, { FC, useEffect, useState } from 'react'
import { MovieDetailContent } from '../../components/templates/MovieDetailContent'

export type MovieInfo = {
    title: string,
    uploadedBy: string,
    description: string,
    uploadDate: string,
    url: string,
    videoId: string
}

const MovieDetail: FC = () => {
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        uploadedBy: '',
        description: '',
        uploadDate: '',
        url: '',
        videoId: ''
    })

    useEffect(() => {
        // api fetching here

        // dummy data
        setMovieInfo({
            title: 'Intersteller',
            uploadedBy: 'Christopher Nolan',
            description: 'Space stuff',
            uploadDate: '2015-12-15',
            url: 'https://Youtube.com',
            videoId: 'D6or2gdrHRE'
        })

    }, [])

    return (
        <MovieDetailContent movieInfo={movieInfo}/>
    )
}

export default MovieDetail 

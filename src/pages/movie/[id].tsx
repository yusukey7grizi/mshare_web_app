// show youtube video with iframe
// show video details

import React, { FC, useEffect, useState } from 'react'
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate'

export type MovieInfo = {
  title: string
  uploadedBy: string
  description: string
  uploadDate: string
  url: string
  videoId: string
}

const MovieDetail: FC = () => {
  const [movieInfo, setMovieInfo] = useState({
    title: '',
    uploadedBy: '',
    description: '',
    uploadDate: '',
    url: '',
    videoId: '',
  })

  useEffect(() => {
    // api fetching here
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/movies/random')
        const data = await res.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    // dummy data
    setMovieInfo({
      title: '東京リベンジャーズ',
      uploadedBy: 'シネマトゥデイ',
      description:
        '北村匠海が主演を務め、山田裕貴、杉野遥亮、今田美桜、間宮祥太朗、吉沢亮ら豪華若手俳優の共演で、和久井健の人気コミック「東京卍リベンジャーズ」を実写映画化。ダメフリーターの花垣武道は、ヤンキーだった学生時代に付き合っていた人生唯一の彼女・橘ヒナタと彼女の弟・ナオトが、関東最凶の組織・東京卍曾に殺されたことをニュースで知る。その翌日、駅のホームで何者かに背中を押され線路に転落したタケミチは、不良学生だった10年前にタイムスリップする。過去の世界でタケミチがナオトに「10年後ヒナタは殺される」と伝えたことにより未来は変化。現代に戻ったタケミチは、死の運命から逃れ刑事になっていたナオトと出会う。刑事になったナオトから「10年前に戻り、東京卍曾を潰せばヒナタを助けられる。力を貸して欲しい」と言われ……。監督は「映像研には手を出すな！」「ぐらんぶる」の英勉。',
      uploadDate: '2021-04-21',
      url: 'https://Youtube.com',
      videoId: 'TRziJGzIg-U',
    })
  }, [])

  return <MovieDetailTemplate movieInfo={movieInfo} />
}

export default MovieDetail

// import React, { useEffect } from 'react'
import { BannerInfo } from '../components/BannerInfo'
import { Episodes } from '../components/Episodes'
import { Hero } from '../components/Hero'


export const Anime = () => {
  // const anime = useParams() 
  // useEffect(()=> { 
  //   console.log(anime.slug)
  // }, [anime] )

  return (
    <>
    <Hero/>
    <BannerInfo/>
    <Episodes/>
    </>
  )
}

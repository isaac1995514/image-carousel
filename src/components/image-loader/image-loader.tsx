import * as React from 'react'

interface ImageLoaderProps {
  id: string
  url: string
  thumbnail: string
  alt: string
}

export const ImageLoader = ({id, url, thumbnail, alt}) => {

  return <img src={thumbnail} alt={alt}/>
}
import * as React from 'react'

interface ImageLoaderProps {
  id: string
  url: string
  thumbnail: string
  alt: string
  height: number
  width: number
  hidden: number
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({id, url, thumbnail, alt, width, height}) => {

  return <img src={url} alt={alt} height={height} width={width}/>
}
import * as React from 'react'
import './style.css'

/**
 * Requirements:
 * 1. Display an array of image to the users, but image is displayed one by one.
 * 2. There is a left button and a right button. Clicking on them shift to the prev or next button.
 *  2.1 - If it hits the end, it should wrap around;
 * 3. It should have some dots on the bottom, and clicking the dot will brings us to the specific photos
 * 
 * API, Data Modal
 * 
 * 
 */

type PhotoData = {
  id: string
  url: string
  thumbnail: string
  alt: string
}

interface ImageCarouselProps {
  items: PhotoData[]
  onChange: (curr: number) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({}) => {

  const [currentImage, setCurrentImage] = React.useState(0)

  return (
    <div className='image-carousel-container'>
      <button className='nav-button prev-button'>
        <span>{"<"}</span>
      </button>
      <button className='nav-button next-button'>
        <span>{">"}</span>
      </button>
      <div className='nav-bar'></div>
    </div>
  )
}
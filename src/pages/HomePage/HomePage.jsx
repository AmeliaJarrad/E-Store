import React, { useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { carouselData } from '../../components/Carousel/CarouselData'





const HomePage = () => {
    const [index, setIndex] = useState()

    const slideLeft = () => {
        if (index - 1 >= 0) {
          setIndex(index - 1);
        }
      };
    
      const slideRight = () => {
        if (index + 1 <= carouselData.length - 1) {
          setIndex(index + 1);
        }
      };
    
      const images = [
        'https://placekeanu.com/50/50',
        'https://placekeanu.com/50/50/y',
        'https://placekeanu.com/30/30/yg',
      ];

  return (
    <main>
        <h1> Ri'saad's Furniture Bazaar</h1>
        <h2> Welcome friend, Khajiit has wares if you have coin</h2>
     
        <Carousel images={images}/>
        
        
    </main>
  )
}

export default HomePage
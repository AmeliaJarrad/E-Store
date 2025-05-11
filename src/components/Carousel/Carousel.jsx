import React, { useState } from 'react'
import classes from '../Carousel/Carousel.module.scss'

//placeholder name of images for now, just get an image to appear

const Carousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        };
        const prevSlide = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        };

    

  return (
    <div className={classes.carousel}>
        <button onClick={prevSlide} className={classes.carousel__btn_prev}>
            &lt;
        </button>
    
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className={classes.carousel__img}
      />
       
      <button onClick={nextSlide} className={classes.carousel__btn_next}>
        &gt;
      </button>
    </div>
  )
}

export default Carousel
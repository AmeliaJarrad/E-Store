import React, { useState } from 'react'
import classes from '../Carousel/Carousel.module.scss'

//placeholder name of images for now, just get an image to appear

const Carousel = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    
  if (!items || items.length === 0) {
    return <p>Loading carousel...</p>; // Prevent error while data loads
  }

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
          );
        };
        const prevSlide = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
          );
        };

     const activeItem = items[activeIndex];

  return (
    <div className={classes.carousel}>
    <div className={classes.carousel__content}>
      <button onClick={prevSlide} className={`${classes.carousel__btn} ${classes.carousel__btn_prev}`}>
        &lt;
      </button>
  
      <div className={classes.carousel__imageWrapper}>
        <img
          src={activeItem.imgURL}
          alt={`Slide ${activeItem.Name}`}
          className={classes.carousel__img}
        />
      </div>
  
      <button onClick={nextSlide} className={`${classes.carousel__btn} ${classes.carousel__btn_next}`}>
        &gt;
      </button>
    </div>
  
    <p className={classes.carousel__caption}>{activeItem.Name}</p>
  </div>
  )

  
}

export default Carousel
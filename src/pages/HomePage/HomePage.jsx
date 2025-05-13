import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/product-services';
import classes from './HomePage.module.scss';
import Risaad from '../../assets/Risaad.jpg';





const HomePage = () => {
    const [featuredImages, setFeaturedImages] = useState([]);

    useEffect(() => {
        getAllProducts().then((products) => {
          const images = getAllFeaturedImages(products);
          setFeaturedImages(images);
        });
      }, []);
    
    const getAllFeaturedImages = (products) => {
        const productImages = products
          .filter(p => p.isFeatured)
          .map(p => ({
            imgURL: p.imgURL,
            Name: p.Name || p.title || 'Unnamed Product',
            }));
       
      
        const variantImages = products.flatMap(product =>
          (product.Variants || [])
            .filter(variant => variant.isFeatured)
            .map(variant => ({
            imgURL: variant.imgURL,
            Name: variant.Name || 'Unnamed Variant',
            }))
        );
      
      
        return [...productImages, ...variantImages];
      };
  
    
  return (

    
    <div className={classes.home}>
   
    
    <section className={classes.mainContent}>
        
        <h1> Ri'saad's Furniture Bazaar</h1>
        <h2> Welcome friend, Khajiit has wares if you have coin</h2>
        
        <Carousel items={featuredImages}/>

        <div className={classes.featureSection}>
        <img src={Risaad} alt="Ri'saad" />
        <div className={classes.textBox}>
          <h3>Master Khajiit Craftsmanship</h3>
          <p>
          "Welcome friend, I have traveled far across Tamriel to serve you. The Khajiit hail from a distant land called Elsweyr, bordered on the 
          north by Cyrodiil and the south by the glistening blue waters of the sea. Elsweyr is an arid land of deserts and rocky canyons, where the sun shines warmly, always. There are cities so ancient, the sands have swallowed them whole. 
          The wise trader finds the best opportunities, even if he must travel far to find them."
          </p>
        </div>
      </div>
        
        
    </section>
    </div>
   
  )
}

export default HomePage
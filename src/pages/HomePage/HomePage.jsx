import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/product-services';




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
          .map(p => p.imgURL);
      
        const variantImages = products.flatMap(product =>
          (product.Variants || [])
            .filter(variant => variant.isFeatured)
            .map(variant => variant.imgURL)
        );
      
        return [...productImages, ...variantImages];
      };
  
    
      const images = [
        'https://placekeanu.com/50/50',
        'https://placekeanu.com/50/50/y',
        'https://placekeanu.com/30/30/yg',
      ];

  return (
    <section>
        <h1> Ri'saad's Furniture Bazaar</h1>
        <h2> Welcome friend, Khajiit has wares if you have coin</h2>
     
        <Carousel images={featuredImages}/>
        
        
    </section>
  )
}

export default HomePage
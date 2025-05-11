import React from 'react'
import { useNavigate } from 'react-router'
import classes from '../ProductPage/ProductDetails.module.scss'
import ProductVariantCard from '../../components/ProductCard/ProductVariantCard';

export default function  ProductDetails ({productData, resetFetch}) {
    const navigate = useNavigate();



return (
    <div>
        
        <h1>{productData.Name}</h1>
        <h2></h2>
        <img className={classes.img} src={productData.imgURL}
        alt={productData.Name}>
        </img>
        <p>{productData.Description}</p>
        <p>In Stock: {productData.Quantity}</p>
        <p>Price: {productData.Price} gold</p>
         {/* <section className={classes.container}>
              {productData.map((product) => (
                <ProductVariantCard key={product.id} product={product} />
              ))}
            </section> */}
        </div>
    
  )
}


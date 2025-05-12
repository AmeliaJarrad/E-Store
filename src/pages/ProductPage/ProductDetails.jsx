import React from 'react'
import { useNavigate } from 'react-router'
import classes from '../ProductPage/ProductDetails.module.scss'


export default function  ProductDetails ({productData, resetFetch}) {
    const navigate = useNavigate();

    console.log(productData.Variants)
    if (productData.Variants && Array.isArray(productData.Variants)) {
        return productData.Variants.map((variant, index) => (
        
            <span className={classes.variants_card}>
                <h2 key={`${productData.id}-${index}`}> </h2>
                <h3>{variant.Name}</h3>
                <img src={variant.imgURL} />
                <p>{variant.description}</p>
                <p>{productData.Description}</p>
                <h5> Quantity in Stock: {variant.Quantity}</h5>
                <h5> Price: {variant.Price} gold</h5>
            </span>
               
            ));
    }

return (
    <section className={classes.container}>
                <div className={classes.noVar_card}>
                    <h1>{productData.Name}</h1>
                    <img  src={productData.imgURL}
                    alt={productData.Name}>
                    </img>
                    <p>{productData.Description}</p>
                    <p>Quantity in Stock: {productData.Quantity}</p>
                    <p>Price: {productData.Price} gold</p>    
                </div> 
            
        </section>
    ) 
}    

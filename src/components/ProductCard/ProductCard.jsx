import classes from './ProductCard.module.scss';
import { Link } from 'react-router';



export default function ProductCard({ product }) {

    if (product.Variants) {
        console.log(product.Variants)
        const variants = 
        product.Variants.map((varProd) =>
        <ProductCard key={varProd.index} value={varProd}> {varProd} </ProductCard>)
        console.log(variants)
    }

   
    
  return (
    <article className={classes.card}>
      
        <h3> {product.Category}</h3>
        <h3> {product.Name} </h3>
        <h2>  </h2>
        <h2 > </h2>
        <img src={product.imgURL} />
        <h5> Quantity in Stock: {product.Quantity}</h5>
        <h5> Price: {product.Price} gold</h5>
        <Link to={product.id}>See More</Link>
        
        
      
    </article>
  );
}

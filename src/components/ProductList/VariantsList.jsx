import ProductVariantCard from '../ProductCard/ProductCard';
import classes from './ProductList.module.scss';

export default function VariantsList({ productData }) {
    if (productData.Variants && Array.isArray(productData.Variants)) {
        return (
            <section className={classes.container}>
                {productData.Variants.map((variant, index) => (
                    <ProductVariantCard key={`${variant.id}-${index}`} />
                ))}

            </section> 
        )
    }
    else {
        return (
         <section className={classes.container}>
               {productData.map((product) => (
                 <ProductCard key={product.id} product={product} />
               ))}
             </section>   
        )
    }
 
}
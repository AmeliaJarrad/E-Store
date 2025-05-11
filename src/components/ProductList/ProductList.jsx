import ProductCard from '../ProductCard/ProductCard';
import ProductVariantCard from '../ProductCard/ProductVariantCard';
import classes from './ProductList.module.scss';

export default function ProductList({ productData }) {
    return (
        <section className={classes.container}>
          {productData.map((product) => {
            if (product.Variants && Array.isArray(product.Variants)) {
              return product.Variants.map((variant, index) => (
                <ProductVariantCard
                  key={`${product.id}-${index}`}
                  variant={variant}
                  category={product.Category}
                  description={product.Description}
                  id={product.id}
                />
              ));
            } else {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              );
            }
          })}
        </section>
    )
}
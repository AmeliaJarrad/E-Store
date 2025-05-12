import { useEffect, useState } from 'react';
import { subscribeToProducts } from '../../services/product-services';
import ProductList from '../../components/ProductList/ProductList';

export default function LiveProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const unsub = subscribeToProducts(setProducts);
    return () => {
      console.log('unsubscribe from the live product data');
      unsub();
    };
  }, []);

  return (
    <main>
      <h1>Live Products Page</h1>
      <ProductList productData={products} />
    </main>
  );
}
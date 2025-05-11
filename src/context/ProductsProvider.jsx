import { createContext } from 'react';
import ProductsLoader from '../container/ProductsLoader';
import { getAllProducts } from '../services/product-services';
export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const {
    data: productData,
    error,
    isFail,
    isLoading,
    isSuccess,
  } = ProductsLoader({ fetchFn: getAllProducts });

  return (
    <ProductsContext value={{ productData, error, isFail, isLoading, isSuccess }}>
      {children}
    </ProductsContext>
  );
}
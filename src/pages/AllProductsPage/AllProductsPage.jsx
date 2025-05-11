import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import ProductList from '../../components/ProductList/ProductList';
import VariantsList from '../../components/ProductList/VariantsList';


export default function AllProductsPage() {
  const { isFail, isLoading, isSuccess, error, productData } =
    useContext(ProductsContext);
  return (
    <main>
      <h1>All Products</h1>

      {isLoading && <p>Loading...</p>}
      {isFail && <p>{error.message}</p>}
      {isSuccess && <ProductList productData={productData} />}
      
    </main>
  );
}
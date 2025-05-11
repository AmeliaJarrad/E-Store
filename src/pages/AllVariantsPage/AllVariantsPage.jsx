import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import VariantsList from '../../components/ProductList/VariantsList';

export default function AllVariantsPage() {
  const { isFail, isLoading, isSuccess, error, productData } =
    useContext(ProductsContext);
  return (
    <main>
      <h1>Variants</h1>

      {isLoading && <p>Loading...</p>}
      {isFail && <p>{error.message}</p>}
      {isSuccess && <VariantsList productData={productData} />}
    </main>
  );
}
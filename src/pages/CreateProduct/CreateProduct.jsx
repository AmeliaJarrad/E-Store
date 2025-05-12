import { useNavigate } from 'react-router';
import ProductForm from '../../components/ProductForm/ProductForm';
import { createProduct } from '../../services/product-services';

export default function CreateProduct() {
  const navigate = useNavigate();

  const onSearch = async (vals) => {
    const id = await createProduct(vals);
    navigate('/product/' + id);
  };

  return (
    <section>
      <h1>Add a product</h1>
      
      <ProductForm  onSubmit={onSearch} />
    </section>
  );
}
import React from 'react'
import { useParams } from 'react-router'
import ProductsLoader from '../../container/ProductsLoader';
import { getProductById } from '../../services/product-services';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
    const { id } = useParams();
    const {data: product, isFail, isLoading, isSuccess, error, reset,

    } = ProductsLoader({fetchFn: getProductById, dependencies: [id], args: [id]});



  return (
    <main>
        {isLoading && <p> Loading my love, please wait </p>}
        {isFail && <p> Curses my something, failed</p>}
        {isSuccess && <ProductDetails productData={product} resetFetch={reset}/>}
    </main>
  )
}

export default ProductPage
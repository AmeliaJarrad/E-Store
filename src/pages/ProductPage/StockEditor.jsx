import React from 'react'
import { Link, useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import { deleteProductById, 
        updateProductById } from '../../services/product-services'
import ProductForm from '../../components/ProductForm/ProductForm';
import { useCart } from '../../context/CartProvider';


const StockEditor = ({productData, resetFetch}) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
    };


    const deleteProduct = () => {
        deleteProductById(productData.id).then((result) => {
            console.log('Deleted furniture product with id ' + result);
            navigate('/products');
            
        });
    };

    const updateProduct = (formData) => {
        updateProductById(productData.id, formData).then((updated) => {
          console.log(updated);
          resetFetch();
        });
    };

   

    if (productData.Variants && Array.isArray(productData.Variants)) {
        return productData.Variants.map((variant, index) => (
            <div>
                <h2 key={`${productData.id}-${index}`}> </h2>
                <h3>{variant.Name}</h3>
                <img src={variant.imgURL} />
                <p>{variant.description}</p>
                <p>{productData.Description}</p>
                <h5> Quantity in Stock: {variant.Quantity}</h5>
                <h5> Price: {variant.Price} gold</h5>
                <Button onClick={() => addToCart(variant)}>Add to Cart</Button>

                <Button variants={['warning']} onClick={() => setIsUpdateModalOpen(true)}>
                Update Product </Button>
                <Button onClick={() => setIsDeleteModalOpen(true)} variants={['danger']}>
                Delete Product </Button>
      
                 <Link to="/products">Back</Link>

                {isDeleteModalOpen && (
                    <Modal heading="Delete Product" onClose={closeDeleteModal}>
                    <h4>Warning: This will delete {variant.Name}</h4>
                    <h5>Are you sure?</h5>
                    <Button onClick={closeDeleteModal} variants={['cancel']}>
                        Cancel
                    </Button>
                    <Button onClick={() => deleteProduct()}>Delete</Button>
                    </Modal>
                )}

                {isUpdateModalOpen && (
                    <Modal
                    heading={'Update ' + productData.title}
                    onClose={() => setIsUpdateModalOpen(false)}
                    >
                    <ProductForm
                        mode="Update"
                        defaults={productData}
                        onSubmit={updateProduct}
                    />
                    </Modal>
                )}

            </div>
                           
            ));
    }

  return (
    <div>
        <h1>{productData.Name}</h1>
        <img  src={productData.imgURL}
        alt={productData.Name}>
        </img>
        <p>{productData.Description}</p>
        <p>Quantity in Stock: {productData.Quantity}</p>
        <p>Price: {productData.Price} gold</p> 
        <Button onClick={() => addToCart(productData)}>Add to Cart</Button> 

        <Button variants={['warning']} onClick={() => setIsUpdateModalOpen(true)}>
                Update Product </Button>
                <Button onClick={() => setIsDeleteModalOpen(true)} variants={['danger']}>
                Delete Product </Button>
      
                 <Link to="/products">Back</Link>

                {isDeleteModalOpen && (
                    <Modal heading="Delete Product" onClose={closeDeleteModal}>
                    <h4>Warning: This will delete {productData.Name}</h4>
                    <h5>Are you sure?</h5>
                    <Button onClick={closeDeleteModal} variants={['cancel']}>
                        Cancel
                    </Button>
                    <Button onClick={() => deleteProduct()}>Delete</Button>
                    </Modal>
                )}

                {isUpdateModalOpen && (
                    <Modal
                    heading={'Update ' + productData.title}
                    onClose={() => setIsUpdateModalOpen(false)}
                    >
                    <ProductForm
                        mode="Update"
                        defaults={productData}
                        onSubmit={updateProduct}
                    />
                    </Modal>
                )} 
        

    </div>
  )
}

export default StockEditor
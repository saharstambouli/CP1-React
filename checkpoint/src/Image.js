import React from 'react';
import product from './product';

const ProductImage = () => {
    return (
        <div>
             <img src={product.image} alt={product.description} style={{ width: '10rem' }}  />
        </div>
    );
};

export default ProductImage;
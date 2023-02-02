import React from 'react';
import './Product.css';
const Product = ({product,addToCart}) => {
    return (
        <div className='product-container'>

            <img src={product.img} alt="" />

            <div className="product-info">
                <h6>{product.name}</h6>
                <p>Price: ${product.price}</p>
                <p>Manufacturer: {product.seller}</p>
                <p>Rating: {product.ratings} star</p>
            </div>
            <button onClick={()=>addToCart(product)}>Add to cart</button>

        </div>
    );
};

export default Product;
import React from 'react';
import './Review-item.css'
const ReviewItem = ({product , handleRemoveItem}) => {
    return (
        <div className='review-item'>
            <div>
                <img src={product.img} width='91px' alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{product.name}</p>
                    <p><small>Price: {product.price}</small></p>
                    <p><small>Shipping: {product.shipping}</small></p>
                    <p><small>Quantity: {product.quantity}</small></p>
                </div>
                <div className="delete-option">
                    <button onClick={()=>handleRemoveItem(product.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
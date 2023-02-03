import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {

    let price = 0;
    let tax;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        tax = parseFloat((price * 0.10).toFixed(2));
        shipping = shipping + product.shipping;
    }

    const grandTotal = price +tax + shipping;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h3>Item Added: {cart.length} </h3>
            <h4>Price: ${price} </h4>
            <h4>Tax: ${tax}</h4>
            <h4>Shipping: ${shipping} </h4>
            <h2>Total: ${grandTotal}</h2>
        </div>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import { addToDb,getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products,setProducts] = useState([]);

    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])



    useEffect(()=>{

        const storedCart = getStoredCart();
        // console.log(storedCart);

        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    },[products])



    const addToCart = (selectedProduct) =>{


        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id );
        if(!exist){
            selectedProduct.quantity = 1;
             newCart = [...cart,selectedProduct];

        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
             newCart = [...rest,exist];
        }


        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} addToCart={addToCart} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;
import React from 'react';

const Cart = (props) => {
    const {name}=props.cart;
    return (
        <div>
            <p>{name}</p>
            <button></button>
        </div>
    );
};

export default Cart;
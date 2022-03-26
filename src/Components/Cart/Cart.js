import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    const {handleRandomSelect,handleChooseAgain}=props;
   
    return (
        <div className='card  p-2 border-rounded'>
            <div className=" mt-2 p-2 border-rounded">
            {
                cart.map(cart =>
                <p key={cart.id}>{cart.name}</p>)
            
            }
            </div>
            <p>{props.random.name}</p>
             <button className='btn btn-dark choose mb-3'  onClick={()=> handleRandomSelect()} >Choose For me</button> 
           <button className='btn btn-dark choose' onClick={()=>handleChooseAgain()} >Choose Again</button>

        </div>
    );
};

export default Cart;
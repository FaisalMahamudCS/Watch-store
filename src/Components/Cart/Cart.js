import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    const {name}=props.random;
    const {handleRandomSelect,handleChooseAgain}=props;
   
    return (
        <div className='cart'>
       <h5> Selected Watch</h5>
        <div className='card  p-2 border-rounded'>
            <div className=" mt-2 p-2 border-rounded">
            {
                cart.map(cart =>
                <p key={cart.id}>{cart.name}</p>)
            
            }
            </div>
            <p>{name}</p>
             <button className='btn btn-dark choose mb-3'  onClick={()=> handleRandomSelect()} >Choose For me</button> 
           <button className='btn btn-dark choose' onClick={()=>handleChooseAgain()} >Choose Again</button>

        </div>
        </div>
    );
};

export default Cart;
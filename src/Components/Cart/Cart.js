import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    
   
    return (
        <div>
            {
                cart.map(cart =><p>{cart.name}</p>)
            
            }
            <p>{props.random.name}</p>
             <button className='btn btn-danger'  onClick={()=> props.handleRandomSelect()} >Choose For me</button> 
           <button className='btn btn-danger' onClick={()=>props.handleChooseAgain()} >Choose Again</button>

        </div>
    );
};

export default Cart;
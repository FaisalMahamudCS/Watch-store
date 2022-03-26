import React from 'react';
import './Product.css'

const Product = (props) => {
   // const {handleCart}=props.product;
 
   const {id,name,price,photo} =props.product;
   
    return (
       
        <div className="col-lg-4">
        <div className="card">
          <img src={photo} className=" card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price:{price}</p>
            <button className="btn btn-success" onClick={()=>props.handleCart(props.product)}>Add to Cart</button>
          </div>
        </div>
      
           
        </div>
    );
};

export default Product;
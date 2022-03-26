import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {handleCart}=props;
 
   const {id,name,price,photo} =props.product;
   
    return (
       
        <div className="col-lg-4">
        <div className="card h-100 p-2 border-0 shadow">
          <img src={photo} className=" card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price:{price}</p>
            <button className="btn btn-dark carts" onClick={()=>handleCart(props.product)}>Add to Cart   <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon></button>
      
          </div>
        </div>
      
           
        </div>
    );
};

export default Product;
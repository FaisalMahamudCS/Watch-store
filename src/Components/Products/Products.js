import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
  const [products,setProducts] =useState([]) 
  useEffect(() => {
 fetch('watch.json')
 .then(response=>response.json())
 .then(data=>setProducts(data))
  },[products])
  
  const [cart,setCart]=useState([]);
    const handleCart=(product)=>{
        console.log(product)
        const newCart=[...cart,product];
        setCart(newCart);
       } 
    return (
        <div className='product row row-cols-1 row-cols-md-2 g-4' >
     <div className="col-9">
         <div className='product row row-cols-1 row-cols-md-2 g-4' >
        {    
        products.map(product=><Product handleCart={handleCart} key={product.id} product={product}></Product>)
        

            }
            </div>
           </div>

            <div className="col-3">
        <div className="card">
            {
                cart.map(cart=><Cart cart={cart}></Cart>)
            }
           
        </div>
            </div>
        </div>
    );
};

export default Products;
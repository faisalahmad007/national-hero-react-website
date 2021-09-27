import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{cart} = props;
    let name = 0;
    let img = 0;
    for (const hero of cart) {
        name =  hero.name;
        img = hero.img;
        
    }
    let total = 0;
    for (const hero of cart) {
        total = total+ hero.salary;
        
    }
    return (
        <div className="cart-area text-center">
          
            <h4>Total Selected:{props.cart.length}</h4>
            <h5>Name:{name}</h5> 
            <p><img src={img} alt=""></img></p>
            <br/>
            <h6>Total Salary:${total}</h6>
            
        </div>
    );
};

export default Cart;
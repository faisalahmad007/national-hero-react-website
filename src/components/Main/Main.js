import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import './Main.css';


const Main = () => {
    const[heros,setHeros] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(() => {
        
        fetch(`./heros.JSON`)
        .then(res => res.json())
        .then(data => setHeros(data))
    
    }, [])

    const handleAddToCart = (hero) =>{
       const newCart = [...cart,hero];
       setCart(newCart);
    }
    
    return(
        <section className="container">
            <div className="row">
                <div className="col-md-9 hero-area">
                {
                    heros.map(hero =>
                        <Hero
                        key={hero.key} 
                        hero ={hero}
                        handleAddToCart={handleAddToCart}>
                        
                        </Hero>)
                }
                </div>
                <div className="col-md-3">
                   <Cart cart={cart}></Cart>
                   
                </div>
            </div>
        </section>
    );
};

export default Main;
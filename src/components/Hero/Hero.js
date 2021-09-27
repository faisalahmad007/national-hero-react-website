import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Hero.css';


const Hero = (props) => {
    console.log(props);
    const {img,id,name,rank,description,salary,died} = props.hero;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
    
        <div className="hero text-center">
            <img src={img} alt=""></img>
            <p>ID:{id}</p>
            <h5>Name:{name}</h5>
            <p>Rank:{rank}</p>
            <p>Description:{description}</p>
            <p>salary:{salary}</p>
            <p>Died:{died}</p>
            <button onClick={()=>props.handleAddToCart(props.hero)} className="cart-btn">{element}Add to Cart</button>
        </div>
    );
};

export default Hero;
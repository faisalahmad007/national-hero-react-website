import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/logo.jpeg';
import './Header.css';

const Header = () =>{
    const element = <FontAwesomeIcon icon={faSearch} />
    return(
       <div className="header">
           <h1 className="text-center"><img className="logo" src={logo} alt=""></img><span className="span-one">Heroes</span><span className="span-two">Of</span><span className="span-three">71</span></h1>
           <nav>
         <div className="row">
            <div className="col-lg-6">
               <a href="/shop">Useful Websites</a>
               <a href="/orders">Heros List</a>
               <a href="/inventory">Manage Inventory</a>
            </div>
            <div className="col-lg-6">
            <div class="input-group mx-auto">
                <input type="text" class="form-control" placeholder="Search"/><button class="btn btn-secondary" >{element}</button> 
            </div>
            </div>
            </div>
           </nav>
       </div>
       
    );
}
export default Header;
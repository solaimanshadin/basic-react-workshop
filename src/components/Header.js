import React, { useState } from 'react';
import {Link, NavLink,  useHistory , useLocation } from "react-router-dom";
const Header = () => {
    let history = useHistory();
    const location = useLocation();
    console.log(location);
    const [isLogged, setIsLogged]  = useState(true)

    function handleClick(path) {
        if(isLogged && path === '/login') {
             history.push('/account');
        }else{
            history.push(path)
        }
    }
  
  
    return (
        <div>
           <nav className="navbar navbar-expand-sm navbar-light bg-light">
               <a className="navbar-brand" href="#">AwsomeSite</a>
               <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                   aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="collapsibleNavId">
                   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                       <li className="nav-item">
                           <NavLink exact activeStyle={{borderBottom:'1px solid green'}} to="/" className="nav-link">Home</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink  activeStyle={{borderBottom:'1px solid green'}}  to="/about" className="nav-link">About us</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink  activeStyle={{borderBottom:'1px solid green'}}  to="/contact" className="nav-link">Contact us</NavLink>
                       </li>

                       <li className="nav-item">
                            <button 
                                onClick={()=>handleClick('/orders')}
                                className="btn btn-outline-success"
                             >Order</button>
                       </li>
                       <li className="nav-item ml-2">
                            <button 
                                onClick={()=>handleClick('/login')}
                                className="btn btn-outline-success"
                             >Login</button>
                       </li>
                       
                   </ul>
                   {
                       location.pathname !== '/' || <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                   }
                   
               </div>
           </nav>
        </div>
    );
};



export default Header;
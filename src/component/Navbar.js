
import React from 'react'
import { Link } from "react-router-dom";

import "../App.css";


export default function Navbar({token ,setToken}) {
    return (
        <div id="Nav">
           {token ? (
        <ul>
          <li className='a'>
          <Link to="/Home">Home <img src="iqon.pjg" alt="" /></Link>
          </li>
          <li className='a'>
            <Link to="/Job">Job</Link>
          </li>
          <li className='a'>
          <Link to="/Account">Account</Link>
          </li>
          <li  className='a'>
          <Link to="/Like">Like</Link>
          </li>
          <li  className='a'>
         <Link to ="/About">About</Link>

          </li>
          <li  className='a'>
          <Link onClick={()=>{setToken("");}} to ="/logOut">logOut</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className='b'>
          <Link to ="/login">login</Link>
          </li>
        
          <li className='b'>
          <Link to="/SignUp" >SignUp</Link> 
          </li>
          <li className='b'>
          <Link to="/HiBage" >HiBage</Link> 
          </li>
        </ul>
      )}  
        </div>
    
    )}

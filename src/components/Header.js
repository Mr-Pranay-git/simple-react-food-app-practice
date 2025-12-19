import React, { use } from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
 const Header = () => {
    let btnName = 'Login';
     const [LoginBtn ,  setLoginBtn] = useState('login')


    // console.log("header render"); 
    
     useEffect(()=>{
        // console.log('useEffect called')
     },[LoginBtn]);

     
    return(
        <div className="header">
            <div className="logo">
                <img alt="logo image" src="https://www.logodesign.net/logo-new/cartoon-food-truck-with-burger-on-top-9182ld.png?nwm=1&nws=1&industry=food&txt_keyword=All" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        LoginBtn == 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login');
                    }}>
                        
                        {LoginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;   
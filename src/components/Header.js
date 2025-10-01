import React, { use } from "react";
import { useState } from "react";
 const Header = () => {
    let btnName = 'Login';
     const [LoginBtn ,  setLoginBtn] = useState('login')
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo-new/cartoon-food-truck-with-burger-on-top-9182ld.png?nwm=1&nws=1&industry=food&txt_keyword=All" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        setLoginBtn('Logout')
                    }}>
                        {LoginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;   
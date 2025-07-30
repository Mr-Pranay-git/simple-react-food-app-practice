/*
Header[
logo
Home 
About
]

Body[
<serch bar><Search Button>
<container[
<card>]>
]
Footer[
<logo>
<description>
]
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    
}

const Body =()=>{
    return <div className="body">
        <div className="search-bar">Search</div>
        <div className="res-container">

        </div>
    </div>
}

const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Body/> 
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)


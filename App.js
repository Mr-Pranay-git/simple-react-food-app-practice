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

const RestaurantCard = (prop)=>{
    return(
        <div className="res-cards">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/c53517b8-dcb2-4a61-bfa7-9d667beded9f_188503.JPG" />
            <h3>{prop.resName} </h3>
            <h2>{prop.cusine} </h2>
            <h2>rating 4.4</h2>
            <h2>38 minutes</h2>

        </div>
    )
}

const resObj =()=> {}

const Body =()=>{
    return <div className="body" style={{fontFamily:"Arial"}}>
        <div className="search-bar">Search</div>
        <div className="res-container">
            <RestaurantCard 
                resName="Pizza Hut"
                cusine="pizza, french fries, pepsi"
             />
            <RestaurantCard 
                resName="Burger King"
                cusine="burgers, fries, coke"
            />
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


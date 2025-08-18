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

const RestaurantCard = (props)=>{
    const {resData} = props;
    return(
        <div className="res-cards" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/c53517b8-dcb2-4a61-bfa7-9d667beded9f_188503.JPG" />
            <h3>{resData.data.name} </h3>
            <h2>{resData.data.cuisines.join(",  ")} </h2>
            <h2>{resData.data.avgRating}</h2>
            <h2>₹{resData.data.costForTwo/100} FOR TWO</h2>
            <h2>{resData.data.deliveryTime}minutes</h2>

        </div>
    )
}

const resObj = {
        
        data: {
            id: "12345",
            name: "Pizza Hut",
            avgRating: "4.4",
            deliveryTime: "38 minutes",
            imageId: "image12345",
            cuisines:["Burgers","Biryani","American","Snacks"],
            costForTwo:40000,
        }

    
}

    
const Body =()=>{
    return <div className="body" style={{fontFamily:"Arial"}}>
        <div className="search-bar">Search</div>
        <div className="res-container">
            <RestaurantCard resData={resObj}/>
            <RestaurantCard resData={resObj}/>
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


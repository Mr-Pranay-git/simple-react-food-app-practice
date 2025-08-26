import React from "react";
import {CDN_URL} from '../utils/constants';
const RestaurantCard = (props)=>{
      const {resData} = props;
      const {cloudinaryImageId,name, cuisines, avgRating, costForTwo, deliveryTime}=resData?.info 
    return(
        <div className="res-cards" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name} </h3>
            <h2>{cuisines.join(",  ")} </h2>
            <h2>{avgRating}</h2>
            <h2>₹{costForTwo/100} FOR TWO</h2>
            <h2>{deliveryTime}minutes</h2>
        </div>
    )
}

export default RestaurantCard;
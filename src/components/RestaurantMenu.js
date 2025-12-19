import React, { useState } from "react";
import {useEffect}  from "react";
import res_menuData from "../utils/mockMenuData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{
    const [resInfo, setResinfo] = useState(null)
    const {resId} = useParams();
    

    useEffect(()=>{
        fetchMenu()
        setTimeout(()=>{
        // setResinfo(res_menuData)
        // console.log(res_menuData)

    }, 2000 )
    },[])
    
    // --------------cant able to fetch api ----------------------------------
    const fetchMenu = async ()=>{
        // console.log("function called menu wala");
        
         const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1463&lng=79.0849&restaurantId=869251${resId}`
         )
         const json = await data.json() 
         console.log(json);
    } 
    
    // ----------------------------------------------------------
    
  
    if(resInfo === null) return <Shimmer/>;

    console.log(resInfo[0]);
    console.log(resInfo[0]?.data?.cards[2]?.card?.card?.info);
    
    const {name, id, cloudinaryImageId, costForTwoMessage,cuisines} = resInfo[0]?.data?.cards[2]?.card?.card?.info  ;  
    
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;
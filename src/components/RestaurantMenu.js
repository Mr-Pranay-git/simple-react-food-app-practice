import React, { useState } from "react";
import {useEffect}  from "react";
import res_menuData from "../utils/mockMenuData";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const [resInfo, setResinfo] = useState(null)

    useEffect(()=>{
        // fetchMenu()
        setTimeout(()=>{
        setResinfo(res_menuData)
        console.log(res_menuData)
    }, 2000 )
    },[])
    
    // --------------cant able to fetch api ----------------------------------
    const fetchMenu = async ()=>{
        console.log("function called menu wala");
        
         const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1463&lng=79.0849&restaurantId=869251&catalog_qa=undefined&submitAction=ENTER"
         )
         const json = await data.json()
        //  console.log(json);
    }
    
    // ----------------------------------------------------------
    
    // console.log(res_menuData);

    
    
    return resInfo === null ? <Shimmer/> : (
        <div className="menu">
            <h1>Name of Restaurant</h1>
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
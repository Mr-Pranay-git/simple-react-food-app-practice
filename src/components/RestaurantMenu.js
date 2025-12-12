import React from "react";
import {useEffect}  from "react";
const RestaurantMenu = ()=>{
    useEffect(()=>{
        fetchMenu() 

    },[])

    // --------------cant able to fetch api ----------------------------------
    const fetchMenu = async ()=>{
        console.log("function called menu wala");
        
         const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1463&lng=79.0849&restaurantId=869251&catalog_qa=undefined&submitAction=ENTER"
         )
         const json = await data.json()
         console.log(json);
    }
    
    // ----------------------------------------------------------
    
    return(
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
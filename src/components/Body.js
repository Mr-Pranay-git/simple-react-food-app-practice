import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurantlist, SetRestaurantlist] = useState([]);
    
    useEffect(()=>{
       fetchData()
    },[])
    
    
    const fetchData = async ()=>{
        const  data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1463&lng=79.0849&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // SetRestaurantlist(json?.data?.cards[2]?.card?.card);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        SetRestaurantlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    };

    if(restaurantlist.length === 0){
        return <Shimmer></Shimmer>
        
    }
    
    
    return <div className="body" style={{ fontFamily: "Arial" }}>
        
        <button className="filter-btn" 
        onClick={()=>{
          const filteredlist =  restaurantlist.filter((res)=>res.info.avgRating > 4.6)

          SetRestaurantlist(filteredlist)
        }}>
            Click to Find Best Restaurant
        </button>
        <div className="res-container">
            {
                restaurantlist.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
            }
        </div>
    </div>
}

export default Body;
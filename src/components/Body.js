import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    let [restaurantlist, SetRestaurantlist] = useState(reslist);

    return <div className="body" style={{ fontFamily: "Arial" }}>
        
        <button className="filter-btn" 
        onClick={()=>{
          const filteredlist =  restaurantlist.filter((e)=>e.info.avgRating > 4.6)

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
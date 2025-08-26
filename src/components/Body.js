import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";


const Body =()=>{
    return <div className="body" style={{fontFamily:"Arial"}}>
        <div className="search-bar">Search</div>
        <div className="res-container">
            {
              reslist.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
            }
        </div>
    </div>
}

export default Body;
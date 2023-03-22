import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function findRestaurant(searchText,restaurants){
    if(!searchText){
        return restaurantList;
    }
   const data = restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText))
   return data;
}

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants,setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className="search-btn" onClick={()=>{
            const data = findRestaurant(searchText,restaurants);
            setRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";

function findRestaurant(searchText, restaurants) {
  const data = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.134316&lng=74.730428&page_type=DESKTOP_WEB_LISTING"
    );
    const convertedData = await data.json();
    const requiredData = convertedData?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(requiredData);
    setFilteredRestaurants(requiredData);
  }

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = findRestaurant(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-cards">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        ) : (
          <h1>No restaurant found</h1>
        )}
      </div>
    </div>
  );
};

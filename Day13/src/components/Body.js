import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { findRestaurant } from "../utils/helpers";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const {user,setUser} = useContext(UserContext);


  const isOnline = useOnline();

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

  if(!isOnline){
    return <h1 data-testid="offline"> Looks like you are offline. Please connect to internet!</h1>
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
      <Shimmer />
  ) : (
    <div className="bg-gray-50 px-40 m-2">
      <div className="p-2">
        <input
          data-testid="search-input"
          className="h-10 w-52 bg-white p-3 border border-slate-300 rounded-md focus:ring-orange-600 focus:ring-1 mx-2"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        {/* <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-fit border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/> */}
        <button
          data-testid="search-btn"
          className="px-4 py-1 text-sm text-orange-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
          onClick={() => {
            const data = findRestaurant(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input type="text" value={user.name} onChange={e=>{
          setUser({
            ...user,
            name: e.target.value
          })
        }}></input>
        <input type="text" value={user.email} onChange={e => {
          setUser({
            ...user,
            email: e.target.value
          })
        }}></input>
      </div>
      <div data-testid="restaurant-list" className="flex flex-wrap">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
              <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        ) : (
          <h1>No restaurant found</h1>
        )}
      </div>
    </div>
  );
};

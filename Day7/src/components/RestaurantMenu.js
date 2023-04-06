import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params, "pasrams");
  const [restaurant, setRestaurant] = useState();
  const [restaurantMenu, setRestaurantMenu] = useState();
  const { id } = params;
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    // const API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.134316&lng=74.730428&restaurantId="+id;
    // console.log(API_URL);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.134316&lng=74.730428&restaurantId=" +
        id
    );
    const menu = await data.json();
    const data5 = Object.values(menu?.data?.cards)
      .find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (data) => data?.card?.card?.itemCards
      )
      ?.flatMap((data) => data?.card?.info)
      ?.filter(Boolean);
    setRestaurantMenu(data5);
    //console.log(restaurantMenu,"restaurantMenu");

    const resto = menu?.data?.cards[0].card.card.info;
    setRestaurant(resto);
    // console.log(restaurant,"restaurant");
    //console.log(restaurant.name,"restaurant");
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu-page">
      <div className="restaurant-details">
        <h1>Name: {restaurant.name}</h1>
        <h1>Id: {restaurant.id}</h1>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant.cloudinaryImageId
          }
        ></img>
      </div>
      <div className="restaurant-menu">
        <h2>Menu</h2>
        {restaurantMenu.map((restMenu) => {
          return <li>{restMenu.name}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

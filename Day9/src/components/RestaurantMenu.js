import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { CDN_IMG_URL } from "../constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, restaurantMenu } = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu-page">
      <div className="restaurant-details">
        <h1>Name: {restaurant.name}</h1>
        <h1>Id: {restaurant.id}</h1>
        <img src={CDN_IMG_URL + restaurant.cloudinaryImageId}></img>
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

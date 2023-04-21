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
    <div className="flex m-5">
      <div className="m-5">
        <h1 className="text-xl font-semibold">Name: {restaurant.name}</h1>
        <h1 className="text-md">Id: {restaurant.id}</h1>
        <img src={CDN_IMG_URL + restaurant.cloudinaryImageId}></img>
      </div>
      <div className="m-5">
        <h2 className="text-xl font-semibold">Menu</h2>
        {restaurantMenu.map((restMenu) => {
          return <li key={restMenu.id}>{restMenu.name}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

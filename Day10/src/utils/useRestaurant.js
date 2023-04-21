import { useState, useEffect } from "react";
import { MENU_API_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();
  const [restaurantMenu, setRestaurantMenu] = useState();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(MENU_API_URL + id);
    const menu = await data.json();
    const data5 = Object.values(menu?.data?.cards)
      .find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (data) => data?.card?.card?.itemCards
      )
      ?.flatMap((data) => data?.card?.info)
      ?.filter(Boolean);
    setRestaurantMenu(data5);
    const resto = menu?.data?.cards[0].card.card.info;
    setRestaurant(resto);
  }

  return { restaurant, restaurantMenu };
};

export default useRestaurant;

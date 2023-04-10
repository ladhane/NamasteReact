import { CDN_IMG_URL } from "../constants";
import { MENU_API_URL } from "../constants";

export const RestaurantCard = ({name,cloudinaryImageId,lastMileTravelString,cuisines}) => {
    return(
        <div className="card">
        <img src={CDN_IMG_URL+cloudinaryImageId} alt="image"></img>
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{lastMileTravelString}</h3>
        </div>
    )
}
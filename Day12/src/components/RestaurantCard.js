import { CDN_IMG_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  const  {user}  = useContext(UserContext);
  return (
    <div className="p-5 m-5 w-80 hover:shadow-lg hover:shadow-gray-500/40 hover:border-gray-300 hover:border-1">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="image"></img>
      <h1 className="font-semibold my-2 text-xl">{name}</h1>
      <h2 className="text-xs text-gray-600">{cuisines.join(", ")}</h2>
      <h2 className="text-xs text-gray-600">{user.email} - {user.name}</h2>
      {/* <h3 className="text-xs">{lastMileTravelString}</h3> */}
      <div className="my-5 border-t-2"></div>

      <ul className="list-none flex justify-between text-xs  text-gray-600">
        <li>
          <div className="flex bg-green-600 text-white m-1 p-1 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {avgRating}
          </div>
        </li>
        <li className="my-2 text-xs">{slaString} </li>
        <li className="my-2 text-xs">{costForTwoString}</li>
      </ul>
    </div>
  );
};

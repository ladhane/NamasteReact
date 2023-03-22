export const RestaurantCard = ({name,cloudinaryImageId,lastMileTravelString,cuisines}) => {
    return(
        <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="image"></img>
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h3>{lastMileTravelString}</h3>
        </div>
    )
}
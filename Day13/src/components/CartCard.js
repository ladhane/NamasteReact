import { useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";

export const CartCard = ({
    id,
  name,
  price,
  description
}) => {
    const dispatch = useDispatch();
    const handleRemoveItem = (id) =>{
        dispatch(removeItem(id));
    }
  return ( 
    <div className="p-5 m-5 w-80 shadow-lg shadow-gray-500/40 border-gray-300 border-1">
      <h1 className="font-semibold my-2 text-xl">{name}</h1>
      <h1 className="my-2 text-xs">{description}</h1>
      <h2 className="text-sm text-gray-600">{price/100}</h2>
      <button data-testid="remove-item-btn" onClick={()=>handleRemoveItem(id)}>Delete</button>
    </div>
  );
};

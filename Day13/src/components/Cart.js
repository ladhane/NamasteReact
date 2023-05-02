import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "./CartCard";
import { clearCart } from "../utils/CartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <h1 className="text-3xl font-bold m-5"> Cart is empty</h1>
  ) : (
    <div className="m-5">
      <h1 className="text-3xl font-bold"> cartItems - {cartItems.length}</h1>
      <button
      data-testid="clear-cart-btn"
        onClick={() => handleClearCart()}
        className="px-2 m-3 bg-green-100"
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <CartCard key={item.id} {...item}></CartCard>
        ))}
      </div>
    </div>
  );
};

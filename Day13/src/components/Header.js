import { useState,useContext } from "react";
import Logo from '../assets/images/Annapurna.png';
import UserContext from '../utils/UserContext';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";

export const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" src={Logo} alt="logo" className="h-20 p-2"></img>
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg shadow-gray-300/40">
      <Title />
      <ul className="list-none flex py-8">
        <li className="px-2"><Link data-testid="home" to="/"> Home </Link></li>
        <li className="px-2"> <Link data-testid="about" to="/about">About </Link> </li>
        <li className="px-2"> <Link data-testid="contact" to="/contact">Contact </Link></li>
        <li className="px-2"><Link data-testid="instamart" to="/instamart">Instamart</Link></li>
        <li className="px-2"><Link data-testid="cart" to="/cart"> Cart - {cartItems.length} </Link></li>
      </ul>
      <p className="px-2 py-8">{user.name}</p>
      { isLoggedIn ? <button data-testis="logout" className="px-2" onClick={()=> setIsLoggedIn(false)}>Logout</button> :
      <button data-testid="login" className="px-2" onClick={()=> {setIsLoggedIn(true)}}>Login</button>}
    </div>
  );
};

import { useState } from "react";
import Logo from '../assets/images/Annapurna.png';
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="h-20 p-2"></img>
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between shadow-lg shadow-gray-300/40">
      <Title />
      <ul className="list-none flex py-8">
        <li className="px-2"><Link to="/"> Home </Link></li>
        <li className="px-2"> <Link to="/about">About </Link> </li>
        <li className="px-2"> <Link to="/contact">Contact </Link></li>
        <li className="px-2"> Cart </li>
      </ul>
      { isLoggedIn ? <button className="px-2" onClick={()=> setIsLoggedIn(false)}>Logout</button> :
      <button className="px-2" onClick={()=> {setIsLoggedIn(true)}}>Login</button>}
    </div>
  );
};

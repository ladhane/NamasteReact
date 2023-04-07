import { useState } from "react";
import Logo from '../assets/images/Annapurna.png';
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="logo"></img>
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li><Link to="/"> Home </Link></li>
        <li> <Link to="/about">About </Link> </li>
        <li> <Link to="/contact">Contact </Link></li>
        <li> Cart </li>
      </ul>
      { isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> :
      <button onClick={()=> {setIsLoggedIn(true)}}>Login</button>}
    </div>
  );
};

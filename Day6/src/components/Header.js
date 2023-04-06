import { useState } from "react";

export const Title = () => {
  return (
    <a href="/">
      <img src={require("/Annapurna.png")} alt="logo" className="logo"></img>
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li> Home </li>
        <li> About </li>
        <li> Contact </li>
        <li> Cart </li>
      </ul>
      { isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> :
      <button onClick={()=> setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};

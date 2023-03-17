import React from 'react';
import ReactDOM from 'react-dom/client';
import { AiOutlineSearch } from "react-icons/ai";

const HeaderComponent = () => {
    return (
    <div id="header">
        <img id="logo" src="https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane.png"  width={35} height={30}  alt="Logo"/>
       <div id="search-bar">
        <input id="search" type="text" placeholder="Search here"/>
        <AiOutlineSearch />
        </div>
        <img id="image" src="https://cutewallpaper.org/24/person-icon-png-transparent/person-icon-white-icon-png-free-png-images-toppng.png" width={30} height={30} alt='Profile'/>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);
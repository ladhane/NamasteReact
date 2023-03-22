export const Title = ()=> {
    return(
        <a href="/">
        <img src={require("/Annapurna.png")} alt="logo" className="logo"></img>
        </a>
    )
}

export const Header = () => {
    return (
        <div className="header">
        <Title/>
        <ul className="nav-items">
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
            <li> Cart </li>
        </ul>
        </div>
    )
}
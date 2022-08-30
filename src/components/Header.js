import {useState} from "react";
import './Header.css';
import {Link, NavLink} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

const items = [{name:"Projets", link:"/project", component:{Project}}, {name:"À propos", link:"/about", component:{About}}, {name:"Contact", link:"/contact", component:{Contact}}];

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);

    function handleButtonClick(){
        setOpenMenu(prev => !prev);
    }
    function closeMenu (){
        setOpenMenu(false);
    }
    
return (<>
<header id="header">
    <p className="Header-logo"><Link to="/" onClick={() => closeMenu()}>Jessy-Daniel</Link></p>
    <button className={`Header-burger${openMenu ? " openMenu" : ""}`} onClick={handleButtonClick}>
        <span className="Header-burger__line1"></span>
        <span className="Header-burger__line2"></span>
        <span className="Header-burger__line3"></span>
    </button>
    <nav className={openMenu ? "openMenu" : ""}>
        <ul>{
            items.map((item, index) => <li key={index}><NavLink to={item.link}
            onClick={() => closeMenu()}>{item.name}</NavLink></li>)
        }</ul>
    </nav>
</header>
</>
);
}
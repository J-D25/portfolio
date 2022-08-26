import './Header.css';
import {Link, NavLink} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

const items = [{name:"Projets", link:"/project", component:{Project}}, {name:"À propos", link:"/about", component:{About}}, {name:"Contact", link:"/contact", component:{Contact}}];

export default function Header(){
return (<>
<header id="header">
    <p className="Header-logo"><Link to="/">Jessy-Daniel</Link></p>
    <nav>
        <ul>{
            items.map((item, index) => <li key={index}><NavLink to={item.link}>{item.name}</NavLink></li>)
        }</ul>
    </nav>
</header>
</>
);
}
import './Header.css';
import {Link, Outlet} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

const items = [{name:"Projets", link:"/project", component:{Project}}, {name:"À propos", link:"/about", component:{About}}, {name:"Contact", link:"/contact", component:{Contact}}];

export default function Header(){
return (<>
    <p className="Header-logo"><Link reloadDocument to="/">Jessy-Daniel</Link></p>
    <ul>{
        items.map((item, index) => <li key={index}><Link reloadDocument to={item.link} className="nav-link">{item.name}</Link></li>)
    }</ul>
<Outlet />
</>
);
}
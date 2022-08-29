import './App.css';
import {Link} from "react-router-dom";

export default function Sitemap() {
  return (<>
    <div className="App-content">
      <h1>Plan du site</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/project">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/legals">Mentions légales</Link></li>
        <li><Link to="/sitemap">Plan du site</Link></li>
      </ul>
    </div>
    </>);
}
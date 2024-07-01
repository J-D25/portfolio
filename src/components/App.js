import './App.css';
import {Link} from "react-router-dom";
import Numbers from './Numbers.js';
import illustration from "../assets/home.svg";
import {dayFromDate} from "../day.js";

export default function App() {

  return (<>
    <img className="App-illustration" alt="Homme assis à un bureau devant un écran d'ordinateur." width="486.656" height="400" src={illustration}></img>
    <div className="App-content">
      <div>
        <h1>Jessy-Daniel</h1>
        <p className="App-subtitle">Développeur web et web mobile</p>
      </div>
      <p className="App-hello">Bonjour ! N'hésitez pas à <Link to="/project">découvrir mes projets</Link>, <Link to="/about">en apprendre plus sur moi</Link> ou <Link to="/contact">me contacter</Link>.</p>
      <div className="App-Numbers">
        <Numbers value={dayFromDate("19 May 2000", "years")} title="ans"/>
        <Numbers value="1000" title="commits"/>
        <Numbers value={dayFromDate("12 May 2012")} title="jours de code"/>
      </div>
      <p className="App-hello btn-container"><Link to="/about" className="button">En apprendre plus</Link></p>
    </div>
    </>);
}
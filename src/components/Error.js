import {Link} from "react-router-dom";
import './App.css';
import illustration from "../assets/error.svg";

export default function Error() {
  return (<>
    <div className="App-content">
      <h1>Il semblerait que vous soyez perdu !</h1>
      <p><Link to="/" class="button">Retourner à l'accueil</Link></p>
    </div>
    <img className="App-illustration" alt="Homme assis à un bureau devant un écran d'ordinateur." width="450.109" height="425" src={illustration}></img>
    </>);
}
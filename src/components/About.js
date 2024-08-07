import './App.css';
import './About.css';
import illustration from "../assets/about.svg";
import MySQL from "../assets/MySQL.svg";
import VBA from "../assets/VBA.svg";
import VSCode from "../assets/VSCode.svg";
import {dayFromDate} from "../day.js";

export default function About() {
  return (<>
    <div className="App-content">
      <h1>À propos</h1>
      <p className="About-paragraph">Passionné par l'informatique depuis toujours, je mets mes compétences au service de la commune de Villy-en-Auxois depuis {dayFromDate("12 May 2012", "years")} ans en assurant le développement et la maintenance de leur site Internet.</p>
      <p className="About-paragraph">En novembre 2022, j'ai obtenu le titre professionnel développeur web et web mobile après une formation chez Onlineformapro à Besançon.</p>
      <p className="About-paragraph">J'ai ensuite travaillé pendant un an en tant que développeur web chez JVFlex et je suis à la recherche de nouvelles opportunités.</p>
      <p><a href="/CV_J-D25.pdf" className="button">Télécharger mon CV</a></p>
      <div className="About-icons">
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3-alt"></i>
        <i className="fa-brands fa-js"></i>
        <i className="fa-brands fa-php"></i>
        <img src={MySQL} width="52" height="50" alt="MySQL"/>
        <i className="fa-brands fa-git-alt"></i>
        <i className="fa-brands fa-react"></i>
        <img src={VBA} width="45" height="25" alt="Visual Basic for Applications"/>
      </div>
      <div className="About-icons">
        <img src={VSCode} width="50" height="49" alt="Visual Studio Code"/>
        <i className="fa-brands fa-figma"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-ubuntu"></i>
      </div>
    </div>
    <img className="App-illustration reversed" alt="Homme assis à un bureau devant un écran d'ordinateur." width="529.406" height="480" src={illustration}></img>
    </>);
}
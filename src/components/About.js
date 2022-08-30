import './App.css';
import './About.css';
import illustration from "../assets/about.svg";
import MySQL from "../assets/MySQL.svg";
import VBA from "../assets/VBA.svg";
import VSCode from "../assets/VSCode.svg";

export default function About() {
  return (<>
    <div className="App-content">
      <h1>À propos</h1>
      <p className="About-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum bibendum lorem, eu sollicitudin tellus convallis at. Fusce justo massa, aliquet ut maximus a, porttitor vel turpis. Ut faucibus facilisis est, vitae suscipit ante commodo nec. Suspendisse eget ipsum varius, viverra orci sit amet, dapibus leo. Nullam ut lacinia orci, et tincidunt neque.</p>
      <p><a href="/" className="button">Télécharger mon CV</a></p>
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
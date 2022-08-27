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
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-php"></i>
        <img src={MySQL} alt="MySQL"/>
        <i class="fa-brands fa-git-alt"></i>
        <i class="fa-brands fa-react"></i>
        <img src={VBA} alt="Visual Basic for Applications"/>
      </div>
      <div className="About-icons">
        <img src={VSCode} alt="Visual Studio Code"/>
        <i class="fa-brands fa-figma"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-ubuntu"></i>
      </div>
    </div>
    <img className="App-illustration" alt="Joli" height="500" src={illustration}></img>
    </>);
}
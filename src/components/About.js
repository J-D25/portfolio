import './App.css';
import './About.css';
import illustration from "../assets/about.svg";

export default function About() {
  return (<>
    <div className="App-content">
      <h1>À propos</h1>
      <p className="About-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum bibendum lorem, eu sollicitudin tellus convallis at. Fusce justo massa, aliquet ut maximus a, porttitor vel turpis. Ut faucibus facilisis est, vitae suscipit ante commodo nec. Suspendisse eget ipsum varius, viverra orci sit amet, dapibus leo. Nullam ut lacinia orci, et tincidunt neque.</p>
      <a href="/">Télécharger mon CV</a>
      <div className="About-icons">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-php"></i>
        sql
        <i class="fa-brands fa-git-alt"></i>
        <i class="fa-brands fa-react"></i>
        vba
      </div>
      <div className="About-icons">
        <i class="fa-brands fa-figma"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-ubuntu"></i>
      </div>
    </div>
    <img className="App-illustration" alt="Joli" height="500" src={illustration}></img>
    </>);
}
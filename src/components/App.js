import './App.css';
import illustration from "../assets/home.svg";
export default function App() {
  return (<>
    <img className="App-illustration" alt="Joli" height="55%" src={illustration}></img>
    <div className="App-content">
      <h1>Jessy-Daniel</h1>
      <p className="App-subtitle">Développeur web et web mobile</p>
      <p>Bonjour ! N'hésitez pas à découvrir mes projets, en apprendre plus sur moi ou me contacter.</p>
    </div>
    </>);
}

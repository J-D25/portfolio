import './App.css';
import Numbers from './Numbers.js';
import illustration from "../assets/home.svg";
export default function App() {
  function dayFromDate(olddate, output){
    const oldDate = new Date(olddate);
    const currentDate = new Date();
    let timestampsDiff = currentDate.getTime() - oldDate.getTime();
    let calcDiff = 1000 * 3600 * 24;
    if (output === "years"){
      calcDiff = 1000 * 3600 * 24 * 365;
    }
    let daysDiff = timestampsDiff / calcDiff;
    return Math.round(daysDiff);
  }
  return (<>
    <img className="App-illustration" alt="Joli" height="400" src={illustration}></img>
    <div className="App-content">
      <h1>Jessy-Daniel</h1>
      <p className="App-subtitle">Développeur web et web mobile</p>
      <p>Bonjour ! N'hésitez pas à découvrir mes projets, en apprendre plus sur moi ou me contacter.</p>
      <div className="App-Numbers">
        <Numbers value="523" title="commits"/>
        <Numbers value={dayFromDate("12 May 2012")} title="jours de code"/>
        <Numbers value={dayFromDate("19 May 2000", "years")} title="ans"/>
      </div>
    </div>
    </>);
}

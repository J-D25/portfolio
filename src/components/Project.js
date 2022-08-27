import './App.css';
import ProjectsCards from "./ProjectsCards";
import allProjects from "../data/allProjects.json";

export default function Project() {

  return (<>
    <div className="App-content">
      <h1>Mes projets</h1>
      <div className="Project-Cards">
        {allProjects.map((project, index) => <ProjectsCards key={index} project={project}/>)}
      </div>
    </div>
    </>);
}

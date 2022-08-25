import './ProjectsCards.css';
import ProjectsLanguages from './ProjectsLanguages';

export default function ProjectsCards(){
return (<>
    <div className="ProjectsCards">
        <div className="ProjectsCards-illustration">
            Illustration
        </div>
        <div className="ProjectsCards-content">
            <div className="ProjectsCards-content-title">
                <h2>Basilique Saint-Ferjeux</h2>
                <a href="#">Lien</a>
                <a href="#">Github</a>
            </div>
            <p>Réalisation d'un site Internet sur l'histoire de la Basilique Saint-Ferjeux dans le cadre d'un projet de découverte au cours de ma formation.</p>
            <div className="ProjectsCards-languages">
                <ProjectsLanguages type="lang" value="HTML"/>
                <ProjectsLanguages type="lang" value="CSS"/>
                <ProjectsLanguages type="lang" value="PHP"/>
            </div>
            <div className="ProjectsCards-languages">
                <ProjectsLanguages type="skill" value="Front"/>
            </div>
        </div>
    </div>
</>);
}
